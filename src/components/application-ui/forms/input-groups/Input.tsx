import * as React from 'react';
import {View} from 'react-native';

type Props = {
	type?: string;
}

class Input extends React.Component<any, any> {
	constructor(props: Props) {
		super(props)
	}

	render() {
		return (
			<View>Hello</View>
		)
	}
}

export default Input;