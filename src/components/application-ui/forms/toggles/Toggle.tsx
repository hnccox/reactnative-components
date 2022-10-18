import React, { useState, useEffect } from 'react';
import {
	Animated,
	Easing,
	Dimensions,
  Text,
	View,
  TouchableOpacity,
} from 'react-native';
import tw from 'twrnc';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type Label = {
	title?: string,
	description?: string,
	position?: 'top' | 'right' | 'bottom' | 'left' | 'top left' | 'top right' | 'bottom left' | 'bottom right'
}

type OptionLabels = {
	checked: string,
	unchecked: string
	position?: 'inner' | 'outer' | 'outer left' | 'outer right'
}

type Icons = {
	checked: 'check' | 'thumbs-up'
	unchecked: 'xmark' | 'thumbs-down'
}

type Props = {
	value: boolean;
	name?: string;
	disabled: boolean;
	size?: string | number;
  label?: Label;
	optionLabels?: OptionLabels;
	icons?: Icons
};

const ToggleComponent = ({value = true, name, disabled = false, size = 0, label, optionLabels, icons}: Props) => {

	if(label && !label.position) { label.position = 'left' }
	if(optionLabels && !optionLabels.position) { optionLabels.position = 'inner' }
	if(label?.position && label?.position.split(' ').length === 1) {
		switch(label?.position) {
			case 'top':
				label.position = 'top left'
				break;
			case 'right':
				label.position = 'top right'
				break;
			case 'bottom':
				label.position = 'bottom left'
				break;
			case 'left':
				label.position = 'top left'
			default: label.position = 'right'
		}
	}

	const [isEnabled, setIsEnabled] = useState(value);
	const isDisabled = disabled;

	const [toggleDimensions, setToggleDimensions] = useState({ x:0, y:0, width:0, height: 0 });
	const [sliderDimensions, setSliderDimensions] = useState({ x:0, y:0, width:0, height: 0 });
	const [checkedLabelDimensions, setCheckedLabelDimensions] = useState({ x:0	, y:0, width:0, height: 0 });
	const [uncheckedLabelDimensions, setUncheckedLabelDimensions] = useState({ x:0	, y:0, width:0, height: 0 });

	const translateXAnim = React.useRef(new Animated.Value(0)).current
	// const opacityCheckedAnim = React.useRef(new Animated.Value((isEnabled ? 100 : 0))).current
	// const opacityUncheckedAnim = React.useRef(new Animated.Value((isEnabled ? 0 : 100))).current

	const [isPortrait, setPortrait] = useState(() => {
		const dim = Dimensions.get('screen');
		return dim.height >= dim.width;
	});

	// Event Listener for orientation changes
	Dimensions.addEventListener('change', () => {
		const dim = Dimensions.get('screen');
		setPortrait(dim.height >= dim.width);
	});

	const sliderWidth = () => {
		return sliderDimensions.width
	}

	const labelWidth = () => {
		// Return always the width of the optionLabels if size < optionLabels.width
		let _size: number;
		switch(size) {
			case 'xs':
				_size = 0;
				break;
			case 'sm':
				_size = 12;
				break;
			case 'md':
				_size = 36;
				break;
			case 'lg':
				_size = 60;
				break;
			case 'xl':
				_size = 100;
				break;
			default: Number.isInteger(size) ? _size = size as number : _size = 0;
		}
		if((optionLabels?.position === 'inner' || !size )) {
			if(checkedLabelDimensions.width > uncheckedLabelDimensions.width) {
				return ((checkedLabelDimensions.width > _size) ? checkedLabelDimensions.width : _size)
			} else {
				return ((uncheckedLabelDimensions.width > _size) ? uncheckedLabelDimensions.width : _size)
			}
		} else {
			return _size
		}
	}

	const labelPosition = (portrait: boolean) => {
		if(portrait) {
			return (label?.position && label?.position.split(' ')[0] === 'top' ? {flexDirection: 'column'} : {flexDirection: 'column-reverse'});
		} else {
			return (label?.position && label?.position.split(' ')[1] === 'left' ? {flexDirection: 'row'} : {flexDirection: 'row-reverse'});
		}	
	}

	React.useEffect(() => {
		Animated.timing(
			translateXAnim,
			{
				toValue: (isEnabled ? 1 : 0) * (toggleDimensions.width - sliderDimensions.width - 2 * 2),
				duration: 200,
				useNativeDriver: true
			}
		).start();
	}, [isEnabled, toggleDimensions, sliderDimensions])

	// React.useEffect(() => {
	// 	Animated.parallel([
	// 		Animated.timing(
	// 			translateXAnim,
	// 			{
	// 				toValue: (isEnabled ? 1 : 0) * (toggleDimensions.width - sliderDimensions.width - 2 * 2),
	// 				duration: 200,
	// 				useNativeDriver: true
	// 			}
	// 		),
	// 		Animated.timing(
	// 			opacityCheckedAnim,
	// 			{
	// 				toValue: (isEnabled ? 100 : 0),
	// 				duration: 200,
	// 				useNativeDriver: true
	// 			}
	// 		),
	// 		Animated.timing(
	// 			opacityUncheckedAnim,
	// 			{
	// 				toValue: (isEnabled ? 0 : 100),
	// 				duration: 200,
	// 				useNativeDriver: true
	// 			}
	// 		),
	// 	]).start();
	// }, [isEnabled, toggleDimensions, sliderDimensions])

	return (
		<>
			{/*HIDDEN* optionLabels */}
			{ optionLabels &&
				<View style={[tw.style('absolute inset-0 opacity-0 z-0 flex flex-row justify-start')]}>
					<Text
						onLayout={(event) => {
							setCheckedLabelDimensions(event.nativeEvent.layout)
						}}>{optionLabels.checked}</Text>
					<Text
					onLayout={(event) => {
						setUncheckedLabelDimensions(event.nativeEvent.layout)
					}}>{optionLabels.unchecked}</Text>
				</View>
			}

			{/* SwitchGroup */ }
			<View
				style={[tw.style('flex items-center justify-between w-full'), labelPosition(isPortrait)]}>
				
				{/* Label */}
				<View style={[tw.style('flex flex-grow flex-col m-2 px-2')]}>
					<Text style={[tw.style('text-sm font-medium text-gray-900')]}>{label?.title}</Text>
					<Text style={[tw.style('text-sm text-gray-500')]}>{label?.description}</Text>
				</View>

				<View style={tw.style('flex flex-row items-center m-3 px-2')}>

					{/* optionLabels */}
					<View style={tw.style('flex items-center')}>
						{ (optionLabels?.position === 'outer' || optionLabels?.position === 'outer left') &&
							<Text 
								style={[tw.style('relative text-sm mx-1', 
									isDisabled ? 'text-gray-300': (isEnabled ? 'text-slate-500' : 'text-slate-500'),
						 			(optionLabels.position === 'outer' || (optionLabels.position === 'outer left' && !isEnabled)) ? 'opacity-100' : 'opacity-0')]
								}>{optionLabels?.unchecked}</Text>
						}
						{ (optionLabels?.position === 'outer left') &&
							<Text 
								style={[tw.style('absolute text-sm mx-1', 
								isDisabled ? 'text-gray-300' : (isEnabled ? 'text-slate-900' : 'text-slate-500'),
								(optionLabels.position === 'outer left' && isEnabled) ? 'opacity-100' : 'opacity-0')]
							}>{optionLabels?.checked}</Text>
						}
					</View>

					{/* Switch */}
					<TouchableOpacity
						onPress={() => setIsEnabled(!isEnabled)}
						onLayout={(event) => {
							setToggleDimensions(event.nativeEvent.layout);
						}}
						style={[{minWidth: sliderWidth() * 2 + labelWidth(), width: sliderWidth() * 2 + labelWidth(), maxWidth: sliderWidth() * 2 + labelWidth()}, tw.style((isDisabled ? (isEnabled ? 'bg-indigo-300': 'bg-gray-300') : (isEnabled ? 'bg-indigo-600' : 'bg-gray-200')), 'relative flex flex-row h-6 rounded-full border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2')]}
						disabled={isDisabled}
					>
								
						<Text style={[tw.style('absolute opacity-0')]}>Use setting</Text>

						<Animated.View 
							onLayout={(event) => {
								setSliderDimensions(event.nativeEvent.layout);
							}}
							style={[tw.style('h-5 w-5 rounded-full bg-white shadow'), { transform: [{translateX: translateXAnim}] }]}
						>
							{/* TouchableOpacity already implements an opacity animation */}
							{ (icons && !isEnabled) &&
								<View style={[tw.style('absolute inset-0 flex flex-col h-full w-full items-center justify-center', isEnabled? 'opacity-0' : 'opacity-100'), /*{ opacity: opacityUncheckedAnim }*/]} aria-hidden="true">
									<FontAwesomeIcon icon={['fas', `${icons.unchecked}`] as IconProp} size={12} />
								</View>
							}
							{ (icons && isEnabled) &&
								<View style={[tw.style('absolute inset-0 flex flex-col h-full w-full items-center justify-center', isEnabled? 'opacity-100' : 'opacity-0'), /*{ opacity: opacityCheckedAnim }*/]} aria-hidden="true">
									<FontAwesomeIcon icon={['fas', `${icons.checked}`] as IconProp} size={12} />
								</View>
							}
						</Animated.View>
							
						{ (isEnabled && optionLabels?.position === 'inner') && <Text style={[tw.style('absolute w-full self-center text-white pl-2'), {textAlign:'left'}]}>{optionLabels.checked}</Text> }
						{ (!isEnabled && optionLabels?.position === 'inner') && <Text style={[tw.style('absolute w-full self-center text-slate-500 pr-2'), {textAlign:'right'}]}>{optionLabels.unchecked}</Text> }
								
					</TouchableOpacity>

					{/* optionLabels */}
					<View style={tw.style('flex items-center')}>
						{ (optionLabels?.position === 'outer' || optionLabels?.position === 'outer right') &&
							<Text 
								style={[tw.style('relative text-sm mx-1', 
									isDisabled ? 'text-gray-300': (isEnabled ? 'text-slate-900' : 'text-slate-500'),
						 			(optionLabels.position === 'outer' || (optionLabels.position === 'outer right' && isEnabled)) ? 'opacity-100' : 'opacity-0')]
								}>{optionLabels?.checked}</Text>
						}
						{ (optionLabels?.position === 'outer right') &&
							<Text 
								style={[tw.style('absolute text-sm mx-1', 
								isDisabled ? 'text-gray-300' : (isEnabled ? 'text-slate-500' : 'text-slate-500'),
								(optionLabels.position === 'outer right' && isEnabled) ? 'opacity-0' : 'opacity-100')]
							}>{optionLabels?.unchecked}</Text>
						}
					</View>

				</View>
			</View>
		</>
  );
};

export default ToggleComponent;