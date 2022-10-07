import {ComponentMeta, ComponentStory} from '@storybook/react';
import tw from 'twrnc';

import Test from './Test';

export default {
  component: Test,
} as ComponentMeta<typeof Test>;

export const Default: ComponentStory<typeof Test> = args => (
    <Test />
);

// Default.args = {
// 	value: true,
// 	disabled: false,
// 	label: {
// 		title: 'Available to hire',
// 		description: 'Nulla amet tempus sit accumsan. Aliquet turpis sed sit lacinia.',
// 		position: 'left'
// 	},
// 	optionLabels: {
// 		checked: 'Enabled',
// 		unchecked: 'Disabled',
// 	},
// 	icons: {
// 		checked: 'check',
// 		unchecked: 'x-mark'
// 	},
// };
