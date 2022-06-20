import React, {Component} from 'react';
import {View} from 'react-native';
import {observer, inject} from 'mobx-react';

import styles from './style';
import Title from '../../components/title';
import TodoList from '../../components/todoList';
import TodoInput from '../../components/todoInput';

@inject('todoListStore')
@observer
class Homepage extends Component {
  render() {
    return (
      <>
        <View
          style={[
            {paddingHorizontal: 16, justifyContent: 'space-between'},
            styles.container,
          ]}>
          <Title>Todo</Title>
          <TodoList />
          <TodoInput {...this.props} />
        </View>
      </>
    );
  }
}

export default Homepage;
