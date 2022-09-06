import React, {useRef, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import tw from 'twrnc';

import Steps from './Steps';
import AppButton from '../button/AppButton';

export default {
  title: 'components/Steps',
  component: Steps,
} as ComponentMeta<typeof Steps>;

export const Default: ComponentStory<typeof Steps> = () => {

	const totalSteps = 5
	const loop = false;
	const [currentStep, setCurrentStep] = useState(1)	// get from store

	const onPress = (page: string) => {
		switch (page) {
			case 'prev':
				if(currentStep === 1) {
					if(!loop) return
					setCurrentStep(totalSteps)
				} else {
					setCurrentStep(currentStep - 1)
				}
				break;
			case 'next':
				if(currentStep === totalSteps) {
					if(!loop) return
					setCurrentStep(1)
				} else {
					setCurrentStep(currentStep + 1)
				}
				break;
		}
	}

	return (
		<View style={tw`m-auto`}>
			<View style={tw`flex flex-1 flex-row justify-center items-center`}>
				<AppButton onPress={() => onPress('prev')} buttonType='default' title="<" />
				<Steps totalSteps={totalSteps} currentStep={currentStep} />
				<AppButton onPress={() => onPress('next')} buttonType='default' title=">" />
			</View>
		</View>
	)
};

Default.args = {
};
