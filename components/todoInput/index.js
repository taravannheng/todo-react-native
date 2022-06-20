import React, {useState} from 'react';
import {
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import uuid from 'react-native-uuid';

import styles from './style';
import colors from '../../constants/colors';

const TodoInput = props => {
  const [todo, setTodo] = useState('');
  const {todoListStore} = props;

  const submitTodoHandler = () => {
    const newTodo = {
      text: todo,
      id: uuid.v4(),
    };

    todoListStore.addTodo(newTodo);

    //empty the input
    setTodo('');
  };

  return (
    <>
      <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={56}>
        <View style={styles.container}>
          <View style={styles.input}>
            <TextInput
              value={todo}
              onChangeText={value => setTodo(value)}
              placeholder="Add todo here..."
            />
          </View>
          <TouchableOpacity>
            <View style={styles.button}>
              <Button
                color={colors.dark}
                title="Add"
                onPress={submitTodoHandler}
              />
            </View>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </>
  );
};

export default TodoInput;
