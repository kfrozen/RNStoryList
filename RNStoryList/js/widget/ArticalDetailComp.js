import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground
} from 'react-native';
import {NetworkHelper} from '../helpers/NetworkHelper'

export class ArticalDetailComp extends Component{
    constructor(props){
        super(props);

        this.item = props.item;
    }

    render(){
        return (
            <ScrollView >
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {this.item.title}
                    </Text>
                </View>
                <Image style={styles.image} source={{uri: NetworkHelper.getDefault().getImageUrl(this.item.image)}}/>
                <Text style={styles.description}>
                    {this.item.desc}
                </Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scrollview: {
        backgroundColor: 'black'
    },
    image: {
      height: 275,
      margin: 10
    },
    titleContainer: {
      height: 100,
      borderBottomColor: 'yellow',
      borderBottomWidth: 1
    },
    title: {
      flex:1,
      fontSize: 24,
      fontWeight:'bold',
      textAlignVertical: 'center',
      color: 'yellow',
      numberOfLines: 2,
      margin: 10
    },
    description: {
        flex:1,
        fontSize: 12,
        color: 'white',
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    }
  });