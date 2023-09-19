import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const SignUp = () => {
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
        <Text style={styles.aviso}>Forgot Password?</Text>

       <Button style={styles.but}
       title="LOGIN"
         accessibilityLabel="Learn more about this purple button"
       />
      </View>
  );
  };

  export default SignUp;