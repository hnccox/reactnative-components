import React, { useRef } from 'react';
import { Text, View } from 'react-native';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Well from './Well';

export default {
	title: 'application-ui/layout/panels/wells',
  component: Well,
} as ComponentMeta<typeof Well>;


export const Default: ComponentStory<typeof Well> = args => (
    <View style={tw`w-full p-5`}>
			<Well {...args} 
				header={<Text>Header</Text>} 
				body={<Text>Body</Text>} 
				footer={<Text>Footer</Text>}>
				<View><Text>Children</Text></View>
			</Well>
		</View>
);

Default.args = {
	fullscreen: false,
};
