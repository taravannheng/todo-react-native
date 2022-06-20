import React, {Component} from 'react';
import {Pressable, View, Text} from 'react-native';
import Icon from 'react-native-ionicons';

import styles from './style';

const TodoItem = ({item, todoListStore}) => {
  const deleteHandler = () => {
    todoListStore.removeTodo(item.id);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.text}>{item.text}</Text>
        <Pressable onPress={deleteHandler}>
          <Icon name="remove-circle-outline" style={styles.icon} />
        </Pressable>
      </View>
    </>
  );
};

export default TodoItem;
