import * as React from 'react';
import {
  StyleSheet,
  View,
	Text
} from 'react-native';

type Props = {
  active: boolean;
};

const StepIndicator = ({active = false}: Props) => {
	return (
		<View style={[styles.stepIndicator, active && styles[`active`]]}>
		</View>
	);
};

const styles = StyleSheet.create({
  stepIndicator: {
		flex: 1,
		flexGrow: 0,
		order: 0,
		height: 5,
		width: 25,
		backgroundColor: '#EBEBED',
		borderRadius: 56,
  },
  active: {
		backgroundColor: '#31344A',
  },
});

export default StepIndicator;