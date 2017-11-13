import React from "react";
import "antd/dist/antd.css";
import {Button, Icon, Table} from "antd";
import {NewContactPage} from "./NewContactPage.jsx";
import {handelDeleteContactReact} from "../delete/handle-delete-contact-react";
import {handleShowContactsReact} from "../show/handle-show-contacts-react";

let {Column, ColumnGroup} = Table;

export class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            //updated: false
        }
    }

    componentDidMount() {
        handleShowContactsReact.call(this);
    }

    showContacts() {
        handleShowContactsReact.call(this);
    }
    deleteContact(key) {
        handelDeleteContactReact.call(this, key);
    }
    // shouldComponentUpdate() {
    //     console.log('Зашли в shouldComponentUpdate');
    //     if (this.state.updated){
    //         this.state.updated = false;
    //         return true;
    //     } else {
    //         return false;
    //     }
    // }

    render() {
        console.log("Пытаемся перерисовать контакты. Вызван render()");
        return (
            <div>
                <Button type="primary" onClick={this.showContacts.bind(this)}>Show</Button>
                <NewContactPage  /*callBack = {this.updated}*//>
                <Table dataSource={this.state.contacts}>
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
                                <a href="#">Action 一 {record.key}</a>
                                <span className="ant-divider"/>
                                <Button type="primary" onClick={this.deleteContact.bind(this, record.key)}>Delete</Button>
                                <span className="ant-divider"/>
                                <a href="#" className="ant-dropdown-link">
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


// let myContacts = [
//     {
//         key: "0",
//         firstName: "Nikolay",
//         lastName: "Gritsenko",
//         age: 32,
//         phoneNumber: 0,
//         //address: "Sidney No. 1 Lake Park"
//     },
//     {
//         key: "1",
//         firstName: "Vasya",
//         lastName: "Pupkin",
//         age: 32,
//         phoneNumber: 1,
//         //address: "Sidney No. 1 Lake Park"
//     }
// ];