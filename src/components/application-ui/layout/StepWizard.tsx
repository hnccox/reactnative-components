import * as React from 'react';
import {
	StyleSheet,
  View,
	Text
} from 'react-native';
import { useSwipe } from '../../../hooks/useSwipe'

import tw from 'twrnc'

// import StepIndicator from './StepIndicator';

type Props = {
  loop?: boolean;
	direction?: string;
	afterComplete?: boolean;
	step?: number;
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
		<View style={tw`flex flex-row justify-center items-center`}>
			{stepElements}
		</View>
	);
};

const StepWizard = ({loop = false, direction = 'both', afterComplete = false, step = 1, stepIndicator = true, children}: Props) => {

	const totalSteps = children.length
	const [wizardComplete, setWizardComplete] = React.useState(false)
	const [currentStep, setCurrentStep] = React.useState(step)
	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

	React.useEffect(() => {
		if(currentStep === totalSteps && !wizardComplete) {
			setWizardComplete(true)
		}
	}, [currentStep])

	function onSwipeLeft(){	
		if(currentStep === totalSteps) {
			if(loop && (direction === 'both' || direction === 'forward')) setCurrentStep(1)
			return
		} else {
			setCurrentStep(currentStep + 1)
		}
	}

	function onSwipeRight(){
		if(currentStep === 1) {
			if(loop && (direction === 'both' || direction === 'backward')) {
				if(afterComplete && !wizardComplete) return
				setCurrentStep(totalSteps)
			}
		} else {
			setCurrentStep(currentStep - 1)
		}
	}

	return (
		<View style={[tw`h-full flex flex-row items-center justify-center`]}>
			<View style={[tw`absolute inset-10`]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
				{children.map((child: any, index: number) => <View key={index} style={[{display: (currentStep === index + 1) ? 'flex' : 'none'}, tw`items-center justify-center self-stretch`]}>{child}</View> )}
			</View>
			{stepIndicator && <StepIndicator style={[tw`absolute bottom-10`]} totalSteps={totalSteps} currentStep={currentStep} />}
		</View>
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