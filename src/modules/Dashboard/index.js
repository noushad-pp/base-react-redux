import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Row, Col } from 'antd';

import './index.scss';

import * as CONSTANTS from '../../data/config/constants';
import * as pageActions from '../../data/redux/page_details/actions';

function mapStateToProps(state) {
    return {
        page_details: state.page_details,
        user_details: state.user_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions), dispatch)
    };
}

class Dashboard extends Component {
    componentWillMount() {
        this.props.actions.pageChanged(CONSTANTS.appPages.dashboard);
    }

    render() {
        return (
            <Row className="DashboardContainer page-container flex-column flex-center full-flex">
                <Col xs={24} className="full-flex">
                    <h1 className="pad-30 font-30">Your dash board will be loaded here</h1>
                </Col>
            </Row>
        );
    }
}

Dashboard.propTypes = {
    page_details: PropTypes.object,
    user_details: PropTypes.object,
    actions: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(Dashboard);
