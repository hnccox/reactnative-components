import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import ButtonGroup from './ButtonGroup';
import Button from './Button';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  component: ButtonGroup,
} as ComponentMeta<typeof ButtonGroup>;

export const Primary: ComponentStory<typeof ButtonGroup> = () => (
  <View style={styles.position}>
    <ButtonGroup>
			<Button onPress={() => {}} icon={'bicycle'} />
			<Button onPress={() => {}} icon={'car'} />
			<Button onPress={() => {}} icon={'person-walking'} />
		</ButtonGroup>
  </View>
);
