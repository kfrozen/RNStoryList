import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { NavigationActions } from 'react-navigation';
import NavigationHelper from '../helpers/NavigationHelper';
import AnimatedContainer from '../widget/FadeZoomInContainer';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        NavigationHelper.stackNavigation = this.props.navigation;

        this.timer = setTimeout(() => {
            const resetAction = NavigationActions.reset({
                index: 0,
                actions: [
                    NavigationActions.navigate({routeName: 'Home'})
                ]
            });

            NavigationHelper.stackNavigation.dispatch(resetAction);
        }, 2000);
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <AnimatedContainer style={{width: 175, height: 175}}>
                    <Image style={styles.image} source={require('../img/splash_logo.png')}/>
                </AnimatedContainer>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: 175,
        height: 175
    },
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'center'
    }
  });