import React from 'react';

import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';

export default class App extends React.Component {


  render() {

    return (  
      <View style={styles.container}>
        <Text style={styles.description}>
          Job Search
        </Text>
        <View style={styles.flowRight}>
        <TextInput
          underlineColorAndroid={'transparent'}
          style={styles.searchInput}
          placeholder='Search'/>
      </View>
      <Button style={styles.button}
        
        title="Search"
      />
      </View>
    )
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 18,
    color: '#656565',
    marginTop: 50,
  },
  flowRight: {
    flexDirection: 'row',
    alignSelf: 'stretch',
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flexGrow: 1,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 8,
  },
  button: {
    margin: 20,
    width: 400,
  },

});

