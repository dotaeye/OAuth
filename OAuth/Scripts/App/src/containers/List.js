import React, { Component } from 'react';
import { FullScreen } from '../components/UI';
import { connect } from 'react-redux'

const List = React.createClass({
    render() {
        return (
            <FullScreen id="list">
                <h1>List Page</h1>
            </FullScreen>
        );
    }
});

function mapStateToProps(state) {
    return { user: state.auth.user }
}


export default connect(mapStateToProps)(List)

