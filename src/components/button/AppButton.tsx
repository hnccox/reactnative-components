import React from 'react';
import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AppButton = ({ onPress, title }: { onPress: (event: GestureResponderEvent) => {}, title: String }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.primary}>
      <Text style={styles.primaryText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primary: {
    backgroundColor: '#009688',
  },
  primaryText: {
    fontSize: 18,
    color: 'red',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  secondary: {
    color: '#333',
  },
  appButtonContainer: {
    elevation: 8,
    color: '#333',
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
