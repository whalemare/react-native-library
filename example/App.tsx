/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { Component } from 'react'
import { Alert, NativeModules, SafeAreaView, StatusBar, StyleSheet, Text } from 'react-native'
import { Button, MyLibrary } from 'react-native-library'

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
  },
})
const { NativeLibrary } = NativeModules

export default class App extends Component {
  componentDidMount() {
    console.log(NativeModules)
    console.log(NativeLibrary)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.h1}>react-native-library bootstrap</Text>
        <Button
          text="Test JS"
          onPress={() => {
            MyLibrary.showMessage('This text passed from app to library')
          }}
        />
        <Button
          text="Test Native getValue()"
          onPress={async () => {
            const result = await MyLibrary.getValue()
            Alert.alert('Test Native getValue()', result)
          }}
        />
      </SafeAreaView>
    )
  }
}
