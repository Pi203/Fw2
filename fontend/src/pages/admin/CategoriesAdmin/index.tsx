import { Button, Image, Popconfirm, Space, Table, notification } from "antd";
import React, { useEffect } from "react";
import { ColumnsType } from "antd/es/table";

import CEModal from "./components/CEModal";
import { deleteCategory, getCategories } from "../../../api/category";
import { ICategory } from "../../../interfaces/category.type";

export default function CategoriesAdmin() {
  const [categories, setCategories] = React.useState<ICategory[]>([]);
  const [isOpenCEModal, setIsOpenCEModal] = React.useState(false);
  const [categoryEdit, setCategoryEdit] = React.useState<ICategory | null>(
    null
  );

  useEffect(() => {
    const fetchAllCategories = async () => {
      const { data } = await getCategories();
      setCategories(data.data as ICategory[]);
    };
    fetchAllCategories();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const { data } = await deleteCategory(id);
      setCategories(categories.filter((category) => category._id !== id));
      notification.success({ message: data.message });
    } catch (error) {
   
    }
  };
  const columns: ColumnsType<ICategory> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      fixed: "left",
    },
    { title: "Action",
      key: "action",
      render(_: any, record: ICategory) {
        return (
          <Space size={5}>
            <Button
              onClick={() => {
                setIsOpenCEModal(true);
                setCategoryEdit(record);
              }}
              type="link"
            >
              Edit
            </Button>
            <Popconfirm
              placement="topRight"
              title="Are you sure?"
              onConfirm={() => handleDelete(record._id)}
            >
              <Button type="link">Delete</Button>
            </Popconfirm>
          </Space>
        );
      },
      fixed: "right",
      width: 180,
    },
  ];
  return (
    <div>
      <Button
        onClick={() => {
          setIsOpenCEModal(true);
          setCategoryEdit(null);
        }}
        style={{ marginBottom: 12 , }}
        type="primary"
      >
        Add+
      </Button>
      <Table dataSource={categories} columns={columns} />
      <CEModal
        isOpenCEModal={isOpenCEModal}
        setIsOpenCEModal={setIsOpenCEModal}
        setCategoryEdit={setCategoryEdit}
        categoryEdit={categoryEdit}
        setCategories={setCategories}
      />
    </div>
  );
}
