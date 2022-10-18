import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

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
} as ComponentMeta<typeof Dimensions>;

export const DimensionsView: ComponentStory<typeof Dimensions> = (args) => (
  <View style={styles.container}>
    <Dimensions {...args} />
  </View>
);

DimensionsView.args = {
	elementText: 'Element Dimensions',
};
