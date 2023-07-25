import { Form, Input, Modal, Select, notification } from "antd";
import React, { useEffect } from "react";

import { createCategory, updateCategory } from "../../../../api/category";
import { ICategory } from "../../../../interfaces/category.type";


type IProps = {
  categoryEdit?: ICategory | null;
  setCategoryEdit: React.Dispatch<React.SetStateAction<ICategory | null>>;
  isOpenCEModal: boolean;
  setIsOpenCEModal: React.Dispatch<React.SetStateAction<boolean>>;
  setCategories: React.Dispatch<React.SetStateAction<ICategory[]>>;
};
export default function CEModal({
  isOpenCEModal,
  setIsOpenCEModal,
  setCategoryEdit,
  categoryEdit,
  setCategories,
}: IProps) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      name: categoryEdit?.name,
    });
  }, [categoryEdit]);

  const onClose = () => {
    form.resetFields();
    setCategoryEdit(null);
    setIsOpenCEModal(false);
  };

  const onFinish = (values: any) => {
    if (categoryEdit) {
      (async () => {
        const { data } = await updateCategory(categoryEdit._id, values);
        setCategories((prev) => {
          return prev.map((category) => {
            if (category._id === categoryEdit._id) {
              return { ...category, ...values };
            }
            return category;
          });
        });
        notification.success({ message: data.message });
      })();
    } else {
      (async () => {
        const { data } = await createCategory(values);
        setCategories((prev) => {
          return [...prev, data.data as ICategory];
        });
        notification.success({ message: <data className="message">Xóa thành công</data> });
      })();
    }
    onClose();
  };
  
    return (
      <Modal
        open={isOpenCEModal}
        title="Create/Edit category"
        onOk={() => form.submit()}
        onCancel={onClose}
        okText="Save"
      >
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
                message: "Name is required!",
              },
            ]}
          >
            <Input placeholder="Please type" />
          </Form.Item>
        </Form>
      </Modal>
    );
  }
