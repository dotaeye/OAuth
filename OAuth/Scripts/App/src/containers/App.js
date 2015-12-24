import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Modal} from 'react-bootstrap';
import connectData from '../utils/connectData';
import { History } from 'react-router'

var App = React.createClass({

    displayName: 'App',

    mixins: [History],

    componentWillReceiveProps(nextProps) {
        if (!this.props.auth.token && nextProps.auth.token) {
            // login
            this.history.pushState(null, '/list');
        } else if (this.props.auth.token && !nextProps.auth.token) {
            // logout
            this.history.pushState(null, '/');
        }
    },

    render() {
        return (
            <div id="app">
                {this.props.children}
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(App)