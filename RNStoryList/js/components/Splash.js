import React, { Component } from 'react';
import {
  Animated,
  View,
  Image,
  StyleSheet
} from 'react-native';
import AnimatedContainer from '../widget/FadeZoomInContainer';

export default class Splash extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        this.timer = setTimeout(() => {
            const {navigate} = this.props.navigation;

            navigate('ArticleList');
        }, 2000);
    };

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
    }

    render() {
        return (
            <View style={styles.container}>
                <AnimatedContainer style={{width: 175, height: 175}}>
                    <Image style={styles.image} source={require('./img/splash_logo.png')}/>
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