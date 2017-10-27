import React, { Component } from 'react';
import {
  StyleSheet,
  SectionList,
  Text,
  View,
  Image,
  ActivityIndicator,
  ImageBackground
} from 'react-native';
import {PlayerPresenter} from '../presenters/PlayerPresenter'
import PlayerListItem from '../widget/PlayerListItem'

export default class PlayerListComp extends Component{
    constructor(props){
        super(props);

        this.state = {
            isLoading: true,
            dataSource: []
        }
    }

    static navigationOptions = {
        title: '球员',
        headerStyle: {backgroundColor: 'black'},
        headerTitleStyle: {color: 'yellow'},
        headerLeft: null,
        tabBarIcon: ({focused, tintColor}) => (
          <Image
              source={require('./img/bottombar_icon_players.png')}
              style={{width: 24, height: 24, tintColor: tintColor}}/>
        )
    };

    _onDataLoaded = (error, response) => {
        this.setState({isLoading: false, dataSource: response});
    }

    _onItemClicked = (item) => {
        //TODO
    }

    _renderHeaderItem = ({section}) => {
        return (
            <View style = {styles.header_container}>
                <Text style = {styles.header}>{section.key}</Text>
            </View>
        )
    }

    _renderItem = ({item}) => {
        return <PlayerListItem bean = {item} onItemClicked = {this._onItemClicked}/>
    }

    componentDidMount() {
        let playerPresenter = new PlayerPresenter(this._onDataLoaded);
    
        playerPresenter.loadPlayers();
    }

    render() {
        let isShowLoading = this.state.isLoading;
        let sections = this.state.dataSource;
    
        if(isShowLoading){
          return (
            <ImageBackground source={require('./img/common_background.jpeg')} style={styles.container}>
              <ActivityIndicator color='yellow' size='large'/>
            </ImageBackground>
          );
        }
        else if(sections.length == 0){
          return (
            <ImageBackground source={require('./img/common_background.jpeg')} style={styles.container}>
              <Text style={styles.errorMsg}>
                Oops! No Player info is available now...
              </Text>
            </ImageBackground>
          );
        }
        else{
          return (
            <ImageBackground source={require('./img/common_background.jpeg')} style={styles.container}>
                <SectionList
                    renderSectionHeader={this._renderHeaderItem}
                    renderItem={this._renderItem}
                    sections={sections}/>
            </ImageBackground>
          );
        }
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    errorMsg: {
        flexWrap: 'wrap',
        fontSize: 20,
        fontWeight:'bold',
        textAlign: 'center',
        alignSelf: 'center',
        color: 'yellow',
    },
    header_container: {
        height: 48,
        backgroundColor: 'yellow',
        justifyContent: 'center'
    },
    header: {
        fontSize: 18,
        fontWeight:'bold',
        textAlign: 'center',
        color: 'black',
    }
});

