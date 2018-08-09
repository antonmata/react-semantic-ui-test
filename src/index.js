import 'semantic-ui-css/semantic.min.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';

import Example from './Example';

// MobX configuration
configure({ enforceActions: true });

ReactDOM.render(<Example />, document.getElementById('root'));
