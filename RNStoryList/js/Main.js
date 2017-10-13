import React from 'react';
import {StackNavigator} from 'react-navigation';
import ArticleListComp from '../js/widget/ArticleListComp';
import ArticleDetailComp from '../js/widget/ArticalDetailComp';

export const Main = StackNavigator(
    {
        ArticleList: {screen: ArticleListComp},
        ArticleDetail: {screen: ArticleDetailComp},
    },
    {
        initialRouteName: 'ArticleList'
    }
);