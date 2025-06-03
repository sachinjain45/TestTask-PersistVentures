import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';

import {
  Eventbrandingpage,
  MatchboxPage,
  Planevent,
  Pricingpage,
  Questionspage,
  Reviewpage,
} from './src/screens';
import {store} from './src/redux/store';

const App = () => {
  const [step, setStep] = useState(1);
  const [showMatchbox, setShowMatchbox] = useState(true);

  const goNext = () => setStep(s => Math.min(s + 1, 5));
  const goBack = () => {
    if (step === 1) {
      setShowMatchbox(true);
    } else {
      setStep(s => Math.max(s - 1, 1));
    }
  };

  const renderScreen = () => {
    switch (step) {
      case 1:
        return <Planevent onNext={goNext} onBack={goBack} />;
      case 2:
        return <Questionspage onNext={goNext} onBack={goBack} />;
      case 3:
        return <Eventbrandingpage onNext={goNext} onBack={goBack} />;
      case 4:
        return <Pricingpage onNext={goNext} onBack={goBack} />;
      case 5:
        return <Reviewpage onBack={goBack} />;
      default:
        return <MatchboxPage onGetStarted={() => setShowMatchbox(false)} />;
    }
  };

  if (showMatchbox) {
    return <MatchboxPage onGetStarted={() => setShowMatchbox(false)} />;
  }

  return (
    <Provider store={store}>
      <View style={styles.container}>{renderScreen()}</View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#101311',
  },
});

export default App;
