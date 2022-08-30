import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import CalendarDayView from './Day';
import CalendarWeekView from './Week';
import CalendarMonthView from './Month';
import CalendarYearView from './Year';

type Props = {
  defaultView?: string;
  views?: string[];
};

const Calendar = ({defaultView}: Props) => {
  let date = new Date();
  let visibleDate = date;

  let view = defaultView;
  let calendarView;
  switch (view) {
    case 'day':
      calendarView = <CalendarDayView key={'day'}/>;
      break;
    case 'week':
      calendarView = <CalendarWeekView key={'week'}/>;
      break;
    case 'month':
      calendarView = <CalendarMonthView key={'month'}/>;
      break;
    case 'year':
      calendarView = <CalendarYearView key={'year'} visibleDate={visibleDate} />;
      break;
    default:
      calendarView = <CalendarYearView visibleDate={visibleDate} />;
  }

  return (
    <View
      style={[
        styles.flex,
        styles['flex-col'],
        styles['h-full'],
        styles['w-full'],
      ]}>
      <View
        style={[
          styles.relative,
          styles['z-20'],
          styles.flex,
          styles['flex-row'],
          styles['items-center'],
          styles['justify-between'],
          styles['border-b'],
          styles['border-gray-200'],
          styles['py-4'],
          styles['px-6'],
        ]}>
        <View style={styles.div}>
          <Text
            style={[
              styles['text-lg'],
              styles['font-semibold'],
              styles['leading-6'],
              styles['text-gray-900'],
            ]}>
            June 22, 2022
          </Text>
          <Text style={[styles['text-sm'], styles['text-gray-500']]}>
            Monday
          </Text>
        </View>
        <View style={[styles.flex, styles['items-center']]}>
          <View
            style={[
              styles.flex,
              styles['flex-row'],
              styles['items-center'],
              styles['rounded-md'],
              styles['shadow-sm'],
              styles['md:items-stretch'],
            ]}>
            <TouchableOpacity
              style={[
                styles.flex,
                styles['flex-row'],
                styles['items-center'],
                styles['justify-center'],
                styles['rounded-l-md'],
                styles.border,
                styles['border-r-0'],
                styles['border-gray-300'],
                styles['bg-white'],
                styles['py-2'],
                styles['pl-3'],
                styles['pr-4'],
              ]}>
              <Text style={[styles['text-gray-400']]}>Previous</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.hidden,
                styles['border-t'],
                styles['border-b'],
                styles['border-gray-300'],
                styles['bg-white'],
                styles['px-3.5'],
              ]}>
              <Text
                style={[
                  styles['text-sm'],
                  styles['font-medium'],
                  styles['text-gray-700'],
                ]}>
                Today
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.flex,
                styles['flex-row'],
                styles['items-center'],
                styles['justify-center'],
                styles['rounded-r-md'],
                styles.border,
                styles['border-l-0'],
                styles['border-gray-300'],
                styles['bg-white'],
                styles['py-2'],
                styles['pl-4'],
                styles['pr-3'],
              ]}>
              <Text style={[styles['text-gray-400']]}>Next</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.hidden]} />
          <View style={[styles.relative]} />
        </View>
      </View>
      {calendarView}
    </View>
  );
};

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
});

export default Calendar;
