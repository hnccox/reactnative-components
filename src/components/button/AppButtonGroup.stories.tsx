import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import AppButtonGroup from './AppButtonGroup';
import AppButton from './AppButton';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/AppButtonGroup',
  component: AppButtonGroup,
} as ComponentMeta<typeof AppButtonGroup>;

export const Primary: ComponentStory<typeof AppButtonGroup> = () => (
  <View style={styles.position}>
    <AppButtonGroup>
			<AppButton onPress={() => {}} icon={'bicycle'}></AppButton>
			<AppButton onPress={() => {}} icon={'car'}></AppButton>
			<AppButton onPress={() => {}} icon={'person-walking'}></AppButton>
		</AppButtonGroup>
  </View>
);
