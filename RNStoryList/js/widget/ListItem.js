import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  ToastAndroid,
  ImageBackground,
  TouchableOpacity
} from 'react-native';

export class ListItem extends Component {
  constructor(props){
    super(props);
  }

  static defaultProps = {
    selected: false
  };

  static propTypes = {
    selected: React.PropTypes.number.isRequired
  };

  _onPress = () => {
    this.props.onPressItem(this.props.id, this.props.title);
  };

  render() {

    let isSelected = this.props.id == this.props.selected;

    let imageStyle = isSelected ? [styles.image_base, styles.image_selected] : [styles.image_base, styles.image_unselected];

    return (
      <TouchableOpacity style={styles.container} activeOpacity={0.75} onPress={this._onPress}>
        <ImageBackground source={require('./img/item_background.jpg')} style={imageStyle}>
          <Text style={styles.title}>
            {this.props.title}
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
    alignItems: 'flex-start',
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
    flex:1,
    fontSize: 20,
    fontWeight:'bold',
    textAlignVertical: 'center',
    color: '#FFFFFF',
    margin: 10,
  },
});

AppRegistry.registerComponent('ListItem', () => ListItem);