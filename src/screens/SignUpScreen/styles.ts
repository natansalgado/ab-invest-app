import { StyleSheet } from 'react-native';
import { themeColor } from '../HomeScreen/styles';

export const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    marginTop: 20,
    fontSize: 30,
    marginBottom: 10
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20,
    borderWidth: 2,
    borderRadius: 8,
    marginVertical: 5
  },
  footer: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  registerText: {
    fontSize: 18,
  },
  registerTextInside: {
    fontSize: 18,
    color: '#0090ff',
  },
  error: {
    backgroundColor: "#dc3545",
    marginBottom: 2,
    padding: 5,
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#000",
    color: "#fff"
  }
});