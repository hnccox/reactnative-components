import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';

type Props = {
  onPress: (e: GestureResponderEvent) => any;
  title: string;
  buttonType: string;
};

const AppButton = ({onPress, title, buttonType = 'default'}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.primary, buttonType && styles[buttonType]]}>
      <Text
        style={[styles.buttonText, buttonType && styles[`${buttonType}Text`]]}>
        <FontAwesomeIcon icon={['fas', 'coffee']} style={{color: '#ffffff'}} />
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles: Record<string, any> = StyleSheet.create({
  light: {
    color: 'red',
  },
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 45,
    overflow: 'hidden',
  },
  buttonText: {
    fontFamily: 'Geomanist-Bold',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 18,
    textAlign: 'center',
  },
  default: {
    backgroundColor: '#000000',
  },
  defaultText: {
    color: '#FFFFFF',
  },
  primary: {
    borderColor: '#007bff',
    backgroundColor: '#007bff',
  },
  primaryText: {
    color: '#fff',
  },
  secondary: {
    borderColor: '#6c757d',
    backgroundColor: '#6c757d',
  },
  secondaryText: {
    color: '#fff',
  },
  success: {
    borderColor: '#28a745',
    backgroundColor: '#28a745',
  },
  successText: {
    color: '#fff',
  },
  danger: {
    borderColor: '#dc3545',
    backgroundColor: '#dc3545',
  },
  dangerText: {
    color: '#fff',
  },
  warning: {
    borderColor: '#ffc107',
    backgroundColor: '#ffc107',
  },
  warningText: {
    color: '#212529',
  },
  info: {
    borderColor: '#17a2b8',
    backgroundColor: '#17a2b8',
  },
  infoText: {
    color: '#fff',
  },
  light: {
    borderColor: '#f8f9fa',
    backgroundColor: '#f8f9fa',
  },
  lightText: {
    color: '#212529',
  },
  dark: {
    borderColor: '#343a40',
    backgroundColor: '#343a40',
  },
  darkText: {
    color: '#fff',
  },
  link: {
    backgroundColor: 'transparent',
  },
  linkText: {
    fontWeight: '400',
    color: '#007bff',
  },
  // primary: {
  //   backgroundColor: '#31344A',
  // },
  // primaryText: {
  //   color: '#FFFFFF',
  // },
  // secondary: {
  //   backgroundColor: '#EBEBED',
  // },
  // secondaryText: {
  //   color: '#343C45',
  // },
});

export default AppButton;
