import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
const MenuItem = Menu.Item;

import './index.scss';

const links = [
    { name: 'Stories', path: '/stories', icon: 'copy', current_page: 'stories'},
    { name: 'AI', path: '/ai', icon: 'api', current_page: 'ai'},
    { name: 'Inbox', path: '/inbox', icon: 'message', current_page: 'inbox'},
];

export default class Sidebar extends Component {
    onItemClicked = (event) => {
        //path is passed as menu item key
        this.props.loadPath(event.key);
    }

    render() {
        const { page_details } = this.props;
        return (
            <div className="Sidebar full-flex flex-column flex-jsb bg-default">
                <Menu className="SidebarMenuContainer bg-default" mode="inline" onClick={(e) => this.onItemClicked(e)}>
                    {[0,1,2].map(id => {
                        return(
                            <MenuItem key={links[id].path} className={classNames("font-sm", { 'ant-menu-item-selected': links[id].current_page === page_details.current_page })}>
                                <Icon type={links[id].icon} />
                                <span>{links[id].name}</span>
                            </MenuItem>
                        );
                    })}
                </Menu>
            </div>
        );
    }
}

Sidebar.propTypes = {
    page_details: PropTypes.object,
    loadPath: PropTypes.func
};

