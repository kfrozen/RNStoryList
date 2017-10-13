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

    var defaultSelection;

    props.data.forEach(function(element) {
      if(element.selected)
      {
        defaultSelection = element.id;
        return;
      }
    }, this);

    this.state = {selected: defaultSelection};
  }

  _onPressItem = (item) => {
    this.setState({selected: item.id}, () => {
      //ToastAndroid.show(item.title + ' was CLICKED!', ToastAndroid.SHORT);
    });

    this.props.navigate('ArticleDetail', {article: item});
  }

  render() {
    
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={(item, index) => item.id}
        renderItem={({item}) => <ListItem bean={item} onPressItem={this._onPressItem} selected={this.state.selected}/>}
      />
    );
  }
}

// AppRegistry.registerComponent('BaseFlatList', () => BaseFlatList);