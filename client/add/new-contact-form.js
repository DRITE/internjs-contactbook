import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Modal, Form, Input } from 'antd'; 
import 'antd/dist/antd.css';
import {handelAddContact} from './handle-add-contact';

const FormItem = Form.Item;

const NewContactForm = Form.create()(
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
                        {getFieldDecorator('firstName', {
                            rules: [{ required: true, message: 'Please input the first name' }],
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

export class NewContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }
    

    showModal() {
        console.log('зашли в showModal');
        this.setState({ visible: true });
    }
    handleCancel() {
        this.setState({ visible: false });
    }
    handleCreate() {  ////////ВСТАВИТЬ ОБРАБОТКУ СОЗДАНИЯ НОВОГО КОНТАКТА
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log('Received values of form: ', values);
            //сюда вставить сохранение полей в массив
            handelAddContact(values);
            form.resetFields();
            this.setState({ visible: false });
        });
    }
    saveFormRef(form) {
        console.log('Зашли в saveFormRef');
        this.form = form;
    }
    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showModal.bind(this)}>New Contact</Button>
                <NewContactForm
                    ref={this.saveFormRef.bind(this)}
                    visible={this.state.visible}
                    onCancel={this.handleCancel.bind(this)}
                    onCreate={this.handleCreate.bind(this)}
                />
            </div>
        );
    }
}
