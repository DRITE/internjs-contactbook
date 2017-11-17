import React from "react";
import "antd/dist/antd.css";
import {Button, Icon, Table} from "antd";
import {NewContactPage} from "./NewContactPage.jsx";
import {handelDeleteContactReact} from "../delete/handle-delete-contact-react";
import {handleShowContactsReact} from "../show/handle-show-contacts-react";
import {handelAddContactReact} from "../add/handle-add-contact-react";
import {fetchContacts, receiveContacts} from "../add-redux/actions/action-creators";
// import {fetchContacts} from "../add-redux/actions/action-creators";

let {Column, ColumnGroup} = Table;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
        };
        //this.showContacts = this.showContacts.bind(this);
    }

    componentDidMount() {
        console.log('Зашли в componentDidMount');
        console.log('Смотрим, что у нас в contacts: ', this.state.contacts);
        // handleShowContactsReact.call(this);
        this.props.fetchContacts();
        console.log('Смотрим, что у нас ТЕПЕРЬ в contacts: ', this.state.contacts);
    }

    // showContacts() {
    //     //handleShowContactsReact.call(this);
    //     //contacts = this.state.fetchContacts;
    // }

    deleteContact(key) {
        handelDeleteContactReact.call(this, key);
    }

    addContact(newContactObject) {
        handelAddContactReact(newContactObject);
    }
//onClick={this.showContacts}
    render() {
        console.log("Пытаемся перерисовать контакты. Вызван render() у App");
        return (
            <div>
                <Button type="primary" onClick={this.props.fetchContacts()}>Show</Button>
                <NewContactPage onCreateClick={this.addContact.bind(this)}/>
                <Table dataSource={this.props.contacts}>
                    <ColumnGroup title="Name">
                        <Column
                            title="First Name"
                            dataIndex="firstName"
                            key="firstName"
                        />
                        <Column
                            title="Last Name"
                            dataIndex="lastName"
                            key="lastName"
                        />
                    </ColumnGroup>
                    <Column
                        title="Age"
                        dataIndex="age"
                        key="age"
                    />
                    <Column
                        title="Phone Number"
                        dataIndex="phoneNumber"
                        key="phoneNumber"
                    />
                    <Column
                        title="Address"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="#">Action 一 {record.key}</a> {/*Скоро тут будет кнопка для редактирования*/}
                                <span className="ant-divider"/>
                                <Button type="primary"
                                        onClick={this.deleteContact.bind(this, record.key)}>Delete</Button>
                                <span className="ant-divider"/>
                                <a href="#" className="ant-dropdown-link"> {/*Скоро этого не будет совсем*/}
                                    More actions <Icon type="down"/>
                                </a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}



