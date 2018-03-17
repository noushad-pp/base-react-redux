import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Col, Dropdown, Menu, Row, Button} from 'antd';

import './index.scss';
import * as CONSTANTS from '../../data/config/constants';

export default class AppHeader extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { page_details, loadPath } = this.props;
        const menu = (
            <Menu>
                <Menu.Item key="0">
                    <a href="#">Logout</a>
                </Menu.Item>
                <Menu.Item key="1">
                    <a href="#">Notifications</a>
                </Menu.Item>
                <Menu.Divider />
                <Menu.Item key="3">Settings</Menu.Item>
            </Menu>
        );

        if (page_details.current_page === CONSTANTS.appPages.home) {
            return (
                <Row className="HeaderContainer" type="flex" justify="space-between" align="center">
                    <Row type="flex" justify="center" align="center" className="LogoContainer is-cursor-ptr" onClick={() => loadPath('/')}>
                        <Col className="LogoText font-lg">YOUR SITE</Col>
                    </Row>
                    <Row type="flex" justify="end" align="center" className="ActionsContainer">
                        <Col className="flex-row flex-center">
                            <div className="lr-pad-15">About Us</div>
                            <div className="lr-pad-15">Pricing</div>
                            <div className="lr-pad-15">Blog</div>
                            <Button className="font-md" type="danger">Login</Button>
                        </Col>
                    </Row>
                </Row>
            );
        }

        return (
            <Row className="HeaderContainer" type="flex" justify="space-between" align="center">
                <Row type="flex" justify="center" align="center" className="LogoContainer is-cursor-ptr" onClick={() => loadPath('/')}>
                    <Col className="LogoText font-lg">YOUR SITE</Col>
                </Row>
                <Row type="flex" justify="end" align="center" className="ActionsContainer">
                    <Dropdown overlay={menu} trigger={['click']}>
                        <a className="ant-dropdown-link" href="#">
                            <Avatar icon="user" className="AvatarIcon" />
                        </a>
                    </Dropdown>
                </Row>
            </Row>
        );
    }
}

AppHeader.propTypes = {
    page_details: PropTypes.object,
    loadPath: PropTypes.func
};

