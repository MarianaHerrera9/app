import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>TREVELO</Text>
      <TextInput
        style={styles.input}
        placeholder="E-Mail Address"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text style={styles.aviso}>Forgot Password</Text>

     <Button style={styles.but}
     title="Iniciar Sesión"
     />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  header: {
    fontSize: 30,
    marginBottom: 24,

  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#FF1493',
    marginBottom: 16,
    padding: 8,
  },
  aviso: {
      fontSize: 14,
      marginBottom: 24,
   },

});

export default Login;
