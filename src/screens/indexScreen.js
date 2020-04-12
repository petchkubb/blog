import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Context as BlogContext} from '../../src/context/BlogContext';

const IndexScreen = ({navigation}) => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Image source={require('../../assets/add.png')} style={styles.add} />
      </TouchableOpacity>
    ),
  });

  const {state, deleteBlogPosts} = useContext(BlogContext);

  return (
    <View>
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
  add: {
    height: 20,
    width: 20,
    marginRight: 10,
  },
});

export default IndexScreen;
