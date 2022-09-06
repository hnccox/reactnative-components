import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSwipe } from '../../hooks/useSwipe'
import {ComponentMeta, ComponentStory} from '@storybook/react';

import tw from 'twrnc';

import StepIndicator from './StepIndicator';

export default {
  title: 'components/Steps',
  component: StepIndicator,
} as ComponentMeta<typeof StepIndicator>;

export const Default: ComponentStory<typeof StepIndicator> = () => {

	const totalSteps = 5
	const loop = true;
	const [currentStep, setCurrentStep] = useState(1)	// get from store

	return (
		<>
			<StepIndicator totalSteps={totalSteps} currentStep={currentStep} />
		</>
	)
};

Default.args = {
};
