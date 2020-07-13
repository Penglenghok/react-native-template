import * as React from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

export interface AppProps {}

export default ({}: AppProps) => {
  return (
    <SafeAreaView>
      <View>
        <Text>App Component</Text>
      </View>
    </SafeAreaView>
  );
};
