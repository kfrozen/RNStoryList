import React, {Component} from 'react';
import {
    StyleSheet,
    ActivityIndicator,
    ImageBackground
} from 'react-native';

export default class CommonLoadingIndicator extends Component{
    render(){
        return (
            <ImageBackground source={require('../img/common_background.jpeg')} style={styles.container}>
                <ActivityIndicator color='yellow' size='large'/>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    }
});