/*import React from 'react';
import { View, Text, Button } from 'react-native';

export default function AboutScreen({ navigation }) {
  return (
    <View>
      <Text>Screen4</Text>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}
*/

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Screen4({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Learning Journey!</Text>
      <View style={styles.languageContainer}>
        <View style={styles.languageItem}>
          <Text style={styles.languageName}>Spanish</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '70%' }]} />
          </View>
        </View>
        <View style={styles.languageItem}>
          <Text style={styles.languageName}>German</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progress, { width: '50%' }]} />
          </View>
        </View>
        {/* Add more language items as needed */}
      </View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
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
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  languageName: {
    fontSize: 16,
    marginRight: 10,
  },
  progressBar: {
    backgroundColor: '#ddd',
    height: 10,
    width: 200,
    borderRadius: 5,
  },
  progress: {
    backgroundColor: '#4CAF50',
    height: '100%',
    borderRadius: 5,
  },
});
