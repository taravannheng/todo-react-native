import React, {Component} from 'react';
import {Text, View, FlatList} from 'react-native';
import {observer, inject} from 'mobx-react';

import styles from './style';
import TodoItem from '../todoItem';

@inject('todoListStore')
@observer
class TodoList extends Component {
  render() {
    const {todoListStore} = this.props;
    const todoList = todoListStore.getTodoList();

    const renderItem = ({item}) => {
      return <TodoItem item={item} todoListStore={todoListStore} />;
    };

    return (
      <>
        <View style={styles.container}>
          {todoList.length > 0 ? (
            <FlatList
              data={todoListStore.getTodoList()}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={styles.text}>There is no todos.</Text>
          )}
        </View>
      </>
    );
  }
}

export default TodoList;
