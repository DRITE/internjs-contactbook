import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Icon } from 'antd';
import { NewContactPage } from './NewContactPage.jsx';
import { Button } from 'antd/lib/radio';
import {handleDeleteContact} from '../delete/handle-delete-contact';
import { handleShowContactsReact } from '../show/handle-show-contacts-react';

export class App extends React.Component {
    constructor(props) {
        super(props);

    }
    showContacts() {
        let myContacts = handleShowContactsReact();
        
    }


    render() {
        return (
            <div>
                <Button type="primary" onClick={this.showContacts.bind(this)}>Show</Button>
                <NewContactPage />
                <Button type="primary" onClick={handleDeleteContact}>Delete</Button>
                <Table dataSource={myContacts}>
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
                        title="Address"
                        dataIndex="address"
                        key="address"
                    />
                    <Column
                        title="Action"
                        key="action"
                        render={(text, record) => (
                            <span>
                                <a href="#">Action 一 {record.name}</a>
                                <span className="ant-divider" />
                                <a href="#">Delete</a>
                                <span className="ant-divider" />
                                <a href="#" className="ant-dropdown-link">
                                    More actions <Icon type="down" />
                                </a>
                            </span>
                        )}
                    />
                </Table>
            </div>
        );
    }
}