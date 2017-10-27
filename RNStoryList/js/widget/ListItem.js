import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity
} from 'react-native';
import {NetworkHelper} from '../helpers/NetworkHelper'

export default class ListItem extends Component {
  constructor(props){
    super(props);

    this.item = props.bean;
  }

  static defaultProps = {
    selected: ""
  };

  static propTypes = {
    selected: React.PropTypes.string.isRequired
  };

  _onPress = () => {
    this.props.onPressItem(this.item);
  };

  render() {

    let isSelected = this.item.id == this.props.selected;

    let imageStyle = [styles.image_base, styles.image_unselected]; //isSelected ? [styles.image_base, styles.image_selected] : [styles.image_base, styles.image_unselected];

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={this._onPress}>
        <ImageBackground source={{uri: this.item.image}} style={imageStyle}>
          <View style={styles.content_panel}>
            <Text style={styles.title}>
              {this.item.name}
            </Text>
            <Text style={styles.date}>
              {this.item.releaseDate}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 240,
    marginBottom: 10
  },
  image_base: {
    flexDirection: 'column',
    justifyContent: 'flex-end',  //Main direction -- Y
    alignItems: 'stretch',  //Vice direction -- X
    height: 240,
    borderBottomWidth: 5
  },
  image_unselected:{
    borderColor: 'transparent'
  },
  image_selected:{
    borderColor: 'blue'
  },
  content_panel: {
    height: 100,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    marginBottom: 10,
    flexDirection: 'column'
  },
  title: {
    height: 65,
    fontSize: 18,
    fontWeight:'bold',
    textAlignVertical: 'center',
    color: 'yellow',
    padding: 10
  },
  date: {
    height: 35,
    fontSize: 13,
    fontWeight:'bold',
    textAlignVertical: 'center',
    color: 'white',
    paddingLeft: 10
  }
});