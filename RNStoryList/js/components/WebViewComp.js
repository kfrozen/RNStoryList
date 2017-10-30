import React, {Component} from 'react';
import {
    WebView,
    View,
    ActivityIndicator,
    Text,
    ImageBackground
} from 'react-native';

export default class WebViewComp extends Component{
    static navigationOptions = {
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'yellow'},
        headerTintColor: 'yellow'
    };

    _renderLoadingView = () => {
        return (
            <ImageBackground></ImageBackground>
        );
    };
}