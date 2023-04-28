import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { StoryFn } from '@storybook/react';

import { H1, H2, H3, H4, H5, H6 } from './HTMLElements';
import {
	B,
	Strong,
	I,
	EM,
	Mark,
	Small,
	Del,
	Ins,
	Sub,
	Sup,
} from './HTMLElements';
import { Table, THead, TBody, TFoot, TR, TD, TH } from './HTMLElements';

const styles = StyleSheet.create({
	position: {
		position: 'absolute',
		top: 20,
		left: 20,
		alignSelf: 'stretch',
	},
	'w-full': {
		width: '100%',
	},
	'w-1/2': {
		width: '50%',
	},
});

export default {
	title: '',
	component: '',
};

export const Headers: StoryFn<typeof View> = () => (
	<View style={[styles.position, styles['w-full']]}>
		<H1>Header 1</H1>
		<H2>Header 2</H2>
		<H3>Header 3</H3>
		<H4>Header 4</H4>
		<H5>Header 5</H5>
		<H6>Header 6</H6>
	</View>
);

export const Tables: StoryFn<typeof View> = () => (
	<View style={[styles.position, styles['w-full']]}>
		<Table>
			<THead>
				<TR>
					<TH>Table header</TH>
				</TR>
			</THead>
			<TBody>
				<TR>
					<TD>Cell 1,1</TD>
					<TD>Cell 1,2</TD>
					<TD>Cell 1,3</TD>
				</TR>
				<TR>
					<TD>Cell 2,1</TD>
					<TD>Cell 2,2</TD>
					<TD>Cell 2,3</TD>
				</TR>
				<TR>
					<TD>Cell 3,1</TD>
					<TD>Cell 3,2</TD>
					<TD>Cell 3,3</TD>
				</TR>
			</TBody>
			<TFoot>
				<TR>
					<TD>Table footer</TD>
				</TR>
			</TFoot>
		</Table>
	</View>
);

export const Typoghraphy: StoryFn<typeof View> = () => (
	<View style={[styles.position]}>
		<B>Bold</B>
		<Strong>Important</Strong>
		<I>Italic</I>
		<EM>Emphasized</EM>
		<Mark>Marked</Mark>
		<Small>Smaller</Small>
		<Del>Deleted</Del>
		<Ins>Inserted</Ins>
		<Text>
			Sub
			<Sub>script</Sub>
		</Text>
		<Text>
			Super
			<Sup>script</Sup>
		</Text>
	</View>
);
