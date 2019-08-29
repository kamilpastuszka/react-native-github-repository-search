import React, {Fragment} from 'react';
import {StyleSheet, View, Text, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <Fragment>
      <View style={styles.mainScreenView}>
        <View style={styles.headerView}>
          <Text style={styles.headerText}>GitHub Repository Search</Text>
        </View>

        <View style={styles.searchView}>
          <View style={styles.intupTextView}>
            <TextInput
              style={styles.textInput}
              placeholder="search repository.."
            />
          </View>

          <View style={styles.searchButtonView}>
            <Button style={styles.searchButton} title="Search" />
          </View>
        </View>
      </View>
    </Fragment>
  );
};

const styles = StyleSheet.create({
  mainScreenView: {
    flex: 1,
    //  justifyContent: 'center',
    alignItems: 'center',
  },
  headerView: {
    flex: 0.2,
    fontSize: 23,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 23,
  },
  searchView: {
    flex: 0.2,
    width: '70%',
  },
  intupTextView: {
    paddingTop: 10,
    width: '100%',
  },
  textInput: {
    height: 40,
    borderColor: '#3399ff',
    borderWidth: 2,
    minWidth: 50,
  },
  searchButtonView: {
    marginTop: 20,
    width: '100%',
  },
  searchButton: {
    color: 'grey',
    fontSize: 20,
  },
});

export default App;
