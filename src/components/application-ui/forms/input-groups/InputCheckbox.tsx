import * as React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
	View,
  TouchableOpacity,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export const buttonStyles = ["default", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] as const
export const iconPositions = ["top", "left", "right", "bottom"] as const

type Props = {
  onPress: (e: GestureResponderEvent) => any;
	type?: 'button' | 'submit' | 'reset';
  title?: string;
  buttonStyle?: typeof buttonStyles[number];
	icon?: string;
	iconColor?: string;
	iconPosition?: typeof iconPositions[number];
};
class InputCheckbox extends React.Component<any, any> {
	render() {
		return (
			<View>Hello</View>
		)
	}
}

export default InputCheckbox;
