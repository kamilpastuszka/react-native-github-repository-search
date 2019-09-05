import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';

const AppNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  List: {
    screen: ListScreen,
  },
});

export default createAppContainer(AppNavigator);
