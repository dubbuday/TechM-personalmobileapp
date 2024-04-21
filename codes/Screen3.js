/*import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>Screen3</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
*/
/*
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Screen 3</Text>
      <View style={styles.languageContainer}>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>JavaScript</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Python</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Java</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageButtonText}>Swift</Text>
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
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  languageButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    margin: 5,
  },
  languageButtonText: {
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
*/

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Screen3({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Language to Start!</Text>
      <View style={styles.languageContainer}>
        <Text style={styles.language}>Hindi</Text>
        <Text style={styles.language}>French</Text>
        <Text style={styles.language}>Chinese</Text>
        <Text style={styles.language}>Arabic</Text>
        <Text style={styles.language}>Japanese</Text>
        <Text style={styles.language}>Russian</Text>
        <Text style={styles.language}>Portuguese</Text>
        <Text style={styles.language}>Italian</Text>
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
  languageContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  language: {
    backgroundColor: '#4CAF50',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
    marginVertical: 5,
    color: '#fff',
    fontSize: 16,
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
