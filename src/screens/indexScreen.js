import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import BlogContext from '../../src/context/BlogContext';

const IndexScreen = () => {
  const {data, addBlogPosts} = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Blog Post" onPress={addBlogPosts} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;
