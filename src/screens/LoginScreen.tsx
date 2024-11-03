import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import { AntDesign, Feather, FontAwesome5 } from '@expo/vector-icons';

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const authContext = useContext(AuthContext);

  const handleLogin = () => {
    const success = authContext?.login(email, password);
    if (!success) {
      Alert.alert('Error', 'Incorrect email or password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <FontAwesome5 name="react" size={52} color="#61dbfb" />
      </View>
      <Text style={styles.title}>Welcome</Text>
      <View style={styles.inputContainer}>
        <View style={styles.inputField}>
          <Feather name="mail" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.inputField}>
          <AntDesign name="lock1" size={24} />
          <TextInput
            style={styles.textInput}
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
        <View style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPasswordText}>Forgot password</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>LOG IN</Text>
        </TouchableOpacity>
        <View style={styles.socialLoginContainer}>
          <Text style={styles.socialLoginText}>Or login with</Text>
          <View style={styles.socialIcons}>
            <FontAwesome5 name="facebook" color="blue" size={48} />
            <AntDesign name="google" color="red" size={48} />
          </View>
        </View>
        <View>
          <Text style={styles.registerText}>
            Don't have an account?{' '}
            <Text
              onPress={() => navigation.navigate('Register')}
              style={styles.registerLink}>
              Sign up here!
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#f8f8f8',
  },
  iconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'black',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    width: '100%',
  },
  inputField: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: 16,
  },
  textInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  forgotPasswordText: {
    color: '#ff6b6b',
  },
  loginButton: {
    backgroundColor: '#ff8c00',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
  },
  loginButtonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  socialLoginText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 8,

  },
  registerText: {
    textAlign: 'center',
    fontSize: 14,
  },
  registerLink: {
    color: '#1e90ff',
    fontWeight: 'bold',
  },
});

export default LoginScreen;
