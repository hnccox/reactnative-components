import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import Steps from './Steps';
import StepIndicator from './StepIndicator';

const styles = StyleSheet.create({
  position: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
});

export default {
  title: 'components/Steps',
  component: Steps,
} as ComponentMeta<typeof Steps>;

export const Default: ComponentStory<typeof Steps> = () => (
  <View style={styles.position}>
    <Steps>
			<StepIndicator active={false}/>
			<StepIndicator active={false}/>
			<StepIndicator active={true}/>
		</Steps>
  </View>
);

Default.args = {
};
