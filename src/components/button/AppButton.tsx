import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";

export const buttonTypes = ["default", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] as const
export const iconPositions = ["top", "left", "right", "bottom"] as const

type Props = {
  onPress: (e: GestureResponderEvent) => any;
  title?: string;
  buttonType?: typeof buttonTypes[number];
	icon?: string;
	iconColor?: string;
	iconPosition?: typeof iconPositions[number];
};

const AppButton = ({onPress, title, buttonType = 'default', icon = '', iconColor, iconPosition = 'left'}: Props) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, styles.primary, buttonType && styles[buttonType], (iconPosition === 'left' || iconPosition === 'right' ? styles.horizontal : styles.vertical)]}>
			{	(icon !== '' && (iconPosition === 'top' || iconPosition === 'left')) && <FontAwesomeIcon icon={['fas', `${icon}`] as IconProp} style={{color: (iconColor) ? `${iconColor}` : `#ffffff`, marginRight: (iconPosition === 'left') ? 6 : 0, marginBottom: (iconPosition === 'top') ? 6 : 0}} /> }
      {
				title && 
				<Text style={[styles.buttonText, buttonType && styles[`${buttonType}Text`]]}>
        	{title}
      	</Text>
			}
			{	(icon !== '' && (iconPosition === 'right' || iconPosition === 'bottom')) && <FontAwesomeIcon icon={['fas', `${icon}`] as IconProp} style={{color: (iconColor) ? `${iconColor}` : `#ffffff`, marginTop: (iconPosition === 'bottom') ? 6 : 0, marginLeft: (iconPosition === 'right') ? 6 : 0}} />	}
    </TouchableOpacity>
  );
};

const styles: Record<string, any> = StyleSheet.create({
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    paddingVertical: 15,
    paddingHorizontal: 45,
    overflow: 'hidden',
  },
	vertical: {
    flexDirection: 'column'
	},
	horizontal: {
    flexDirection: 'row'
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
