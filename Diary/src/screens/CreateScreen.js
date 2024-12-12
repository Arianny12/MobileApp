import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import PostForm from '../components/PostForm'
import { Context } from '../context/DiaryContext'

const CreateScreen = ({ navigation }) => {
  const { addDiaryPost } = useContext(Context)

  return (
    <PostForm
      onSubmit={(title, content) => {
        addDiaryPost(title, content, () => navigation.navigate('Index'))
      }}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E8',
    padding: 20,
  },
})

export default CreateScreen