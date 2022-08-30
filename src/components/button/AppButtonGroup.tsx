import React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
	View,
  Text,
  TouchableOpacity,
	ProgressViewIOSComponent,
} from 'react-native';


type Props = {
  title: string;
  buttonType?: string;
};

const AppButtonGroup = ({children}: any) => {

	var buttons = [];
	for(let i = 0; i < children.length; i++) {
		buttons.push(children[i]);
		if(i !== children.length - 1) {
			buttons.push(
				<View key = {i} style={styles.divider}>
				</View>
			)
		}
	}

	return (
		<>
		<View style={styles.container}>
			{buttons}
		</View>
		</>
	)
}

const styles: Record<string, any> = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderRadius: 6,
		backgroundColor: '#F8F8F8',
	},
	divider: {
		height: 24,
		width: 1,
		borderWidth: 1,
		borderStyle: 'solid',
		borderColor: '#000000',
		opacity: 0.12,
		marginHorizontal: 3
	}
})

export default AppButtonGroup;