import { Form, Input, Modal, Select, notification } from "antd";
import React, { useEffect } from "react";
import { User } from "../../../../interfaces/auth.type";


type IProps = {
  userEdit?: User | null;
  setUserEdit: React.Dispatch<React.SetStateAction<User | null>>;
  isOpenCEModal: boolean;
  setIsOpenCEModal: React.Dispatch<React.SetStateAction<boolean>>;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
};
export default function CEModal({
  isOpenCEModal,
  setIsOpenCEModal,
  setUserEdit,
  userEdit,
  setUsers,
}: IProps) {
  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue({
      role: userEdit?.role,
    });
  }, [userEdit]);

  const onClose = () => {
    form.resetFields();
    setUserEdit(null);
    setIsOpenCEModal(false);
  };

 

  return (
    <Modal
      open={isOpenCEModal}
      title="Edit user"
      onOk={() => form.submit()}
      onCancel={onClose}
      okText="Save"
    >
      <Form layout="vertical" form={form} >
        <Form.Item name="role" label="Role">
          <Select placeholder="Select a member">
            <Select.Option value="admin">Admin</Select.Option>
            <Select.Option value="member">Member</Select.Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  );
}
