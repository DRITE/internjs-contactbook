import React from "react";
import {Button} from "antd";
import "antd/dist/antd.css";
import {NewContactForm} from "./NewContactForm.jsx";
import {handelAddContactReact} from "../add/handle-add-contact-react";

export class NewContactPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
    }


    showModal() {
        console.log("зашли в showModal");
        this.setState({visible: true});
    }

    handleCancel() {
        this.setState({visible: false});
    }

    handleCreate() {  ////////ВСТАВИТЬ ОБРАБОТКУ СОЗДАНИЯ НОВОГО КОНТАКТА
        const form = this.form;
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            console.log("Received values of form: ", values);
            //сюда вставить сохранение полей в массив
            console.log('Из формы мы получили следующие значения: ', form.getFieldsValue());
            handelAddContactReact.call(this,form.getFieldsValue());
            form.resetFields();
            this.setState({visible: false});
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