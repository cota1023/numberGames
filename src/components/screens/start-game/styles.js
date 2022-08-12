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
    marginHorizontal:20
  },
  inputLabel: {
    //marginTop:5,
    fontSize: 14,
    color: 'red',
    paddingVertical: 5,
    textAlign:'center'
  },
  card: {
    flex: 1,
    flexGrow: 0.25,
    justifyContent: 'center',
    marginHorizontal: 20,
    paddingVertical: 20,
    elevation:5
  },
  input: {
    width: '100%',
    maxWidth: 110,
    fontSize: 25,
    borderColor: 'black',
    marginTop:20,
    borderBottomWidth:1,
    textAlign:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginTop: 20,
  },
});
