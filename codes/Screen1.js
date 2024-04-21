/*import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react'

export default function HomeScreen({navigation}) { 
  return ( 
    <View style={styles.container}>
      <Text style={styles.paragraph}> Home Screen </Text>
      <Button 
        title="Go to About"
        onPress={() => navigation.navigate('AboutScreen')} 
      /> 
    </View>
  );
}
*/

// Screen1.js
/*
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Screen1({ navigation }) {
  return (
    <View>
      <Text>Screen 1</Text>
      <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
}
*/

/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Screen1({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform basic validation (you can add more robust validation as per your requirements)
    if (username.trim() === 'Karthik' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loggedIn ? (
        <View>
          <Text>Welcome, {username}!</Text>
          <Button title="Let's Start Your Learning Journey!" onPress={() => navigation.navigate('Screen2')} />
        </View>
      ) : (
        <View>
          <Text>Login Page</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}
*/


/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default function Screen1({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform basic validation (you can add more robust validation as per your requirements)
    if (username.trim() === 'admin' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {loggedIn ? (
        <View>
          <Text>Welcome, {username}!</Text>
          <Button title="Go to Screen 2" onPress={() => navigation.navigate('Screen2')} />
          <Button title="Go to Screen 3" onPress={() => navigation.navigate('Screen3')} />
          <Button title="Go to Screen 4" onPress={() => navigation.navigate('Screen4')} />
        </View>
      ) : (
        <View>
          <Text>Login Page</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

*/



import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function Screen1({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Perform basic validation (you can add more robust validation as per your requirements)
    if (username.trim() === 'Karthik' && password === 'password') {
      setLoggedIn(true);
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <View style={styles.loggedInContainer}>
          <Text style={styles.welcomeText}>Welcome, {username}!</Text>
          <Button title="Let's Start Your Learning Journey!" onPress={() => navigation.navigate('Screen2')} />
        </View>
      ) : (
        <View style={styles.loginContainer}>
          <Text style={styles.loginHeader}>Login</Text>
          <TextInput
            placeholder="Username"
            value={username}
            onChangeText={text => setUsername(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            style={styles.input}
          />
          <Button title="Login" onPress={handleLogin} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  loggedInContainer: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 20,
    marginBottom: 20,
  },
  loginContainer: {
    alignItems: 'center',
  },
  loginHeader: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 250,
  },
});