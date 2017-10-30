import React from 'react';
import {StackNavigator} from 'react-navigation';
import HomeComp from '../js/components/HomeComp';
import ArticleDetailComp from '../js/components/ArticalDetailComp';
import Splash from '../js/components/Splash';
import WebViewComp from '../js/components/WebViewComp';

export const Main = StackNavigator(
    {
        Splash: {screen: Splash},
        Home: {screen: HomeComp},
        ArticleDetail: {screen: ArticleDetailComp},
        WebView: {screen: WebViewComp}
    },
    {
        initialRouteName: 'Splash',
        headerMode: 'screen'
    }
);