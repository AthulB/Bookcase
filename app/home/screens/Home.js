import React from 'react';
import {View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Bookcase from './Bookcase';
import AddBook from './AddBook';
import Profile from './Profile';
import Book from '../components/Book';

const bookStack = createStackNavigator({
    Home : {
      screen : AddBook,
      navigationOptions : {
        header : null
      }
    },
    Book :{
      screen : Book,
      navigationOptions : {
        headerStyle:{
            backgroundColor : '#ECE9F8',
            paddingTop: 0, // clears the default Header margin for the status bar
            height: 40// sets new height for the Header
        }
      }
    }
  })
  
 const Tabs = createBottomTabNavigator({
    Bookcase: {
      screen: Bookcase,
      navigationOptions:{
        tabBarLabel: 'Bookcase',
        tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
      },
    },
    Add_Book: {
      screen: bookStack,
      navigationOptions: {
        tabBarLabel: 'Add Book',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-add-circle-outline" type="ionicon" size={28} color={tintColor} />
      },
    },
    My_Profile: {
      screen: Profile,
      navigationOptions : {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
      }
    },
  });

  export default class Home extends React.Component{
    render(){
        return(
            <View style={{flex : 1}}>
                <Tabs screenProps={{name : this.props.name, photoUrl : this.props.photo}}/>
            </View>
        )
    }
  }