import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {useMediaQuery} from '@material-ui/core';
import {MenuItemLink} from 'react-admin';

import categories from '../categories';
import anounces from '../anounces';
import opportunities from '../opportunities';
import subcategories from '../subcategories';
import users from '../users';
import reviews from '../reviews';
import SubMenu from './SubMenu';
import SettingsIcon from '@material-ui/icons/Settings';

const Menu = ({onMenuClick, dense, logout}) => {
	const [state, setState] = useState({
		menuCategories: false,
		menuAnounces: false,
	});

	const isSmall = useMediaQuery((theme) => theme.breakpoints.down('xs'));
	const open = useSelector((state) => state.admin.ui.sidebarOpen);
	useSelector((state) => state.theme); // force rerender on theme change
	const handleToggle = (menu) => {
		setState((state) => ({...state, [menu]: !state[menu]}));
	};

	return (
		<div>
			{' '}
			<SubMenu
				handleToggle={() => handleToggle('menuCategories')}
				isOpen={state.menuCategories}
				sidebarIsOpen={open}
				name="Categorías"
				icon={<categories.icon />}
				dense={dense}
			>
				<MenuItemLink
					to={`/categories`}
					primaryText="Categorías"
					leftIcon={<categories.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
				<MenuItemLink
					to={`/subcategories`}
					primaryText="SubCategorías"
					leftIcon={<subcategories.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
			</SubMenu>
			<SubMenu
				handleToggle={() => handleToggle('menuAnounces')}
				isOpen={state.menuAnounces}
				sidebarIsOpen={open}
				name="Anuncios"
				icon={<anounces.icon />}
				dense={dense}
			>
				<MenuItemLink
					to={`/anounces`}
					primaryText="Anuncios"
					leftIcon={<anounces.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
				<MenuItemLink
					to={`/opportunities`}
					primaryText="Oportunidades"
					leftIcon={<opportunities.icon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
			</SubMenu>
			<MenuItemLink
				to={`/users`}
				primaryText="Usuarios"
				leftIcon={<users.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			<MenuItemLink
				to={`/reviews`}
				primaryText="Comentarios"
				leftIcon={<reviews.icon />}
				onClick={onMenuClick}
				sidebarIsOpen={open}
				dense={dense}
			/>
			{isSmall && (
				<MenuItemLink
					to="/configuration"
					primaryText="Configuracion"
					leftIcon={<SettingsIcon />}
					onClick={onMenuClick}
					sidebarIsOpen={open}
					dense={dense}
				/>
			)}
			{isSmall && logout}
		</div>
	);
};

export default Menu;
