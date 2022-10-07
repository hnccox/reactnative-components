import * as React from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import tw from 'twrnc';

import { StepWizard, Step } from './StepWizard';
import AppButton from '../elements/buttons/Button';

export default {
  component: StepWizard,
} as ComponentMeta<typeof StepWizard>;

export const Default: ComponentStory<typeof StepWizard> = (args) => {

	// const [step, setStep] = React.useState(1)

	// const onPress = (type: string) => {
	// 	if(type === 'prev') {
	// 		setStep(step - 1)
	// 	}
	// 	if(type === 'next') {
	// 		setStep(step + 1)
	// 	}
	// }

	return (
		<View style={[tw`flex flex-col`, {height: 1600}]}>
			{/* <AppButton onPress={() => onPress('prev')} buttonType={'primary'} title={'<'} />
			<AppButton onPress={() => onPress('next')} buttonType={'primary'} title={'>'} /> */}
			<StepWizard {...args}>
				<Step><Text style={tw`text-black`}>Step 1</Text></Step>
				<Step><Text style={tw`text-black`}>Step 2</Text></Step>
				<Step><Text style={tw`text-black`}>Step 3</Text></Step>
				<Step><Text style={tw`text-black`}>Step 4</Text></Step>
				<Step><Text style={tw`text-black`}>Step 5</Text></Step>
				<Step><Text style={tw`text-black`}>Step 6</Text></Step>
				<Step><Text style={tw`text-black`}>Step 7</Text></Step>
				<Step><Text style={tw`text-black`}>Step 8</Text></Step>
				<Step><Text style={tw`text-black`}>Step 9</Text></Step>
				<Step><Text style={tw`text-black`}>Step 10</Text></Step>
				<Step><Text style={tw`text-black`}>Step 11</Text></Step>
			</StepWizard>
		</View>
	)	
};

Default.args = {
  loop: true,
	direction: 'both',
	afterComplete: true,
	stepIndicator: true,
};