import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Table, Icon } from 'antd';
import { NewContactPage} from './NewContactPage.jsx';

export class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            <NewContactPage />
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