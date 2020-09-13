import User from './Model/User';
import Header from './Html/Header';
import * as React from 'react';
import { render } from 'react-dom';

const domHeader = document.getElementById('header');
render(React.createElement(Header, { user: new User('demo user') }), domHeader);
