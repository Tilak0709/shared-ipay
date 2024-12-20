import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const LoginSignupPage = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Welcome to Ipay</Text>

      {/* Login Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Login')}> {/* Navigate to Login screen */}
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('SignUp')}> {/* Navigate to Sign Up screen */}
        <Text style={styles.buttonText}>Sign Up</Text>
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
    textAlign: 'center',
    marginBottom: 20,
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
});

export default LoginSignupPage;
