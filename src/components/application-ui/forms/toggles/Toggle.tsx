import React, { useState, useEffect } from 'react';
import {
  Text,
	View,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
	value?: boolean;
	name?: string;
	disabled?: boolean;
	icons?: any;
  label?: any;
	optionLabels?: any;
};

const ToggleComponent = ({value = false, name = '', disabled = false, icons = { checked: 'check', unchecked: 'xmark'}, label = { title: 'Title', description: 'Description' }, optionLabels = { checked: 'Checked', unchecked: 'Unchecked' }}: Props) => {

	const [isEnabled, setIsEnabled] = useState(value);
	const [isDisabled, setIsDisabled] = useState(disabled);

	const [toggleDimensions, setToggleDimensions] = useState({ x:0, y:0, width:0, height: 0 });
	const [sliderDimensions, setSliderDimensions] = useState({ x:0, y:0, width:0, height: 0 });
	const [checkedLabelDimensions, setCheckedLabelDimensions] = useState({ x:0	, y:0, width:0, height: 0 });
	const [uncheckedLabelDimensions, setUncheckedLabelDimensions] = useState({ x:0	, y:0, width:0, height: 0 });

  return (
		<>
			{/*HIDDEN* optionLabels */}
			<View style={[tw.style('absolute inset-0 opacity-0 z-0 flex flex-row flex-start')]}>
				<Text
					onLayout={(event) => {
						setCheckedLabelDimensions(event.nativeEvent.layout)
					}}>{optionLabels.checked}</Text>
				<Text
				onLayout={(event) => {
					setUncheckedLabelDimensions(event.nativeEvent.layout)
				}}>{optionLabels.unchecked}</Text>
			</View>

			{/* SwitchGroup */ }
			<View
				style={[{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}]}>
				
				{/* Label */}
				<View style={[tw.style('flex flex-grow flex-col')]}>
					<Text style={[tw.style('text-sm font-medium text-gray-900')]}>{label.title}</Text>
					<Text style={[tw.style('text-sm text-gray-500')]}>{label.description}</Text>
				</View>

				{/* Switch */}
				<TouchableOpacity
					onPress={() => setIsEnabled(!isEnabled)}
					onLayout={(event) => {
						setToggleDimensions(event.nativeEvent.layout);
					}}
					style={[{minWidth: sliderDimensions.width * 2 + ((checkedLabelDimensions.width > uncheckedLabelDimensions.width) ? checkedLabelDimensions.width : uncheckedLabelDimensions.width) + 1, width: sliderDimensions.width * 2 + ((checkedLabelDimensions.width > uncheckedLabelDimensions.width) ? checkedLabelDimensions.width : uncheckedLabelDimensions.width) + 1}, tw.style(isDisabled ? {'bg-indigo-300': isEnabled, 'bg-gray-300': !isEnabled} : {'bg-indigo-600': isEnabled, 'bg-gray-200': !isEnabled}, 'relative inline-flex flex-row h-6 flex-shrink-0 flex-grow cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')]}
					disabled={isDisabled}
				>
							
					<Text style={[tw.style('absolute opacity-0')]}>Use setting</Text>

					<View 
						onLayout={(event) => {
							setSliderDimensions(event.nativeEvent.layout);
						}}
						style={[tw.style('pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'), isEnabled ? { transform: [{translateX: toggleDimensions.width - sliderDimensions.width - 2 * 2 }]} : { transform: [{translateX: 0}]}]}
						>
							{ (icons && isEnabled) &&
								<View style={[tw.style(isDisabled ? 'opacity-60' : 'opacity-100', 'ease-out duration-100 absolute inset-0 flex flex-col h-full w-full items-center justify-center')]} aria-hidden="true">
									<FontAwesomeIcon icon={['fas', `${icons.checked}`] as IconProp} size={12} />
								</View>
							}

							{ (icons && !isEnabled) &&
								<View style={[tw.style(isDisabled ? 'opacity-60' : 'opacity-100', 'ease-out duration-100 absolute inset-0 flex flex-col h-full w-full items-center justify-center')]} aria-hidden="true">
									<FontAwesomeIcon icon={['fas', `${icons.unchecked}`] as IconProp} size={12} />
								</View>
							}

					</View>
						
					{ isEnabled && <Text style={[tw.style('absolute w-full self-center text-white pl-2'), {textAlign:'left'}]}>{optionLabels.checked}</Text> }
					{ !isEnabled && <Text style={[tw.style('absolute w-full self-center text-black pr-2'), {textAlign:'right'}]}>{optionLabels.unchecked}</Text> }
							
				</TouchableOpacity>
			</View>
		</>
  );
};

export default ToggleComponent;