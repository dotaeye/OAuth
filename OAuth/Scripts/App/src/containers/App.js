import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux';
import { FullScreen } from '../components/UI';
import { Modal} from 'react-bootstrap';
import connectData from '../utils/connectData';

export default
class App extends Component {

    static propTypes = {
        children: PropTypes.object.isRequired,
    };

    render() {
        return (
            <FullScreen id="app">
                {this.props.children}
            </FullScreen>
        );
    }
}
