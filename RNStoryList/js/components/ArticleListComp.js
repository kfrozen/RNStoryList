
import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  Text,
  Image,
  ToastAndroid,
  ActivityIndicator,
  View
} from 'react-native';
import BaseFlatList from '../widget/BaseFlatList';
import {ArticlePresenter} from '../presenters/ArticlePresenter'
import NavigationHelper from '../helpers/NavigationHelper'

export default class ArticleListComp extends Component {

  constructor(props){
    super(props);

    this.state = {
      isLoading: true,
      dataSource: []
    }
  }

  static navigationOptions = {
    title: '新闻',
    headerStyle: {backgroundColor: 'black'},
    headerTitleStyle: {color: 'yellow'},
    headerLeft: null,
    tabBarIcon: ({focused, tintColor}) => (
      <Image
          source={require('./img/bottombar_icon_articles.png')}
          style={{width: 24, height: 24, tintColor: tintColor}}/>
    )
  };

  _onDataLoaded = (error, response) => {
    this.setState({isLoading: false, dataSource: response});
  }

  _onItemClicked = (item) => {
    NavigationHelper.stackNavigation.navigate('ArticleDetail', {article: item});
  }

  componentDidMount() {
    let articlePresenter = new ArticlePresenter(this._onDataLoaded);

    articlePresenter.loadArticles();
  }

  render() {
    let isShowLoading = this.state.isLoading;
    let dataSource = this.state.dataSource;

    if(isShowLoading){
      return (
        <View style={styles.container}>
          <ActivityIndicator color='black' size='large'/>
        </View>
      );
    }
    else if(dataSource.length == 0){
      return (
        <View style={styles.container}>
          <Text style={styles.errorMsg}>
            Oops! No video is available now...
          </Text>
        </View>
      );
    }
    else{
      return (
        <View style={styles.container}>
          <BaseFlatList
            data={dataSource}
            onItemClicked={this._onItemClicked}
          />
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    justifyContent: 'center',
  },
  errorMsg: {
    flexWrap: 'wrap',
    fontSize: 20,
    fontWeight:'bold',
    textAlign: 'center',
    alignSelf: 'center',
    color: '#666666',
  }
});