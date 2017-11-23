import { StackNavigator } from 'react-navigation';
import HomeScreen from './screens/Home';
import MenuScreen from './screens/Menu';

const Router = StackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Home Screen',
            // strelica nazad
            //headerLeft: null
        }
    },
    Menu: {
        screen: MenuScreen,
        navigationOptions: {
            title: 'Menu Screen',
            //headerLeft: null
        }
    }
});

export default Router;