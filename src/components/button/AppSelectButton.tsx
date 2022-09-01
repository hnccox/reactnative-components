import React, {useState, useRef, useEffect} from 'react';
import {
  GestureResponderEvent,
	Animated,
  StyleSheet,
	View,
  Text,
  TouchableOpacity,
	NativeEventEmitter,
} from 'react-native';

import AppButton from './AppButton';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { IconProp } from "@fortawesome/fontawesome-svg-core";

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

const AppSelectButton = ({buttonType, options}: Props) => {
	const [dimensions, setDimensions] = useState({x: 0, y: 0, width: 0, height: 0});
	const [selector, setSelectorDimensions] = useState({x: 0, y: 0, width: 0, height: 0});
	const [elements, setElements] = useState<Element[]>()
	const [selectedOption, setSelectedOption] = useState(0)

	const opacityAnim = useRef(new Animated.Value(0)).current 
	const translateXAnim = useRef(new Animated.Value(0)).current 

	const onPress = (i: number) => {
		setSelectedOption(i); 
	}
	
	const opacityCalc = (selectedOption: number, i: number) => {
		if(selectedOption == i) {
			return 0
		} else {
			return 1
		}
	}
	
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

	useEffect(() => {
		Animated.timing(
			translateXAnim,
			{
				toValue: ((dimensions.width - options.length) / options.length) * selectedOption + selectedOption * 1,
				duration: 200,
				useNativeDriver: true
			}
		).start();
	}, [translateXAnim, selectedOption])

	useEffect(() => {
		let elements = []

		for(let i = 0; i < options.length; i++) {
			elements.push(
				<AppButton key = {i} onPress={() => onPress(i)} buttonType={'link'} title={options[i].title} icon={options[i].icon} iconColor={options[i].iconColor} iconPosition={options[i].iconPosition} />
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
	
	return (
		<>
			<View 
				onLayout={(event) => {
					setDimensions(event.nativeEvent.layout);
				}} 
				style={[styles.container, {position: 'absolute', margin: 'auto'}]}
			>
				<Animated.View 
					onLayout={(event) => { setSelectorDimensions(event.nativeEvent.layout); }} style={[styles.selected, {width: ((dimensions.width - options.length) / options.length), transform: [{translateX: translateXAnim}], opacity: (dimensions.width) ? opacityAnim : 0 }]}>
					<View style={{width:'100%', height:'100%', margin: 'auto', borderRadius: 6, backgroundColor: 'red'}}>
						<Text>{selector.target}</Text>
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
		// borderWidth: 1,
		// borderStyle: 'solid',
		// borderColor: 'hsl(0, 0%, 0%)',
		backgroundColor: 'hsl(0, 0%, 0%)',
		opacity: 0.12
	},
	selected: {
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		paddingHorizontal: 3,
		paddingVertical: 3,
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	}
})

export default AppSelectButton;
