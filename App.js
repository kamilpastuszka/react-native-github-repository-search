import React from 'react';
import {Provider} from 'react-redux';
import {store} from './app/store/index';
///import SearchScreen from './app/screens/SearchScreen';
import AppNavigation from './app/navigation/navigation';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
