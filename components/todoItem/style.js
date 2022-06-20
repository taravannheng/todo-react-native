import {StyleSheet} from 'react-native';

import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: colors.light,
    marginBottom: 8,
  },
  text: {
    color: colors.dark,
  },
  icon: {
    fontSize: 24,
    color: colors.danger,
  },
});

export default styles;
