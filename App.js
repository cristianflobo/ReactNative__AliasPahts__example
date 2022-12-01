/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, useColorScheme} from 'react-native';
import Home from '@screens/home/index';


const App = () => {

  return (
    <SafeAreaView style={{flex: 1, alignContent:"center", backgroundColor:"black"}}>
      <Home />
    </SafeAreaView>
  );
};

export default App;
