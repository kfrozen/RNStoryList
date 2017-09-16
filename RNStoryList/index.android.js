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
  View
} from 'react-native';
import {
  BaseFlatList
} from '../RNStoryList/js/widget/BaseFlatList';

export default class Main extends Component {

  render() {
    
    return (
      <View style={styles.container}>
        <BaseFlatList
          data={dataSet}
        />
      </View>
    );
  }
}

var dataSet = [
  {
    id: 1,
    title: 'Item 1',
    selected: true,
  },
  {
    id: 2,
    title: 'Item 2',
    selected: false,
  },
  {
    id: 3,
    title: 'Item 3',
    selected: false,
  },
  {
    id: 4,
    title: 'Item 4',
    selected: false,
  },
  {
    id: 5,
    title: 'Item 5',
    selected: false,
  },
  {
    id: 6,
    title: 'Item 6',
    selected: false,
  },
  {
    id: 7,
    title: 'Item 7',
    selected: false,
  },
  {
    id: 8,
    title: 'Item 8',
    selected: false,
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10
  },
});

AppRegistry.registerComponent('RNStoryList', () => Main);