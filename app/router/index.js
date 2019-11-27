import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashScreen from "../container/Splash/splash-screen";
import HomeScreen from "../container/Splash/home-screen";

import LoginScreen from "../container/Login";
import DashboardScreen from "../container/Dashboard/dashboard-screen";

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen
    }
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
    mode: 'modal'
  }
);

const AppStack = createStackNavigator(
  {
    Dashboard: {
      screen: DashboardScreen
    }
  },
  {
    initialRouteName: 'Dashboard'
  }
);

const RootStack = createSwitchNavigator(
  {
    Splash: {
      screen: SplashScreen
    },
    Home: {
      screen: HomeScreen
    },
    Auth: AuthStack,
    App: AppStack
  },
  {
    initialRouteName: 'Splash'
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;