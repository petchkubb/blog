import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({navigation}) => {
  const {addBlogPosts} = useContext(Context);

  return (
    <BlogPostForm
      onSubmit={(title, content) => {
        addBlogPosts(title, content, () => navigation.goBack());
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateScreen;
