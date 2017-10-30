import React, {PureComponent} from 'react';
import {
    WebView,
    View,
    ActivityIndicator,
    Text,
    ImageBackground
} from 'react-native';
import CommonLoadingIndicator from '../widget/CommonLoadingIndicator';
import CommonErrorView from '../widget/CommonErrorView';

export default class WebViewComp extends PureComponent{
    static navigationOptions = ({navigation}) => ({
        title: navigation.state.params.title,
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'yellow'},
        headerTintColor: 'yellow'
    });

    _renderLoadingView = () => {
        return (
            <CommonLoadingIndicator/>
        );
    };

    _renderErrorView = () => {
        return (
            <CommonErrorView errorMessage='Page Loading failed... Please try again later'/>
        );
    };

    render() {
        const {params} = this.props.navigation.state;
        const uri = params.uri;

        return (
            <WebView source={{uri: uri}} 
                     style={{flex: 1}} 
                     renderLoading={this._renderLoadingView} 
                     renderError={this._renderErrorView}
                     startInLoadingState={true}/>
        );
    }
}