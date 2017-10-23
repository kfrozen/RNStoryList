import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';
import {NetworkHelper} from '../helpers/NetworkHelper'

export default class ArticalDetailComp extends Component{
    constructor(props){
        super(props);
    }

    static navigationOptions = {
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'yellow'},
        headerTintColor: 'yellow'
    };

    render(){
        const {params} = this.props.navigation.state;
        const article = params.article;

        return (
            <ImageBackground source={require('./img/common_background.jpeg')} style={{flex: 1}}>
                <ScrollView>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>
                            {article.title}
                        </Text>
                    </View>
                    <Image style={styles.image} source={{uri: article.image}}/>
                    <Text style={styles.description}>
                        {article.desc}
                    </Text>
                </ScrollView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    image: {
      height: 240,
      margin: 10
    },
    titleContainer: {
      height: 85,
      borderBottomColor: 'rgba(231, 223, 8, 0.75)',
      borderBottomWidth: 1
    },
    title: {
      flex:1,
      fontSize: 24,
      fontWeight:'bold',
      textAlignVertical: 'center',
      color: 'yellow',
      margin: 10
    },
    description: {
        flex:1,
        fontSize: 16,
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 20,
    }
  });