import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Card from './Card';

export default {
	title: 'application-ui/layout/panels/cards',
  component: Card,
} as ComponentMeta<typeof Card>;


export const Default: ComponentStory<typeof Card> = args => (
    <View style={tw`w-full p-5`}>
			<Card {...args} 
				header={<Text>Header</Text>} 
				body={<Text>Body</Text>} 
				footer={<Text>Footer</Text>}>
				<View><Text>Children</Text></View>
			</Card>
		</View>
);

Default.args = {
	fullscreen: false,
};
