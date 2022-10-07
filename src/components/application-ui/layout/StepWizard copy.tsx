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


class StepWizard extends React.Component {
	constructor(props: Props) {
		super(props);
		this.state = {
			currentStep: 0,
		}
	}
	// 		this.totalSteps = children.length
	// const [currentStep, setCurrentStep] = React.useState(step)
	// const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

		onSwipeLeft(){	
		if(this.state.currentStep === totalSteps) {
			if(!loop) return
			setCurrentStep(1)
		} else {
			setCurrentStep(currentStep + 1)
		}
	}

	onSwipeRight(){
		if(currentStep === 1) {
			if(!loop) return
			setCurrentStep(totalSteps)
		} else {
			setCurrentStep(currentStep - 1)
		}
	}

	render() {
			return (
			<View style={[tw`h-full flex flex-row items-center justify-center`]}>
				<View style={[tw`absolute inset-10`]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
					{children.map((child: any, index: number) => <View key={index} style={[{display: (currentStep === index + 1) ? 'flex' : 'none'}, tw`items-center justify-center self-stretch`]}>{child}</View> )}
				</View>
				{stepIndicator && <StepIndicator style={[tw`absolute bottom-10`]} totalSteps={totalSteps} currentStep={currentStep} />}
			</View>
	)
	}
}

// const StepWizard = ({loop = false, step = 1, stepIndicator = true, children}: Props) => {

// 	const totalSteps = children.length
// 	const [currentStep, setCurrentStep] = React.useState(step)
// 	const { onTouchStart, onTouchEnd } = useSwipe(onSwipeLeft, onSwipeRight, 6)

// 	function onSwipeLeft(){	
// 		if(currentStep === totalSteps) {
// 			if(!loop) return
// 			setCurrentStep(1)
// 		} else {
// 			setCurrentStep(currentStep + 1)
// 		}
// 	}

// 	function onSwipeRight(){
// 		if(currentStep === 1) {
// 			if(!loop) return
// 			setCurrentStep(totalSteps)
// 		} else {
// 			setCurrentStep(currentStep - 1)
// 		}
// 	}

// 	return (
// 			<View style={[tw`h-full flex flex-row items-center justify-center`]}>
// 				<View style={[tw`absolute inset-10`]} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
// 					{children.map((child: any, index: number) => <View key={index} style={[{display: (currentStep === index + 1) ? 'flex' : 'none'}, tw`items-center justify-center self-stretch`]}>{child}</View> )}
// 				</View>
// 				{stepIndicator && <StepIndicator style={[tw`absolute bottom-10`]} totalSteps={totalSteps} currentStep={currentStep} />}
// 			</View>
// 	)
// };

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