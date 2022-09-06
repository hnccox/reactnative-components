import * as React from 'react';
import {
	StyleSheet,
  View,
	Text
} from 'react-native';
import { useSwipe } from '../../hooks/useSwipe'

import tw from 'twrnc'

// import StepIndicator from './StepIndicator';

type Props = {
  loop?: boolean;
	stepIndicator?: boolean;
	children: any;
};

const Step = ({children}: any) => {
	return (
		<>
			{children}
		</>
	);
};

const StepIndicator = ({totalSteps, currentStep}: any) => {

	const steps: React.ReactNode[] = [];
	const [stepElements, setStepElements] = React.useState<any>();

	const Step = ({active = false}) => {
		return (
			<View style={[styles.step, active && styles[`active`]]} />
		);
	};

	React.useEffect(() => {
			for(let i = 0; i < totalSteps; i++) {
				steps.push(
					<Step key={i} active={(currentStep === i + 1) ? true : false} />
				)
			}
		setStepElements(steps);
	}, [currentStep])

	return (
		<View style={tw`flex flex-1 flex-row justify-center items-center`}>
			{stepElements}
		</View>
	);
};

const StepWizard = ({loop = false, stepIndicator = true, children}: Props) => {

	const totalSteps = children.length
	const [currentStep, setCurrentStep] = React.useState(1)
	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

	function onSwipeLeft(){
		console.log('SWIPE_LEFT')
		if(currentStep === totalSteps) {
			if(!loop) return
			setCurrentStep(1)
		} else {
			setCurrentStep(currentStep + 1)
		}
	}

	function onSwipeRight(){
		console.log('SWIPE_RIGHT')
		if(currentStep === 1) {
			if(!loop) return
			setCurrentStep(totalSteps)
		} else {
			setCurrentStep(currentStep - 1)
		}
	}

	return (
		<>
			<View style={[tw`flex flex-1 flex-col justify-center items-center text-black`]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
				{children.map((child: any, index: number) => <View key={index} style={{display: (currentStep === index + 1) ? 'flex' : 'none'}}>{child}</View> )}
			</View>
			{stepIndicator && <StepIndicator totalSteps={totalSteps} currentStep={currentStep} />}
		</>
	)
};

const styles = StyleSheet.create({
  step: {
		height: 5,
		width: 25,
		marginVertical: 3,
		marginHorizontal: 3,
		backgroundColor: '#EBEBED',
		borderRadius: 56,
  },
  active: {
		backgroundColor: '#31344A',
  },
});

export {Step, StepWizard};