import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableHighlight
} from 'react-native';

export class ListItem extends Component {
  constructor(props){
    super(props);
  }

  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.title);
  };

  render() {

    let isSelected = this.props.id == this.props.selected;

    let containerStyle = isSelected ? [styles.container_base, styles.container_selected] : [styles.container_base, styles.container_unselected];

    return (
      <TouchableHighlight style={containerStyle} onPress={this._onPress}>
        <Text style={styles.title}>
          {this.props.title}
        </Text>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container_base: {
    alignItems: 'flex-start',
    height: 175,
    marginBottom: 10
  },
  container_unselected:{
    backgroundColor: '#cccccc',
  },
  container_selected:{
    backgroundColor: 'blue',
  },
  title: {
    flex:1,
    fontSize: 20,
    fontWeight:'bold',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
});

AppRegistry.registerComponent('ListItem', () => ListItem);