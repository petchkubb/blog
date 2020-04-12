import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation, route}) => {
  const {id} = route.params;
  const {state} = useContext(Context);

  const blogPost = state.find((blogPost) => blogPost.id === id);

  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit', {id})}>
        <Image source={require('../../assets/edit.png')} style={styles.edit} />
      </TouchableOpacity>
    ),
  });
  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  edit: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});

export default ShowScreen;
