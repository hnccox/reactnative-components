import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Meta, StoryFn } from '@storybook/react';

import Dimensions from './Dimensions';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#D3D3D3',
	},
	header: {
		fontSize: 16,
		marginVertical: 10,
	},
});

export default {
	title: 'utils/dimensions',
	component: Dimensions,
} as Meta<typeof Dimensions>;

export const DimensionsView: StoryFn<typeof Dimensions> = args => (
	<View style={styles.container}>
		<Dimensions {...args} />
	</View>
);

DimensionsView.args = {
	elementText: 'Element Dimensions',
};
