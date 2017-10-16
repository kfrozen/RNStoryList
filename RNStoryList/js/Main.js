import React from 'react';
import {StackNavigator} from 'react-navigation';
import ArticleListComp from '../js/components/ArticleListComp';
import ArticleDetailComp from '../js/components/ArticalDetailComp';
import Splash from '../js/components/Splash';

export const Main = StackNavigator(
    {
        Splash: {screen: Splash},
        ArticleList: {screen: ArticleListComp},
        ArticleDetail: {screen: ArticleDetailComp},
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'screen'
    }
);