import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import StepIndicator from './StepIndicator';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/StepIndicator',
  component: StepIndicator,
} as ComponentMeta<typeof StepIndicator>;

export const Active: ComponentStory<typeof StepIndicator> = args => (
  <View style={styles.position}>
    <StepIndicator {...args} />
  </View>
);

export const Inactive: ComponentStory<typeof StepIndicator> = args => (
  <View style={styles.position}>
    <StepIndicator {...args} />
  </View>
);

Active.args = {
  active: true
};

Inactive.args = {
  active: false
};
