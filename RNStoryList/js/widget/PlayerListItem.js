import React, { PureComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

export default class PlayerListItem extends PureComponent {
    constructor(props){
        super(props);

        this.player = props.bean;
    }

    _onPress = () => {
        this.props.onItemClicked(this.player);
    };

    render() {
        let container_style = (this.player.index & 1) != 0 ? [styles.container_base] 
                            : [styles.container_base, styles.container_strip_bg];

        return (
            <TouchableOpacity style={container_style} activeOpacity={0.8} onPress={this._onPress}>
                <View style = {styles.left_block}>
                    <Text style = {styles.jersey}>{this.player.jersey}</Text>
                    <Image style = {styles.headshot} source={{uri: this.player.image}}></Image>
                </View>
                <View style = {styles.right_block}>
                    <Text style = {styles.name}>{this.player.name}</Text>
                    <Text style = {styles.info}>{this.player.info}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container_base: {
        height: 75,
        flexDirection: 'row',
        backgroundColor: 'transparent'
    },
    container_strip_bg:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    left_block: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    right_block: {
        flex: 3,
        flexDirection: "column",
        paddingLeft: 10
    },
    jersey: {
        width: 40,
        fontSize: 27,
        fontWeight:'bold',
        textAlign: 'left',
        color: 'yellow'
    },
    headshot: {
        width: 45,
        height: 60,
        resizeMode: 'cover'
    },
    name: {
        flex: 1,
        fontSize: 17,
        fontWeight:'bold',
        textAlignVertical: 'center',
        color: 'yellow'
    },
    info: {
        flex: 1,
        fontSize: 12,
        textAlignVertical: 'center',
        color: 'white'
    },
});