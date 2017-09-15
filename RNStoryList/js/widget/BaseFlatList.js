import React, { Component } from 'react';
import {
  AppRegistry,
  FlatList,
  ToastAndroid,
  View
} from 'react-native';
import {
  ListItem
} from './ListItem';

export class BaseFlatList extends Component {
  constructor(props){
    super(props);

    this.state = {selected: props.data[0].id};
  }

  _onPressItem = (id, title) => {
    this.setState({selected: id}, () => {
      ToastAndroid.show(title + ' was CLICKED!', ToastAndroid.SHORT);
    });
  }

  render() {
    
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={(item, index) => {item.id}}
        renderItem={({item}) => <ListItem id={item.id} title={item.title} onPressItem={this._onPressItem} selected={this.state.selected}/>}
      />
    );
  }
}

AppRegistry.registerComponent('BaseFlatList', () => BaseFlatList);