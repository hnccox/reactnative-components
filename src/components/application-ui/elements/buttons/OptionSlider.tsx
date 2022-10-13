import React from 'react';
import {
	Animated,
  StyleSheet,
	View,
	Text,
} from 'react-native';

import tw from 'twrnc';

import Button from './Button';
import { buttonStyles, iconPositions } from './Button';

type SelectOption = {
		label?: string;
		icon?: string;
		iconColor?: string;
		iconPosition?: typeof iconPositions[number];
}

type Props = {
  buttonType?: typeof buttonStyles[number];
	options: SelectOption[]
};

const OptionSlider = (props: Props) => {
	const options = props.options
	const optionsContainerRef = React.useRef<any>(null);
	const selectorContainerRef = React.useRef<any>(null);
	const opacityAnim = React.useRef(new Animated.Value(0)).current
	const translateXAnim = React.useRef(new Animated.Value(0)).current // calculate from store option

	const [measure, setMeasure] = React.useState<any>({left: 0, top: 0, width: 0, height: 0});
	const [dimensions, setDimensions] = React.useState({x: 0, y: 0, width: 0, height: 0});
	const [selectedOption, setSelectedOption] = React.useState(2)	// get from store
	const [optionElements, setOptionElements] = React.useState<any>();

	const onPress = (i: number) => {
		setSelectedOption(i);
	}
	
	const setOpacity = () => {
    Animated.timing(
      opacityAnim,
      {
        toValue: 1,
				delay: 200,
        duration: 200,
				useNativeDriver: true,
      }
    ).start();
	}

  React.useEffect(() => {
    if (selectorContainerRef.current && optionsContainerRef.current) {
      selectorContainerRef.current.measureLayout(
        optionsContainerRef.current,
        (left: number, top: number, width: number, height: number) => {
          setMeasure({ left, top, width, height });
        }
      );
    }
  }, [measure]);

	React.useEffect(() => {
		Animated.timing(
			translateXAnim,
			{
				toValue: measure.width * selectedOption,
				duration: 200,
				useNativeDriver: true
			}
		).start(setOpacity);
	}, [selectedOption, measure.width])

	React.useEffect(() => {
		const optionElements = options.map((option, i) => (
			<React.Fragment key={i}>
				<View style={{borderLeftColor: (selectedOption === i || selectedOption === i - 1) ? 'hsla(0, 0%, 0%, 0)' : 'hsla(0, 0%, 0%, 0.12)', borderRightColor: (selectedOption === i || selectedOption === i + 1) ? 'hsla(0, 0%, 0%, 0)' : 'hsla(0, 0%, 0%, 0.12)', borderLeftWidth: (i === 0) ? 0 : 0.5, borderRightWidth: (i === options.length - 1) ? 0 : 0.5}}>
				<Button
					onPress={() => onPress(i)} 
					buttonStyle={'link'}
					label={option.label} 
					icon={option.icon}
					iconColor={selectedOption === i ? 'hsl(233, 20%, 24%)' : 'hsl(230, 8%, 44%)'}
					iconPosition={option.iconPosition}
				/>
				</View>
			</React.Fragment>
		))
		setOptionElements(optionElements)
	}, [selectedOption])
		
	return (
		<>
		<View style={[tw`absolute flex px-1.5 py-3 m-auto rounded-md bg-gray-100`]}>
			<View ref={optionsContainerRef}
				onLayout={(event) => {
					setDimensions(event.nativeEvent.layout);
				}} 
				style={[tw`flex flex-1 flex-row justify-center items-center rounded-md bg-gray-100`]}
			>
				<Animated.View ref={selectorContainerRef}
					style={[
						styles.selectorContainer,
						{width: (dimensions.width / options.length), transform: [{translateX: translateXAnim}]},
						{opacity: opacityAnim || 0}
					]}>
					<View style={[styles.selector]} />
				</Animated.View>
				<Animated.View
					style={[tw`flex flex-1 flex-row justify-center items-center`, {opacity: opacityAnim || 0}]}>
					{optionElements}
				</Animated.View>
			</View>
		</View>
		</>
	)
}

const styles: Record<string, any> = StyleSheet.create({
	selectorContainer: {
		position: 'absolute',
		top: -6,
		right: 0,
		bottom: -6,
		left: 0,
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selector: {
		height: '100%',
		width: '100%',
		margin: 'auto',
		borderRadius: 6,
		backgroundColor: 'hsl(0, 0%, 100%)'
	}
})

export default OptionSlider;
