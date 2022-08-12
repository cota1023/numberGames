import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 20,
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLabel: {
    fontSize: 14,
    color: 'red',
    paddingVertical: 5,
    fontStyle: 'Lato-Regular',
  },
  input: {
    width: '100%',
    maxWidth: 110,
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Lato-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
