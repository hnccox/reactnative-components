import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import { useSwipe } from '../../hooks/useSwipe'
import {ComponentMeta, ComponentStory} from '@storybook/react';

import tw from 'twrnc';

import { StepWizard, Step } from './StepWizard';

export default {
  title: 'components/StepWizard',
  component: StepWizard,
} as ComponentMeta<typeof StepWizard>;

export const Default: ComponentStory<typeof StepWizard> = () => {

	return (
		<StepWizard loop={true} stepIndicator={true}>
			<Step><Text style={tw`text-black`}>Step 1</Text></Step>
			<Step><Text style={tw`text-black`}>Step 2</Text></Step>
			<Step><Text style={tw`text-black`}>Step 3</Text></Step>
			<Step><Text style={tw`text-black`}>Step 4</Text></Step>
			<Step><Text style={tw`text-black`}>Step 5</Text></Step>
			<Step><Text style={tw`text-black`}>Step 6</Text></Step>
		</StepWizard>
	)	
};