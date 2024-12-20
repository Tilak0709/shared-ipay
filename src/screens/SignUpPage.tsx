import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const SignUpPage = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://localhost:3000/signup', {
        name,
        email,
        password,
        phone,
        balance: 0, // Default balance set to 0
      });
      if (response.status === 201) {
        navigation.navigate('Login'); // Navigate to Login page after successful sign up
      }
    } catch (error) {
      console.error('Error signing up', error);
      alert('Signup failed');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Sign Up for Ipay</Text>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#aaa"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#aaa"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
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

export default SignUpPage;
