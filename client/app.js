import React from 'react';
import ReactDOM from 'react-dom';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';
import 'antd/dist/antd.css';
import { Table, Icon } from 'antd';
//import {myContacts} from './index';
import {NewContactPage} from './add/new-contact-form';
//import {NewContactButton} from './add/new-contact-button';
let { Column, ColumnGroup } = Table;


class App extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div>
            {/* <NewContactButton /> */}
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
ReactDOM.render(
    <LocaleProvider locale={enUS}>
        <App />
    </LocaleProvider>,
    document.getElementById('root')
);