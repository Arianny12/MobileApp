import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Context } from '../context/DiaryContext';

const ViewScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state } = useContext(Context);

  const post = state.find(
    (diaryPost) => diaryPost.id === navigation.getParam('id')
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {post.title}
      </Text>
      <Text style={styles.content}>{post.content}</Text>
    </View>
  );
};

ViewScreen.navigationOptions = ({ navigation }) => {
  const id = navigation.getParam('id');
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: id })}>
        <FontAwesome
          style={styles.editIcon}
          name="pencil"
          size={30}
          color="#F5A7B8"
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE4E8',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#F5A7B8',
    textAlign: 'center',
  },
  content: {
    fontSize: 18,
    marginTop: 10,
    color: '#F5A7B8',
  },
  editIcon: {
    marginRight: 10,
  },
});

export default ViewScreen;
