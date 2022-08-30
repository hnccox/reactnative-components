import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const em = 16;
const smaller = 0.8125 * em;
// const rem = 16;

const styles = StyleSheet.create({
  b: {
    fontWeight: 'bold',
  },
  strong: {
    fontWeight: 'bold',
  },
  i: {
    fontStyle: 'italic',
  },
  em: {
    fontStyle: 'italic',
  },
  mark: {
    backgroundColor: 'yellow',
    color: 'black',
  },
  small: {
    fontSize: smaller,
  },
  del: {
    textDecorationLine: 'line-through',
  },
  ins: {
    textDecorationLine: 'underline',
  },
  sub: {
    textAlignVertical: 'bottom',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: smaller,
  },
  sup: {
    textAlignVertical: 'top',
    fontSize: smaller,
  },
  button: {},
  div: {
    display: 'flex',
    flexDirection: 'column',
  },
  h1: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 2 * em,
    marginTop: 0.67 * em,
    marginBottom: 0.67 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  h2: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 1.5 * em,
    marginTop: 0.83 * em,
    marginBottom: 0.83 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  h3: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 1.17 * em,
    marginTop: 1 * em,
    marginBottom: 1 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  h4: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 1.33 * em,
    marginBottom: 1.33 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  h5: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 0.83 * em,
    marginTop: 1.67 * em,
    marginBottom: 1.67 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  h6: {
    display: 'flex',
    flexDirection: 'column',
    fontSize: 0.67 * em,
    marginTop: 2.33 * em,
    marginBottom: 2.33 * em,
    marginLeft: 0,
    marginRight: 0,
    fontWeight: 'bold',
  },
  table: {
    display: 'flex',
    flexDirection: 'column',
  },
  thead: {
    borderColor: 'inherit',
  },
  tbody: {
    borderColor: 'inherit',
  },
  tfoot: {
    borderColor: 'inherit',
  },
  th: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  tr: {
    display: 'flex',
    flexDirection: 'row',
  },
  td: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    textAlignVertical: 'inherit',
  },
});

export const B = (props: any) => {
  return <Text style={[styles.b]}>{props.children}</Text>;
};

export const Strong = (props: any) => {
  return <Text style={[styles.strong]}>{props.children}</Text>;
};

export const I = (props: any) => {
  return <Text style={[styles.i]}>{props.children}</Text>;
};

export const EM = (props: any) => {
  return <Text style={[styles.em]}>{props.children}</Text>;
};

export const Mark = (props: any) => {
  return <Text style={[styles.mark]}>{props.children}</Text>;
};

export const Small = (props: any) => {
  return <Text style={[styles.small]}>{props.children}</Text>;
};

export const Del = (props: any) => {
  return <Text style={[styles.del]}>{props.children}</Text>;
};

export const Ins = (props: any) => {
  return <Text style={[styles.ins]}>{props.children}</Text>;
};

export const Sub = (props: any) => {
  return <Text style={[styles.sub]}>{props.children}</Text>;
};

export const Sup = (props: any) => {
  return <Text style={[styles.sup]}>{props.children}</Text>;
};

// const Button = (props: any) => {
//   return <View style={[styles.button, props.style]}>{props.children}</View>;
// };

export const Div = (props: any) => {
  return <View style={props.style}>{props.children}</View>;
};

export const Section = (props: any) => {
  return <View style={props.style}>{props.children}</View>;
};

export const H1 = (props: any) => {
  return <Text style={[styles.h1, props.style]}>{props.children}</Text>;
};

export const H2 = (props: any) => {
  return <Text style={[styles.h2]}>{props.children}</Text>;
};

export const H3 = (props: any) => {
  return <Text style={[styles.h3]}>{props.children}</Text>;
};

export const H4 = (props: any) => {
  return <Text style={[styles.h4]}>{props.children}</Text>;
};

export const H5 = (props: any) => {
  return <Text style={[styles.h5]}>{props.children}</Text>;
};

export const H6 = (props: any) => {
  return <Text style={[styles.h6]}>{props.children}</Text>;
};

export const Table = (props: any) => {
  return <View style={[styles.table]}>{props.children}</View>;
};

export const THead = (props: any) => {
  return <View style={[styles.thead]}>{props.children}</View>;
};

export const TBody = (props: any) => {
  return <View style={[styles.tbody]}>{props.children}</View>;
};

export const TFoot = (props: any) => {
  return <View style={[styles.tfoot]}>{props.children}</View>;
};

export const TH = (props: any) => {
  return <View style={[styles.th]}>{props.children}</View>;
};

export const TR = (props: any) => {
  return <View style={[styles.tr]}>{props.children}</View>;
};

export const TD = (props: any) => {
  return <View style={[styles.td]}>{props.children}</View>;
};
