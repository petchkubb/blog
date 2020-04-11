import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Context as BlogContext} from '../../src/context/BlogContext';

const IndexScreen = ({navigation}) => {
  const {state, addBlogPosts, deleteBlogPosts} = useContext(BlogContext);

  return (
    <View>
      <Button title="Add Blog Post" onPress={addBlogPosts} />
      <FlatList
        data={state}
        keyExtractor={(item) => item.title}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('Show', {id: item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>
                  {item.title} - {item.id}
                </Text>
                <TouchableOpacity onPress={() => deleteBlogPosts(item.id)}>
                  <Image
                    source={require('../../assets/trash.png')}
                    style={styles.image}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderTopWidth: 1,
    borderColor: 'gray',
  },
  title: {
    fontSize: 18,
    alignSelf: 'center',
  },
  image: {
    width: 50,
    height: 50,
  },
});

export default IndexScreen;
