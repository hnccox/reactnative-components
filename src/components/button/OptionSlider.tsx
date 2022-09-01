import React, {useState, useRef, useEffect} from 'react';
import {
  GestureResponderEvent,
	Animated,
  StyleSheet,
	View,
  Text,
  TouchableOpacity,
	NativeEventEmitter,
	ColorPropType,
} from 'react-native';

import AppButton from './AppButton';

export const buttonTypes = ["default", "primary", "secondary", "success", "danger", "warning", "info", "light", "dark", "link"] as const
export const iconPositions = ["top", "left", "right", "bottom"] as const

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

const OptionSlider = ({buttonType, options}: Props) => {
	const optionsContainerRef = useRef<any>(null);
	const selectorRef = useRef<any>(null);

	const [measure, setMeasure] = useState<any>({left: 0, top: 0, width: 0, height: 0});
  useEffect(() => {
    if (selectorRef.current && optionsContainerRef.current) {
      selectorRef.current.measureLayout(
        optionsContainerRef.current,
        (left: number, top: number, width: number, height: number) => {
          setMeasure({ left, top, width, height });
        }
      );
    }
  }, [measure]);

	const [dimensions, setDimensions] = useState({x: 0, y: 0, width: 0, height: 0});
	const [elements, setElements] = useState<Element[]>()

	useEffect(() => {
		let elements = []

		for(let i = 0; i < options.length; i++) {
			elements.push(
				<AppButton key={i} onPress={() => onPress(i)} buttonType={'link'} title={options[i].title} icon={options[i].icon} iconColor={options[i].iconColor} iconPosition={options[i].iconPosition} />
			);
			if(i !== options.length - 1) {
				elements.push(
					<View key = {`divider${i}`} style={[styles.divider, {opacity: 1}]}>
					</View>
				)
			}
		}	
		setElements(elements)
	}, [])

	const [selectedOption, setSelectedOption] = useState(0)

	const opacityAnim = useRef(new Animated.Value(0)).current
	useEffect(() => {
    Animated.timing(
      opacityAnim,
      {
        toValue: 1,
        duration: 200,
				useNativeDriver: true,
      }
    ).start();
  }, [opacityAnim])

	const translateXAnim = useRef(new Animated.Value(0)).current 
	useEffect(() => {
		console.log(selectedOption)
		console.log(options[selectedOption])
		options[selectedOption].title = 'red'
		console.log(options[selectedOption])
		Animated.timing(
			translateXAnim,
			{
				toValue: measure.width * selectedOption - 3, 
				duration: 200,
				useNativeDriver: true
			}
		).start();
	}, [translateXAnim, selectedOption])

	const onPress = (i: number) => {
		setSelectedOption(i);
	}
		
	return (
		<>
			<View ref={optionsContainerRef}
				onLayout={(event) => {
					setDimensions(event.nativeEvent.layout);
				}} 
				style={[styles.container, {position: 'absolute', margin: 'auto'}]}
			>
				<Animated.View ref={selectorRef}
					style={[styles.selected, {width: ((dimensions.width - (options.length - 1)) / options.length), transform: [{translateX: translateXAnim}], opacity: (dimensions.width) ? opacityAnim : 0 }]}>
					<View style={[styles.selector]}>
						{/* <Text>{measure.left} {measure.width}</Text> */}
						<Text>{selectedOption}</Text>
					</View>
				</Animated.View>
				{elements}
			</View>
		</>
	)
}

const styles: Record<string, any> = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 6,
		paddingHorizontal: 6,
		borderRadius: 6,
		backgroundColor: 'hsl(0, 0%, 97%)',
	},
	divider: {
		height: 24,
		width: 1,
		backgroundColor: 'hsl(0, 0%, 0%)',
		opacity: 0.12,
	},
	selected: {
		position: 'absolute',
		top: 0,
		right: 3,
		bottom: 0,
		left: 3,
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selector: {
		height: '80%',
		width: '80%',
		margin: 'auto',
		borderRadius: 6,
		backgroundColor: 'hsl(0, 0%, 100%)',
	}
})

export default OptionSlider;
