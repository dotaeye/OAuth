import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { Modal} from 'react-bootstrap';
import connectData from '../utils/connectData';

export default
class App extends Component {

    static propTypes = {
        children: PropTypes.object
    };

    render() {
        return (
            <div id="app">
                {this.props.children}
            </div>
        );


    }
}
