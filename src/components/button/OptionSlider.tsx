import React, {useState, useRef, useEffect} from 'react';
import {
	Animated,
  StyleSheet,
	View,
	Text,
} from 'react-native';

import tw from 'twrnc';

import AppButton from './AppButton';
import { buttonTypes, iconPositions } from './AppButton';

type SelectOption = {
		title?: string;
		icon?: string;
		iconColor?: string;
		iconPosition?: typeof iconPositions[number];
}

type Props = {
  buttonType?: typeof buttonTypes[number];
	options: SelectOption[]
};

const OptionSlider = (props: Props) => {
	const options = props.options
	const optionsContainerRef = useRef<any>(null);
	const selectorContainerRef = useRef<any>(null);
	const opacityAnim = useRef(new Animated.Value(0)).current
	const translateXAnim = useRef(new Animated.Value(0)).current // calculate from store option

	const [measure, setMeasure] = useState<any>({left: 0, top: 0, width: 0, height: 0});
	const [dimensions, setDimensions] = useState({x: 0, y: 0, width: 0, height: 0});
	const [selectedOption, setSelectedOption] = useState(2)	// get from store
	const [optionElements, setOptionElements] = useState<any>();

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

  useEffect(() => {
    if (selectorContainerRef.current && optionsContainerRef.current) {
      selectorContainerRef.current.measureLayout(
        optionsContainerRef.current,
        (left: number, top: number, width: number, height: number) => {
          setMeasure({ left, top, width, height });
        }
      );
    }
  }, [measure]);

	useEffect(() => {
		Animated.timing(
			translateXAnim,
			{
				toValue: measure.width * selectedOption,
				duration: 200,
				useNativeDriver: true
			}
		).start(setOpacity);
	}, [selectedOption, measure.width])

	useEffect(() => {
		const optionElements = options.map((option, i) => (
			<React.Fragment key={i}>
				<View style={{borderColor: 'hsla(0, 0%, 0%, 0.12)', borderLeftWidth: (i === 0 || selectedOption === i || selectedOption === i - 1) ? 0 : 0.5, borderRightWidth: (i === options.length - 1 || selectedOption === i || selectedOption === i + 1) ? 0 : 0.5}}>
				<AppButton
					onPress={() => onPress(i)} buttonType={'link'}
					title={option.title} icon={option.icon}
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
