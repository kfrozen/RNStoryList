/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  FlatList,
  Text,
  ToastAndroid,
  ActivityIndicator,
  View
} from 'react-native';
import {
  BaseFlatList
} from '../RNStoryList/js/widget/BaseFlatList';
import {
  ArticlePresenter
} from '../RNStoryList/js/presenters/ArticlePresenter'

export default class Main extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  _onDataLoaded = (error, response) => {
    this.setState({isLoading: false, dataSource: response});
  }

  componentDidMount() {
    let articlePresenter = new ArticlePresenter(this._onDataLoaded);

    articlePresenter.loadArticles();
  }

  render() {
    
    let isShowLoading = this.state.isLoading;
    let dataSource = this.state.dataSource;

    if(isShowLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator color='blue' size='large'/>
        </View>
      );
    }
    else if(dataSource.length == 0){
      return (
        <View style={styles.container}>
          <Text style={styles.errorMsg}>
            Oops! No video is available now...
          </Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
          <BaseFlatList
            data={dataSource}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center'
  },
  errorMsg: {
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#666666',
  }
});

AppRegistry.registerComponent('RNStoryList', () => Main);