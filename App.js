import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import feed from './App/screens/feed';
import upload from './App/screens/upload';
import profile from './App/screens/profile';
import userProfile from './App/screens/userProfile';
import comments from './App/screens/comments';

const TabStack = createBottomTabNavigator(
  {
    feed: { screen: feed},
    Upload: { screen: upload},
    Profile: { screen: profile}
  }
)

const MainStack = createStackNavigator(
  {
      Home: { screen: TabStack},
      User: { screen: userProfile},
      Comments: { screen: comments}
  },
  {
  initialRouteName: 'Home',
  mode: 'modal',
  headerMode: 'none',
  }
)

export default createAppContainer(MainStack);

// export default class App extends React.Component {
//   render() {
//   return (
//         <MainStack />
//   );
// }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });