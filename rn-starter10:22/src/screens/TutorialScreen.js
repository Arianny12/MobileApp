import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TutorialScreen = () => {
  return (
    <View>
      <Text style={styles.blueText}>TutorialScreen</Text>
      <Text>TutorialScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    blueText: {
        color: '#006fff',
        fontSize: 36,
    },

})

export default TutorialScreen
