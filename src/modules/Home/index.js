import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Button } from 'antd';

import './index.scss';

import * as CONSTANTS from '../../data/config/constants';
import * as pageActions from '../../data/redux/page_details/actions';
import * as userActions from '../../data/redux/user_details/actions';

import Loader from './components/loader';

function mapStateToProps(state) {
    return {
        page_details: state.page_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions, userActions), dispatch)
    };
}

class Home extends Component {
    componentWillMount() {
        this.props.actions.pageChanged(CONSTANTS.appPages.home);
        this.props.actions.getHomePage();
    }

    login = () => {
        this.props.history.push('/login');
    }

    retry = () => {
        this.props.actions.getHomePage();
    }

    render() {
        const { page_details } = this.props;
        if (page_details.loaders.homepage_loading) {
            return (
                <Row className="HomeContainer page-container flex-column flex-center full-flex">
                    <Loader type="loading" className="font-30" />
                </Row>
            );
        }
        return (
            <Row className="HomeContainer page-container flex-column flex-center full-flex">
                <h1 className="pad-30 color-white font-30">{page_details.home_page_data && page_details.home_page_data.text}</h1>
                {page_details.loaders.homepage_loaded && <Button className="font-md" type="primary" size="large" onClick={this.login}>Login</Button>}
                {page_details.loaders.homepage_load_err && <Button className="font-md" type="primary" size="large" onClick={this.retry}>Retry</Button>}
            </Row>
        );
    }
}

Home.propTypes = {
    page_details: PropTypes.object,
    actions: PropTypes.object,
    history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps, null)(withRouter(Home));
