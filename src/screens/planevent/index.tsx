import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity, Platform} from 'react-native';
import DateTimePicker, {
  Event as DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../../components';
import {RootState} from '../../redux/store';
import {setDate, setSelected} from '../../redux/reducers/planeventSlice';
import {styles} from './style';
import {sections, whosComingOptions} from './planeventData';
import {CalendarIcon} from '../../assets/svg/CalendarIcon';

export const Planevent = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const planevent = useSelector((state: RootState) => state.planevent);

  const date = new Date(planevent.date);
  const selected = planevent.selected;

  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date,
  ) => {
    setShowPicker(Platform.OS === 'ios');
    if (selectedDate) dispatch(setDate(selectedDate.toISOString()));
  };

  const isPlatonic = selected[0] === 'platonic';

  const allSelected =
    Object.keys(selected).length === sections.length ||
    Object.keys(selected).length === sections.length - 1;
  const dateValid = !!planevent.date;
  const nextDisabled = !(allSelected && dateValid);

  return (
    <Container
      currentStep={1}
      totalSteps={5}
      goNext={onNext}
      goBack={onBack}
      nextDisabled={nextDisabled}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.header}>Plan your event</Text>
        <Text style={styles.subheader}>
          A little planning goes a long way towards making sure everybody has a
          good experience and a great match.
        </Text>
        {sections.map((section, idx) => {
          if (
            section.title === 'How should we handle an imbalance?' &&
            selected[2] !== 'age'
          ) {
            return null;
          }
          if (idx === 1) {
            const options = isPlatonic
              ? whosComingOptions.platonic
              : whosComingOptions.default;
            return (
              <View key={section.title} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                {options.map(option => (
                  <TouchableOpacity
                    key={option.key}
                    style={[
                      styles.option,
                      selected[idx] === option.key && styles.optionSelected,
                    ]}
                    onPress={() =>
                      dispatch(
                        setSelected({
                          ...selected,
                          [idx]: option.key ?? '',
                        }),
                      )
                    }
                    activeOpacity={0.8}>
                    <Text style={styles.optionLabel}>{option.label}</Text>
                    {option.desc && (
                      <Text style={styles.optionDesc}>{option.desc}</Text>
                    )}
                  </TouchableOpacity>
                ))}
                {Array.from(
                  new Set(
                    options
                      .filter(option => option.note)
                      .map(option => option.note),
                  ),
                ).map(
                  (note, noteIdx) =>
                    note && (
                      <Text key={noteIdx} style={styles.optionDesc}>
                        {note}
                      </Text>
                    ),
                )}
              </View>
            );
          }
          return (
            <View key={section.title} style={styles.section}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.options.map(option => (
                <TouchableOpacity
                  key={option.key}
                  style={[
                    styles.option,
                    selected[idx] === option.key && styles.optionSelected,
                  ]}
                  onPress={() =>
                    dispatch(
                      setSelected({
                        ...selected,
                        [idx]: option.key ?? '',
                      }),
                    )
                  }
                  activeOpacity={0.8}>
                  <Text style={styles.optionLabel}>{option.label}</Text>
                  <Text style={styles.optionDesc}>{option.desc}</Text>
                  {option.premium && (
                    <View style={styles.premiumTag}>
                      <Text style={styles.premiumTagText}>PREMIUM</Text>
                    </View>
                  )}
                </TouchableOpacity>
              ))}
              {Array.from(
                new Set(
                  section.options
                    .filter(option => option.note)
                    .map(option => option.note),
                ),
              ).map((note, noteIdx) => (
                <Text key={noteIdx} style={styles.optionDesc}>
                  {note}
                </Text>
              ))}
            </View>
          );
        })}

        <View style={styles.dateSection}>
          <Text style={styles.sectionTitle}>When will it happen?</Text>
          <TouchableOpacity
            style={styles.dateInput}
            onPress={() => setShowPicker(true)}
            activeOpacity={0.8}>
            <Text style={styles.dateText}>
              {date.getFullYear()}/
              {String(date.getMonth() + 1).padStart(2, '0')}/
              {String(date.getDate()).padStart(2, '0')}
            </Text>
            <View style={styles.dateIconWrapper}>
              <CalendarIcon width={22} height={22} />
            </View>
          </TouchableOpacity>
          {showPicker && (
            <DateTimePicker
              value={date}
              mode="date"
              display="default"
              onChange={handleDateChange as any}
              minimumDate={new Date()}
            />
          )}
        </View>
      </ScrollView>
    </Container>
  );
};
