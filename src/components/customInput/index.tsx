import React from 'react';
import {View, TextInput} from 'react-native';

import {styles} from './style';
import {colors} from '../../theme';
import {CustomInputProps} from './types';

export const CustomInput = ({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  touched,
  error,
  inputStyle,
  wrapperStyle,
  ...rest
}: CustomInputProps) => (
  <View style={[wrapperStyle]}>
    <TextInput
      style={[styles.input, inputStyle]}
      value={value}
      onChangeText={onChangeText}
      onBlur={onBlur}
      placeholder={placeholder}
      placeholderTextColor={colors.grayMedium}
      {...rest}
    />
  </View>
);
