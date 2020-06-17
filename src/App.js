import React from 'react';
import {Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import authProvider from './auth/Provider';
import {CustomLoginPage} from './auth/Login';

import Users from './components/users';
import Categories from './components/categories';
import SubCategories from './components/subcategories';
import Anounces from './components/anounces';

/* import RolesReducer from './store/reducers/roles.reducer'; */
/* import RolesSaga from './store/sagas/roles.saga'; */

const App = (props) => {
	return (
		<Admin
			title="Todo Aqui Admin"
			/* customSagas={[RolesSaga]} */
			/* customReducers={{roles: RolesReducer}} */
			dataProvider={dataProvider}
			authProvider={authProvider}
			loginPage={CustomLoginPage}
		>
			{(permissions) =>
				permissions === 'ADMIN' && [
					<Resource name="categories" {...Categories} />,
					<Resource name="subcategories" {...SubCategories} />,
					<Resource name="anounces" {...Anounces} />,
					<Resource options={{label: 'Usuarios'}} name="users" {...Users} />,
				]
			}
		</Admin>
	);
};

export default App;
