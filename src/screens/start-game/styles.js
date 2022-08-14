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
    elevation:5,
    marginBottom:20
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-around',
    marginTop: 20,
  },
  summaryContainer:{
marginHorizontal:20,
alignItems:'center',
alignSelf: 'center',
paddingVertical:10
  },
  summaryText:{

  }
});
