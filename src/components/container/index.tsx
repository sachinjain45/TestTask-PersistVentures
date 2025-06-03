import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';
import {colors} from '../../theme';
import {ContainerProps} from './types';

export const Container = ({
  currentStep = 1,
  totalSteps = 5,
  goBack,
  goNext,
  nextDisabled = false,
  backDisabled = false,
  children,
  btnTitle = 'NEXT',
}: ContainerProps) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.container}>
        {[...Array(totalSteps)].map((_, idx) => (
          <View
            key={idx}
            style={[
              styles.step,
              {
                backgroundColor:
                  idx < currentStep ? colors.lightGray : colors.mediumGray,
              },
            ]}
          />
        ))}
      </View>
      <View style={{flex: 1}}>{children}</View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={[styles.nextButton, backDisabled && styles.nextButtonDisabled]}
          onPress={goBack}>
          <Text style={styles.nextButtonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.nextButton, nextDisabled && styles.nextButtonDisabled]}
          onPress={goNext}
          disabled={nextDisabled}>
          <Text
            style={[
              styles.nextButtonText,
              nextDisabled && styles.nextButtonTextDisabled,
            ]}>
            {btnTitle || 'NEXT'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
