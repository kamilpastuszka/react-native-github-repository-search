import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import SearchScreen from '../screens/SearchScreen';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const AppNavigator = createStackNavigator({
  Search: {
    screen: SearchScreen,
  },
  List: {
    screen: ListScreen,
  },
  Detail: {
    screen: DetailScreen,
  },
});

export default createAppContainer(AppNavigator);
