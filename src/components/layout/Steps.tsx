import * as React from 'react';
import {
  StyleSheet,
  View,
	Text
} from 'react-native';

const Steps = ({children}: any) => {

	var steps = [];
	for(let i = 0; i < children.length; i++) {	
		steps.push(children[i]);
	};

	return (
		<>
		<View style={styles.steps}>
			{steps}
		</View>
		</>
	);
};

const styles = StyleSheet.create({
  steps: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
  },
});

export default Steps;