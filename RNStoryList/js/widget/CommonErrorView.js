import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    ImageBackground
} from 'react-native';

export default class CommonLoadingIndicator extends Component{
    render(){
        return (
            <ImageBackground source={require('../img/common_background.jpeg')} style={styles.container}>
                <Text style={styles.errorMsg}>{this.props.errorMessage}</Text>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    },
    errorMsg: {
      flexWrap: 'wrap',
      fontSize: 17,
      fontWeight:'bold',
      textAlign: 'center',
      alignSelf: 'center',
      color: 'yellow',
    }
});