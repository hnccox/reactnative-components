/* do not change this file, it is auto generated by storybook. */

import {
	configure,
	addDecorator,
	addParameters,
	addArgsEnhancer,
} from "@storybook/react-native";

import "@storybook/addon-ondevice-notes/register";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-backgrounds/register";
import "@storybook/addon-ondevice-actions/register";

import { argsEnhancers } from "@storybook/addon-actions/dist/modern/preset/addArgs";

import { decorators, parameters } from "./preview";

if (decorators) {
	decorators.forEach((decorator) => addDecorator(decorator));
}

if (parameters) {
	addParameters(parameters);
}

argsEnhancers.forEach((enhancer) => addArgsEnhancer(enhancer));

const getStories = () => {
	return [
		require("../src/components/button/AppButton.stories.tsx"),
		require("../src/components/button/AppSelectButton.stories.tsx"),
		require("../src/components/button/AppButtonGroup.stories.tsx"),
		require("../src/components/button/OptionSlider.stories.tsx"),
		// require("../src/components/calendar/Calendar.stories.tsx"),
		// require("../src/components/htmlelements/HTMLElements.stories.tsx"),
		// require("../src/components/layout/BottomPanel.stories.tsx"),
		// require("../src/components/layout/Dimensions.stories.tsx"),
		// require("../src/components/modal/AppModal.stories.tsx"),
		// require("../src/components/toggles/AppSwitch.stories.tsx"),
		// require("../src/components/pill/AppPill.stories.tsx"),
		// require("../src/components/layout/Steps.stories.tsx"),
		// require("../src/components/layout/StepIndicator.stories.tsx"),
		// require("../src/components/ui/input/AppInputText.stories.tsx"),
	];
};

configure(getStories, module, false);
