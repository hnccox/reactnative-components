import * as React from 'react';
import {StyleSheet, View} from 'react-native';

type Props = {
  for: string;
};

const InputLabel = () => {
	return (
		<>
			<View style={styles.labelContainer}></View>
		</>
	)
}
const styles = StyleSheet.create({
	labelContainer: {
		flex: 1,
		flexGrow: 1,
	}
})

export default InputLabel;