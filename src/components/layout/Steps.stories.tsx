import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSwipe } from '../../hooks/useSwipe'
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
	let currentStep = 1
	// const [currentStep, setCurrentStep] = React.useState(1)	// get from store

	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

	function onSwipeLeft(){
		console.log('SWIPE_LEFT')
	}

	function onSwipeRight(){
			console.log('SWIPE_RIGHT')
	}
	const onPress = (page: string) => {
		switch (page) {
			case 'prev':
				if(currentStep === 1) {
					if(!loop) return
					// setCurrentStep(totalSteps)
					currentStep = totalSteps
				} else {
					currentStep = currentStep - 1
					// setCurrentStep(currentStep - 1)
				}
				break;
			case 'next':
				if(currentStep === totalSteps) {
					if(!loop) return
					// setCurrentStep(1)
					currentStep = 1
				} else {
					// setCurrentStep(currentStep + 1)
					currentStep = currentStep + 1
				}
				break;
		}
	}

	return (
		<View style={tw`m-auto`}>
			<View onTouchStart={onTouchStart} onTouchEnd={onTouchEnd} style={tw`flex flex-1 flex-row justify-center items-center`}>
				<AppButton onPress={() => onPress('prev')} buttonType='default' title="<" />
				<Steps totalSteps={totalSteps} currentStep={currentStep} />
				<AppButton onPress={() => onPress('next')} buttonType='default' title=">" />
			</View>
		</View>
	)
};

Default.args = {
};
