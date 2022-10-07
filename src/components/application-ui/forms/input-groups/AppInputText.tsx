import React from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput } from "react-native";
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { IconPrefix, IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
	icon?: string;
	iconColor?: string;
  placeholder: string | undefined;
};


const AppTextInput = ({icon, iconColor, placeholder}: Props) => {
  const [text, onChangeText] = React.useState(placeholder);
  const [number, onChangeNumber] = React.useState(null);
	// let color = (iconColor) ? `${iconColor}` : `#ffffff`;

  return (
    <SafeAreaView>
			<View style={[styles.container, styles.input]}>
				{ icon &&	<FontAwesomeIcon icon={['fas', `${icon}`] as IconProp} style={{color: (iconColor) ? `${iconColor}` : `#ffffff`, marginRight: 5}} /> }
				<TextInput
					onChangeText={onChangeText}
					value={text}
				/>
			</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
  input: {
    height: 55,
    width: 'auto',
		paddingVertical: 0,
		paddingHorizontal: 20,
		borderRadius: 3,
		backgroundColor: "#F8F8F8",
  },
});

export default AppTextInput;