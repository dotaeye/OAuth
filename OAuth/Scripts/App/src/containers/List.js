import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { Spin } from 'antd';
import * as actionCreators from '../actions/order'

var List = React.createClass({

    componentDidMount(){
        this.props.actions.load(this.props.token.access_token);
    },

    render() {
        return (
            <div id="list">

                <h1>List Page Current UserName {this.props.token.userName}</h1>

                <div id='order'>
                    <Spin spining={this.props.orderLoading}/>
                    <ul>
                        {this.props.orderList.map((order, index)=> {
                            return (
                                <li key={index}>
                                    <span>{order.id}</span>

                                    <div>{order.customerName}</div>
                                </li>
                            )
                        })}

                    </ul>
                </div>
            </div>
        );
    }
});

function mapStateToProps(state) {
    return {
        token: state.auth.token,
        orderList: state.order.list,
        orderLoading: state.order.loading
    }
}

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actionCreators, dispatch)}
}


export default connect(mapStateToProps, mapDispatchToProps)(List)

