import {StyleSheet} from 'react-native';

import colors from '../../constants/colors/index';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 56,
    backgroundColor: colors.light,
  },
  input: {
    justifyContent: 'center',
    width: '70%',
    height: '100%',
    paddingLeft: 16,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    paddingHorizontal: 12,
    backgroundColor: colors.primary,
  },
});

export default styles;
