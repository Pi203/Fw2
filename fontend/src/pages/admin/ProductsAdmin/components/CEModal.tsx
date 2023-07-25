import { useState, useEffect } from "react";
import { Form, Input, Modal, Select, notification } from "antd";
import { getCategories } from "../../../../api/category";
import { createProduct, updateProduct } from "../../../../api/product";
import { IProduct } from "../../../../interfaces/product.type";
import { ICategory } from "../../../../interfaces/category.type";

import { message } from "antd/lib/index";
type CEModalProps = {
  isOpenCEModal: boolean;
  setIsOpenCEModal: React.Dispatch<React.SetStateAction<boolean>>;
  productEdit: IProduct | null;
  setProductEdit: React.Dispatch<React.SetStateAction<IProduct | null>>;
  setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

export default function CEModal({
  isOpenCEModal,
  setIsOpenCEModal,
  productEdit,
  setProductEdit,
  setProducts,
}: CEModalProps) {
  const [form] = Form.useForm();
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    async function fetchAllCategories() {
      const { data } = await getCategories();
      setCategories(data.data as ICategory[]);
    }
    fetchAllCategories();
  }, []);

  useEffect(() => {
    form.setFieldsValue({
      name: productEdit?.name,
      price: productEdit?.price,
      description: productEdit?.description,
      categoryId: productEdit?.categoryId,
      image: productEdit?.image,
    });
  }, [form, productEdit]);

  const handleCloseModal = () => {
    form.resetFields();
    setProductEdit(null);
    setIsOpenCEModal(false);
  };

  const handleFormSubmit = async (values: any) => {
    try {
      let data;
      if (productEdit) {
        data = await updateProduct(productEdit._id, values);
        setProducts((prev) =>
          prev.map((product) =>
            product._id === productEdit._id ? { ...product, ...values } : product
          )
        );
      } else {
        data = await createProduct(values);
        setProducts((prev) => [data.data as IProduct, ...prev]);
      }
      notification.success({ message: <data className="message">Cập nhập thành công</data> });
      handleCloseModal();
    } catch (error) {

    }
  };

  return (
    <Modal
      visible={isOpenCEModal}
      title={productEdit ? "Edit product" : "Create product"}
      onCancel={handleCloseModal}
      onOk={() => form.submit()}
    >
      <Form layout="vertical" form={form} onFinish={handleFormSubmit}>
        <Form.Item
          name="name"
          label="Name"
          rules={[{ required: true, message: "Please enter product name" }]}
        >
          <Input placeholder="Product name" />
        </Form.Item>
        <Form.Item
          name="price"
          label="Price"
          rules={[{ required: true, message: "Please enter product price" }]}
        >
          <Input placeholder="Product price" />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true, message: "Please enter product description" }]}
        >
          <Input.TextArea placeholder="Product description" />
        </Form.Item>
        <Form.Item
          name="image"
          label="Image"
          rules={[{ required: true, message: "Please enter product image URL" }]}
        >
          <Input placeholder="Product image URL" />
        </Form.Item>
        <Form.Item name="categoryId" label="Category">
          <Select placeholder="Select a category">
            {categories.map((category) => (
              <Select.Option key={category._id} value={category._id}>
                {category.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}