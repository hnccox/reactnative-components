import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppModal from './AppModal';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  component: AppModal,
} as ComponentMeta<typeof AppModal>;

export const Primary: ComponentStory<typeof AppModal> = args => (
	<View style={styles.position}>
  	<AppModal />
	</View>
);

Primary.args = {
  title: 'Primary',
  class: 'primary',
};

export const Secondary: ComponentStory<typeof AppModal> = args => (
	<View style={styles.position}>
  	<AppModal />
	</View>
);

Secondary.args = {
  title: 'Secondary',
  class: 'secondary',
};
