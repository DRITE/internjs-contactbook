import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchContacts, receiveContacts} from "../actions/action-creators";
import "antd/dist/antd.css";
import { App } from "../../react_components/App.jsx";


const mapStateToProps = (store) => {
    return {
        contacts: store.contacts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchContacts: () => {
            dispatch(fetchContacts())
        }
    }
};

export let AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
