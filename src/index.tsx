import React from 'react';
import ReactDOM from 'react-dom';
import { ColorToolStore } from './stores/ColorToolStore';
import { ColorService } from './services/ColorService';
import { ColorToolStoreContext } from './contexts';
import { ColorToolContainer } from './containers/ColorToolContainer';

const colorToolStore = new ColorToolStore(new ColorService('http://localhost:3060'));

ReactDOM.render(
  <ColorToolStoreContext.Provider value={colorToolStore}>
    <ColorToolContainer/>
  </ColorToolStoreContext.Provider>,
  document.getElementById('root')
);
