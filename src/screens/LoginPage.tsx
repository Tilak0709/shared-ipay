import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const LoginPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Login to Ipay</Text>

      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#aaa" />
      <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#aaa" secureTextEntry />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')} // Redirect to Home after login
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.link}
        onPress={() => navigation.goBack()}>
        <Text style={styles.linkText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#030303',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titleText: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 20,
  },
  input: {
    width: 327,
    height: 36,
    borderRadius: 24,
    backgroundColor: '#444444',
    color: '#ffffff',
    paddingLeft: 10,
    marginBottom: 15,
  },
  button: {
    width: 327,
    height: 36,
    borderRadius: 24,
    backgroundColor: '#dcdcdc',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  link: {
    marginTop: 15,
  },
  linkText: {
    color: '#aaa',
    fontSize: 14,
  },
});

export default LoginPage;
