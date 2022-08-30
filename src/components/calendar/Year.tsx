import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const styles = StyleSheet.create({
  button: {},
  h1: {
    display: 'flex',
    fontSize: 32,
    marginTop: 10.72,
    marginBottom: 10.72,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  div: {
    display: 'flex',
  },
  flex: {
    display: 'flex',
  },
  'flex-row': {
    flexDirection: 'row',
  },
  'flex-col': {
    flexDirection: 'column',
  },
  hidden: {
    display: 'none',
  },
  'md:block': {
    display: 'flex',
  },
  'h-full': {
    height: '100%',
  },
  'w-full': {
    width: '100%',
  },
  relative: {
    position: 'relative',
  },
  'z-20': {
    zIndex: 20,
  },
  'items-center': {
    alignItems: 'center',
  },
  'md:items-stretch': {
    alignItems: 'stretch',
  },
  'items-stretch': {
    alignItems: 'stretch',
  },
  'justify-between': {
    justifyContent: 'space-between',
  },
  'justify-center': {
    justifyContent: 'center',
  },
  border: {
    borderWidth: 1,
  },
  'border-b': {
    borderBottomWidth: 1,
  },
  'border-t': {
    borderTopWidth: 1,
  },
  'border-r-0': {
    borderRightWidth: 0,
  },
  'border-l-0': {
    borderLeftWidth: 0,
  },
  'border-gray-200': {
    borderColor: '#E5E7EB',
  },
  'border-gray-300': {
    borderColor: '#D1D5DB',
  },
  'bg-white': {
    backgroundColor: '#ffffff',
  },
  'overflow-auto': {
    overflow: 'scroll',
  },
  'py-2': {
    paddingTop: 8,
    paddingBottom: 8,
  },
  'py-4': {
    paddingTop: 16,
    paddingBottom: 16,
  },
  'px-3.5': {
    paddingLeft: 14,
    paddingRight: 14,
  },
  'px-6': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  'pl-3': {
    paddingLeft: 12,
  },
  'pl-4': {
    paddingLeft: 16,
  },
  'pr-3': {
    paddingRight: 12,
  },
  'pr-4': {
    paddingRight: 16,
  },
  'text-center': {
    textAlign: 'center',
  },
  'text-sm': {
    fontSize: 14,
    lineHeight: 20,
  },
  'text-lg': {
    fontSize: 18,
    lineHeight: 28,
  },
  'text-gray-300': {
    color: '#D1D5DB',
  },
  'text-gray-400': {
    color: '#9CA3AF',
  },
  'text-gray-500': {
    color: '#6B7280',
  },
  'text-gray-700': {
    color: '#374151',
  },
  'text-gray-900': {
    color: '#111827',
  },
  'font-semibold': {
    fontWeight: '600',
  },
  'font-medium': {
    fontWeight: '500',
  },
  'leading-6': {
    lineHeight: 24,
  },
  'rounded-md': {
    borderRadius: 6,
  },
  'rounded-l-md': {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  'rounded-r-md': {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  'shadow-sm': {
    shadowColor: 'rgba(0, 0, 0, 0.05)',
    shadowOffset: {width: 1, height: 0},
  },
  'mx-auto': {
    marginHorizontal: 'auto',
  },
});

type Props = {
  visibleDate: Date;
  selectedDate?: Date;
  events?: string[];
  isToday?: () => {};
};

const Year = ({visibleDate}: Props) => {
  let year = visibleDate.getFullYear();
  let months = [
    <View>
      <Text>Jan</Text>
    </View>,
    <Text>Feb</Text>,
    <Text>Mrt</Text>,
    <Text>Apr</Text>,
    <Text>May</Text>,
    <Text>Jun</Text>,
    <Text>Jul</Text>,
    <Text>Aug</Text>,
    <Text>Sep</Text>,
    <Text>Oct</Text>,
    <Text>Nov</Text>,
    <Text>Dec</Text>,
  ];

  const section = months;

  return (
    <View style={[styles['bg-white'], styles['overflow-auto']]}>
      <View style={[styles['mx-auto']]}>{section}</View>
    </View>
  );
};

export default Year;
