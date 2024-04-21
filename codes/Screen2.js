/*import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function AboutScreen({route}) { 
  let dataObj = route.params

  return ( 
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        This is the About Screen of {dataObj.websiteName} 
      </Text>
    </View>
  );
}
*/

// Screen2.js
/*
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>Screen2</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

*/


/*
import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>Screen2</Text>
      <Button title="Browse Catalog" onPress={() => navigation.navigate('Screen3')} />
      <Button title="My Learning" onPress={() => navigation.navigate('Screen4')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

*/


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where To Go!</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen3')}>
          <Text style={styles.buttonText}>Browse Catalog</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Screen4')}>
          <Text style={styles.buttonText}>My Learning</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.goBackText}>Go back</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  goBackButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
  },
  goBackText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});


