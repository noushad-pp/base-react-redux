import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { Router, Route, Switch, Redirect } from 'react-router';
import { Layout } from 'antd';

const { Header, Content, Sider } = Layout;

import './index.scss';
import * as UTILS from '../data/utils/device_data';
import * as pageActions from '../data/redux/page_details/actions';

import AppHeader from '../components/appheader';
import Sidebar from '../components/sidebar';
import Home from "./Home";
import Dashboard from "./Dashboard";

function mapStateToProps(state) {
    return { page_details: state.page_details };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions, ), dispatch)
    };
}

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    componentWillMount() {
        const systLang = UTILS.getLang();
        this.props.actions.setDeviceData(UTILS.checkDevice.deviceStatus());
        if (systLang) {
            this.props.actions.setLang(systLang);
        }
        this.timeout = false;
    }

    componentDidMount() {
        let self = this;
        window.addEventListener("resize", function () {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
                self.props.actions.setDeviceData(UTILS.checkDevice.deviceStatus());
            }, 300);
        });
    }

    loadPath = (path) => {
        this.props.history.push(path);
    };

    onCollapse = (collapsed) => {
        this.setState({ collapsed });
    }

    render() {
        const non_sidebar_pages = ['home'];
        const { page_details } = this.props;
        const is_mobile = (page_details.device_data && (page_details.device_data.mobile || page_details.device_data.screen_width < 768));
        const show_sidebar = non_sidebar_pages.indexOf(page_details.current_page) === -1;
        const is_logged_in = page_details.user_logged_in;

        return (
            <Layout className={classNames("flex-column full-width full-min-height AppContainer", { "mobile": is_mobile })}>
                <Header className="AppHeaderContainer bg-white b-border">
                    <AppHeader page_details={page_details} loadPath={this.loadPath} />
                </Header>
                <Layout className="AppContentLayoutContainer bg-white">
                    {show_sidebar &&
                        <Sider className="SidebarContainer flex-column flex-jsa bg-default" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse} breakpoint={'lg'} >
                            <Sidebar page_details={page_details} loadPath={this.loadPath} />
                        </Sider>
                    }
                    <Layout className="AppContentContainer flex-column bg-white">
                        <Content className="AppContent flex-column full-flex">
                            <Router history={this.props.history}>
                                <Switch>
                                    <Route exact path="/" render={() => (is_logged_in ? (<Redirect to="/dashboard" />) : (<Home />))} />
                                    <Route exact path="/dashboard" component={Dashboard} />
                                </Switch>
                            </Router>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

AppContainer.propTypes = {
    page_details: PropTypes.object,
    actions: PropTypes.object,
    history: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps, null, { withRef: true })(AppContainer);
