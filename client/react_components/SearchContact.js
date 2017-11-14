import React from "react";
import "antd/dist/antd.css";
import {Input} from 'antd';

const Search = Input.Search;

export class SearchContact extends React.Component{
    handleSearch(value) {
        this.props.searchByQuery(value);
    }
    render() {
        return (
            <Search className="search-contact"
                placeholder="input search text"
                style={{width: 200}}
                onSearch={this.handleSearch.bind(this)}
            />
        )
    }
}
