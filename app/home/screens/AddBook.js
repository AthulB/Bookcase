import React from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View,
} from 'react-native';
import ListItem from '../components/ListItem';
import books from '../assets/data/books';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksAdded : []
    }
    
  }

  _renderItem = ({item}) => (
    <View style={{flex : 1}}>
      <ListItem
      id={item.id}
      title={item.title}
      author={item.author}
      addBook = {true}
      bookNavigation = {()=>this.props.navigation.navigate('Book',{id : item.id,title:item.title,author:item.author})}
      />
    </View>
    
  );

  _keyExtractor = (item) => item.id.toString();

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle="light-content"
        />
        <FlatList
          data={books.books}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});

