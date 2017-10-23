import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
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
      <TouchableOpacity style={styles.container} activeOpacity={0.7} onPress={this._onPress}>
        <ImageBackground source={{uri: this.item.image}} style={imageStyle}>
          <Text style={styles.title}>
            {this.item.title}
          </Text>
      </ImageBackground>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginBottom: 10
  },
  image_base: {
    flexDirection: 'column',
    justifyContent: 'flex-end',  //Main direction -- Y
    alignItems: 'stretch',  //Vice direction -- X
    height: 200,
    borderBottomWidth: 5
  },
  image_unselected:{
    borderColor: 'transparent'
  },
  image_selected:{
    borderColor: 'blue'
  },
  title: {
    height: 75,
    fontSize: 18,
    fontWeight:'bold',
    textAlignVertical: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    color: 'yellow',
    padding: 10,
    marginBottom: 10
  },
});