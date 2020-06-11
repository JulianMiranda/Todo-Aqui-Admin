import React from 'react';
import {Layout, Sidebar} from 'react-admin';
import Menu from './Menu';

const CustomSidebar = (props) => <Sidebar {...props} size={200} />;

export default (props) => {
	return <Layout {...props} sidebar={CustomSidebar} menu={Menu} />;
};
