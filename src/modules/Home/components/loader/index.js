import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

export default class Loader extends Component {
    render() {
        return (
            <Icon type={this.props.type} className={this.props.className} />
        );
    }
}

Loader.propTypes = {
    type: PropTypes.string,
    className: PropTypes.string
};

