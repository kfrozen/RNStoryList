import React, { Component } from 'react';
import {
  Animated,
  Easing
} from 'react-native';

export default class FadeZoomInContainer extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            fade: new Animated.Value(0),
            scale: new Animated.Value(0),
        }
    }

    componentDidMount() {
        Animated.parallel([
            Animated.timing(
                this.state.fade, {
                    toValue: 1,
                    duration: 1500,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            ),
            Animated.timing(
                this.state.scale, {
                    toValue: 1,
                    duration: 1000,
                    easing: Easing.linear,
                    useNativeDriver: true
                }
            )
        ]).start();
    }

    render() {
        return (
            <Animated.View 
                style={{...this.props.style,
                        opacity: this.state.fade, 
                        transform: [{scale: this.state.scale}]}}>
                {this.props.children}
            </Animated.View>
        );
    }
}