import React, { useState, useEffect } from 'react';
import {
	View,
} from 'react-native';
import tw from 'twrnc';

type Props = {
	fullscreen?: boolean;
	header?: React.ReactNode;
	body?: React.ReactNode;
	footer?: React.ReactNode;
	children?: React.ReactNode;
};

const WellComponent = ({ fullscreen = true, header, body, footer, children}: Props) => {

  return (
		<View style={[tw.style('flex flex-col items-stretch w-full h-full my-5 overflow-hidden rounded-lg shadow-inner bg-gray-50 divide-y divide-gray-200')]}>
			{ !fullscreen &&
				<View style={[tw.style('px-4 py-5 sm:px-6 shrink')]}>
					{/* <!-- Content goes here --> */}
					{/* <!-- We use less vertical padding on card headers on desktop than on body sections --> */}
					{header}
				</View>
			}
			<View style={[tw.style('px-4 py-5 sm:p-6 grow')]}>
				{/* <!-- Content goes here --> */}
				{body}
				{/* <!-- Content goes here --> */}
				{children}
			</View>
			{ !fullscreen &&
				<View style={[tw.style('px-4 py-4 sm:px-6 shrink')]}>
					{/* <!-- Content goes here --> */ }
					{/* <!-- We use less vertical padding on card footers at all sizes than on headers or body sections --> */}
					{footer}
				</View>
			}
		</View>
  );
};

export default WellComponent;