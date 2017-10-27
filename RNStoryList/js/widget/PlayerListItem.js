import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

export default class PlayerListItem extends Component {
    constructor(props){
        super(props);

        this.player = props.bean;
    }

    _onPress = () => {
        this.props.onItemClicked(this.item);
    };

    render() {
        let container_style = (this.player.index & 1) != 0 ? [styles.container_base] : [styles.container_base, styles.container_strip_bg];

        return (
            <TouchableOpacity style={container_style} activeOpacity={0.8} onPress={this._onPress}>
                <View style = {styles.left_block}>
                    <Text style = {styles.jersey}>{this.player.jersey}</Text>
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
    },
    container_strip_bg:{
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    left_block: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    right_block: {
        flex: 4,
        flexDirection: "column"
    },
    jersey: {
        fontSize: 28,
        fontWeight:'bold',
        textAlign: 'left',
        marginLeft: 20,
        color: 'yellow'
    },
    name: {
        flex: 1,
        fontSize: 18,
        fontWeight:'bold',
        textAlignVertical: 'center',
        color: 'yellow'
    },
    info: {
        flex: 1,
        fontSize: 13,
        textAlignVertical: 'center',
        color: 'white'
    },
});