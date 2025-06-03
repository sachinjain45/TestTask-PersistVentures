import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import {styles} from './style';
import {RightArroewIcon} from '../../assets/svg/RightArroewIcon';

export const MatchboxPage = ({onGetStarted}: {onGetStarted: () => void}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>MATCHBOX</Text>
      <Text style={styles.title}>Matching{'\n'}at your next</Text>
      <Text style={styles.subtitle}>
        Matchbox is the matching algorithm behind your next great event.
      </Text>
      <TouchableOpacity style={styles.getStartedButton} onPress={onGetStarted}>
        <View style={styles.getStartedButtonView}>
          <Text style={styles.getStartedText}>GET STARTED</Text>
          <RightArroewIcon />
        </View>
      </TouchableOpacity>
    </View>
  );
};
