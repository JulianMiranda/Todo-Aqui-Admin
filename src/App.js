import React from 'react';
import {Admin} from 'react-admin';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = (props) => {
	return (
		<Admin
			title="Todo Aqui Admin"
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
		></Admin>
	);
};

export default App;
