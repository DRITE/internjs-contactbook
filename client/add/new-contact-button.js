import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from 'antd';
import 'antd/dist/antd.css';

export class NewContactButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Button type = "primary">New Contact</Button>
            </div>
        );
    }
}