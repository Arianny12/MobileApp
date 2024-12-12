import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const PostForm = ({ onSubmit, inititalValues = { title: '', content: '' } }) => {
  const [title, setTitle] = useState(inititalValues.title)
  const [content, setContent] = useState(inititalValues.content)

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Title:</Text>
      <TextInput
        autoCapitalize="words"
        autoCorrect={false}
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />
      <Text style={styles.label}>Content:</Text>
      <TextInput
        autoCorrect={false}
        style={styles.input}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button
        title="Save Post"
        color="#F5A7B8"
        onPress={() => {
          onSubmit(title, content)
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E8',
    padding: 20,
  },
  label: {
    fontSize: 20,
    margin: 10,
    marginBottom: 5,
    color: '#F5A7B8', 
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#F5A7B8', 
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#FFD9E8',
  },
})

export default PostForm