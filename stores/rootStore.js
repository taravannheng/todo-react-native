import {create} from 'mobx-persist';
import AsyncStorage from '@react-native-community/async-storage';

// Store Modules
import TodoListStore from './todoListStore';

// initialize hydrate module with AsyncStorage
// as the storage option with JSON object format enabled
const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

export default function () {
  // initialize stores
  const todoListStore = new TodoListStore();

  hydrate('todoListStore', todoListStore);
  return {
    todoListStore,
    // other store goes here
  };
}
