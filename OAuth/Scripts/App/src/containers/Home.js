import React, { Component } from 'react';
import { Route, Link, State, History,IndexLink} from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';

export default class Home extends Component {
    render() {
        return (
            <div id="home" >
                <h1>Home Page</h1>
                <LinkContainer to='list'>
                    <span>List View</span>
                </LinkContainer>
            </div>
        );
    }
}

