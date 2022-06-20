/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import mobx from './stores/rootStore';
import {observer, Provider} from 'mobx-react';

import colors from './constants/colors/index';
import Homepage from './pages/homepage';

const stores = mobx();

@observer
class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <SafeAreaView style={styles.container}>
          <StatusBar barStyle="light-content" />
          <Homepage />
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dark,
  },
});
