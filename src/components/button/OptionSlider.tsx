import React, {useState, useRef, useEffect} from 'react';
import {
	Animated,
  StyleSheet,
	View,
} from 'react-native';

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
	const selectorRef = useRef<any>(null);
	const opacityAnim = useRef(new Animated.Value(0)).current
	const translateXAnim = useRef(new Animated.Value(0)).current // calculate from store option

	const [measure, setMeasure] = useState<any>({left: 0, top: 0, width: 0, height: 0});
	const [dimensions, setDimensions] = useState({x: 0, y: 0, width: 0, height: 0});
	const [selectedOption, setSelectedOption] = useState(4)	// get from store
	const [elements, setElements] = useState<Element[]>();

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
    if (selectorRef.current && optionsContainerRef.current) {
      selectorRef.current.measureLayout(
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
		const elements = options.map((option, i) => (
			<React.Fragment key={i}>
				<AppButton
					onPress={() => onPress(i)} buttonType={'link'}
					title={option.title} icon={option.icon}
					iconColor={selectedOption === i ? 'hsl(233, 20%, 24%)' : 'hsl(230, 8%, 44%)'}
					iconPosition={option.iconPosition}
				/>
				{(i < options.length - 1) &&
					<View style={[styles.divider]}/>
				}
			</React.Fragment>
		))
		setElements(elements)
	}, [selectedOption])
		
	return (
		<>
			<View ref={optionsContainerRef}
				onLayout={(event) => {
					setDimensions(event.nativeEvent.layout);
				}} 
				style={[styles.container, {position: 'absolute', margin: 'auto'}]}
			>
				<Animated.View ref={selectorRef}
					style={[
						styles.selected,
						{width: ((dimensions.width - (options.length - 1)) / options.length), transform: [{translateX: translateXAnim}]},
						{opacity: opacityAnim || 0}
					]}>
					<View style={[styles.selector]}>
					</View>
				</Animated.View>
				<Animated.View
					style={[styles.elements, {opacity: opacityAnim || 0}]}>
					{options.map((option, i) => (
						<React.Fragment key={i}>
							<AppButton
								onPress={() => onPress(i)} buttonType={'link'}
								title={options[i].title} icon={options[i].icon}
								iconColor={selectedOption === i ? 'hsl(233, 20%, 24%)' : 'hsl(230, 8%, 44%)'}
								iconPosition={options[i].iconPosition}
							/>
							{(i < options.length - 1) &&
                <View style={[styles.divider]} />
							}
						</React.Fragment>
					))}
				</Animated.View>
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
		backgroundColor: 'hsl(0, 0%, 100%)'
	},
	elements: {
		display: 'flex',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		opacity: 0
	}
})

export default OptionSlider;
