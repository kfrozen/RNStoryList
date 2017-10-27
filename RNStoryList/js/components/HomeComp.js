import React, {Component} from 'react';
import {TabNavigator, TabBarBottom, StackNavigator} from 'react-navigation';
import ArticleListComp from './ArticleListComp';
import PlayerListComp from './PlayerListComp';

const BottomTab = TabNavigator(
    {
        Aritcles: {
            screen: ArticleListComp
        },

        Players: {
            screen: PlayerListComp
        },

        Rank: {
            screen: ArticleListComp
        }
    },

    {
        tabBarComponent:TabBarBottom,
        tabBarPosition:'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        lazy:true,
        initialRouteName:'Aritcles',
        headerMode: 'screen',
        backBehavior:'none',
        tabBarOptions:{
            showIcon: true,
            activeTintColor:'yellow',
            activeBackgroundColor:'black',
            inactiveTintColor:'rgb(204, 204, 204)',
            inactiveBackgroundColor:'black',
            labelStyle: {
                fontSize:12
            },
            tabStyle: {
                alignSelf: 'center'
            }
        }
    }
);

//Wrap TabNavigator with StackNavigator to show the headers from TabNavigator items
const Nav = StackNavigator(
    {
        Tab:{
            screen:BottomTab,
            navigationOptions: {
                    headerStyle: {backgroundColor: 'black'},
                    headerTitleStyle: {color: 'yellow'},
                    headerLeft: null
                  }
        }
    },
    {
        mode:'card',
        headerMode:'screen'
    }
);

export default class HomeComp extends Component{
    static navigationOptions = {
        header: null
      };

    render(){
        return(
            <Nav/>
        );
    }
}