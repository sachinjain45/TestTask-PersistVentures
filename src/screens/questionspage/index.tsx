import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../../components';
import {RootState} from '../../redux/store';
import {setTabs, setSelected} from '../../redux/reducers/questionsSlice';
import {styles} from './style';
import {QuestionsPageProps} from './types';
import {premiumQuestions, QUESTION_CATEGORIES, TABS} from './questionspageData';

export const Questionspage = ({onNext, onBack}: QuestionsPageProps) => {
  const dispatch = useDispatch();
  const questionsState = useSelector((state: RootState) => state.questions);

  const tabs = questionsState.tabs;
  const selected = questionsState.selected;

  const selectedInCurrentCategories = selected;

  const isPremium = (q: string) => premiumQuestions.includes(q);

  const allQuestions = Array.from(
    new Set(QUESTION_CATEGORIES.flatMap(cat => cat.questions)),
  );

  const handleTabPress = (i: number) => {
    if (tabs.includes(i)) {
      const newTabs = tabs.filter(idx => idx !== i);
      const questionsToKeep = new Set(
        newTabs.flatMap(idx => QUESTION_CATEGORIES[idx].questions),
      );
      const newSelected = selected.filter(
        q =>
          questionsToKeep.has(q) ||
          !QUESTION_CATEGORIES[i].questions.includes(q),
      );
      dispatch(setTabs(newTabs));
      dispatch(setSelected(newSelected));
    } else {
      const newTabs = [...tabs, i];
      const newSelectedTabQuestions = Array.from(
        new Set(newTabs.flatMap(idx => QUESTION_CATEGORIES[idx].questions)),
      );
      const toAdd = newSelectedTabQuestions.filter(q => !selected.includes(q));
      dispatch(setTabs(newTabs));
      dispatch(setSelected([...selected, ...toAdd]));
    }
  };

  const handleSuggestedPress = () => {
    const toAdd = QUESTION_CATEGORIES[0].questions.filter(
      q => !selected.includes(q),
    );
    dispatch(setSelected([...selected, ...toAdd]));
    if (!tabs.includes(0)) {
      dispatch(setTabs([...tabs, 0]));
    }
  };

  const handleRemoveSelected = (q: string) => {
    dispatch(setSelected(selected.filter(item => item !== q)));
  };

  const handleAddAvailable = (q: string) => {
    if (!selected.includes(q)) {
      dispatch(setSelected([...selected, q]));
    }
  };

  const nextDisabled = selected.length < 20;

  return (
    <Container
      currentStep={2}
      totalSteps={5}
      goNext={onNext}
      goBack={onBack}
      nextDisabled={nextDisabled}>
      <View style={styles.container}>
        <Text style={styles.header}>Questions</Text>
        <Text style={styles.subheader}>
          Select 20-30 questions. Or, start with a pre-made set.
        </Text>
        <View style={styles.tabs}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryRow}>
            {TABS.map((t, i) => (
              <TouchableOpacity
                key={t}
                style={[
                  styles.tab,
                  tabs.includes(i) && styles.tabActive,
                  styles.categoryButton,
                ]}
                onPress={() => handleTabPress(i)}>
                <Text
                  style={[
                    styles.tabText,
                    tabs.includes(i) && styles.tabTextActive,
                  ]}>
                  {t}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
        <View style={styles.columns}>
          <View style={styles.column}>
            <Text style={styles.colHeader}>YOUR EVENT</Text>
            <ScrollView
              style={styles.scrollCol}
              contentContainerStyle={[
                styles.emptyEventContainer,
                selectedInCurrentCategories.length > 0 && {
                  justifyContent: 'flex-start',
                },
              ]}>
              {selectedInCurrentCategories.length === 0 ? (
                <View style={styles.emptyEventInner}>
                  <Text style={styles.emptyEventText}>
                    Select questions from the right to start building your
                    event.
                  </Text>
                  <Text style={styles.emptyEventOr}>-- or --</Text>
                  <View style={styles.suggestedRow}>
                    <Text style={styles.suggestedButtonText}>Start with</Text>
                    <TouchableOpacity
                      style={[
                        styles.suggestedButton,
                        QUESTION_CATEGORIES[0].questions.every(q =>
                          selected.includes(q),
                        ) && styles.suggestedButtonDisabled,
                      ]}
                      activeOpacity={0.7}
                      disabled={QUESTION_CATEGORIES[0].questions.every(q =>
                        selected.includes(q),
                      )}
                      onPress={handleSuggestedPress}>
                      <Text style={styles.suggestedButtonText}> Suggested</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ) : (
                selectedInCurrentCategories.map((q, idx) => (
                  <TouchableOpacity
                    key={q}
                    style={styles.eventCard}
                    onPress={() => handleRemoveSelected(q)}>
                    <Text style={styles.cardText}>
                      {idx + 1}. {q}
                    </Text>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
          <View style={styles.column}>
            <Text style={styles.colHeader}>AVAILABLE QUESTIONS</Text>
            <ScrollView
              style={styles.scrollCol}
              contentContainerStyle={{
                flexDirection: 'row',
                flexWrap: 'wrap',
                paddingBottom: 16,
              }}>
              {allQuestions.map(q => (
                <TouchableOpacity
                  key={q}
                  style={[
                    styles.card,
                    styles.cardAvailable,
                    selected.includes(q) && styles.cardSelected,
                  ]}
                  disabled={selected.includes(q)}
                  onPress={() => handleAddAvailable(q)}
                  activeOpacity={0.7}>
                  <Text style={styles.cardText}>{q}</Text>
                  {isPremium(q) && (
                    <View style={styles.premiumBadge}>
                      <Text style={styles.premiumText}>PREMIUM</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </Container>
  );
};
