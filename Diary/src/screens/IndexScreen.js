import React, { useContext, useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { Context } from '../context/DiaryContext'

const IndexScreen = ({ navigation }) => {
  const {state, deleteDiaryPost } = useContext(Context)
  const [quote, setQuote] = useState('')

  // Fetching a random quote
  useEffect(() => {
    fetchRandomQuote()
  }, [])

  const fetchRandomQuote = async () => {
    try {
      const response = await fetch('https://zenquotes.io/api/random')
      const data = await response.json()
      setQuote(data[0].q)
    } catch (error) {
      console.error('Error fetching quote:', error)
      setQuote("Stay positive and keep moving forward!") //In case it doesn't work
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.quote}>{quote}</Text>

      <FlatList
        data={[...state].reverse()} // Reverse the order of posts
        keyExtractor={(post) => post.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('View', { id: item.id })}
          >
            <View style={styles.row}>
              <Text style={styles.title}>{item.title}</Text>

              <View style={styles.iconContainer}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('Edit', { id: item.id })}
                  style={styles.iconButton}
                >
                  <MaterialIcons name="edit" size={24} color="#F5A7B8" />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => deleteDiaryPost(item.id)}
                  style={styles.iconButton}
                >
                  <MaterialIcons name="delete" size={24} color="#F5A7B8" />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <MaterialIcons
          style={styles.calendarIcon}
          name="calendar-today"
          size={30}
          color="#cccccc"
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <MaterialIcons
          style={styles.addIcon}
          name="add"
          size={30}
          color="#cccccc"
        />
      </TouchableOpacity>
    ),
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E8',
  },
  quote: {
    padding: 20,
    paddingTop: 40,
    fontSize: 22,
    fontStyle: 'italic',
    color: '#C77489',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginBottom: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#F5A7B8',
    backgroundColor: '#FFD9E8',
    borderRadius: 10,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    color: '#F5A7B8',
    flex: 1,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 10,
  },
  addIcon: {
    marginRight: 10,
  },
  calendarIcon: {
    marginLeft: 10,
  },
})

export default IndexScreen
