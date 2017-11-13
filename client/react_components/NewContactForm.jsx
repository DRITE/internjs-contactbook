import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal, Form, Input } from "antd";
import "antd/dist/antd.css";

const FormItem = Form.Item;

export const NewContactForm = Form.create()(
    (props) => {
        const { visible, onCancel, onCreate, form } = props;
        const { getFieldDecorator } = form;
        return (
            <Modal
                visible={visible}
                title="Create a new contact"
                okText="Create"
                onCancel={onCancel}
                onOk={onCreate}
            >
                <Form layout="vertical">
                    <FormItem label="First Name">
                        {getFieldDecorator("firstName", {
                            rules: [{ required: true, message: "Please input the first name" }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem label="Last Name">
                        {getFieldDecorator('lastName', {
                            rules: [{ required: true, message: 'Please input the second name' }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem label="Phone Number">
                        {getFieldDecorator('phoneNumber', {
                            rules: [{ required: true, message: 'Please input the phone number' }],
                        })(
                            <Input />
                            )}
                    </FormItem>
                    <FormItem label="Age">
                        {getFieldDecorator('age')(<Input />)}
                    </FormItem>
                    <FormItem label="Address">
                        {getFieldDecorator('address')(<Input />)}
                    </FormItem>
                </Form>
            </Modal>
        );
    }
);