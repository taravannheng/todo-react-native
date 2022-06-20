import React from 'react';
import {View, Text} from 'react-native';

import styles from './style';

const Title = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

export default Title;
