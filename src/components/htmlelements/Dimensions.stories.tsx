import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Dimensions from './Dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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

export const DimensionsView: ComponentStory<typeof Dimensions> = () => (
  <View style={styles.container}>
    <Dimensions />
  </View>
);
