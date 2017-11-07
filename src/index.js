import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "redux-zero/react";
import store from "./store";
import SignIn from './sign_in';
import SignUp from './sign_up';
import Board from './board';

import {HashRouter, Switch, Route, NavLink, Redirect} from 'react-router-dom'


const Index = () => (
	
		<Provider store={store}>
			<HashRouter>
				<Switch>
					<Route exact path="/#/" componet={SignIn} />
					<Route path="/sign_up" componet={SignUp} />
					<Route path="/board" componet={Board} />
					<Route component={SignIn} />
					{/* se tiene que ejecutar si pesenta error  */}
				</Switch>
			</HashRouter>
		</Provider>
)

ReactDOM.render(<Index />, document.getElementById('root'));
registerServiceWorker();
