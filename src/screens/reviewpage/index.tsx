import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';

import {Container} from '../../components';
import {RootState} from '../../redux/store';
import {ReviewFormData} from './types';
import {styles} from './style';
import {colors} from '../../theme';


function useReviewForm(): [
  ReviewFormData,
  (field: keyof ReviewFormData, value: string) => void,
] {
  const [form, setForm] = React.useState<ReviewFormData>({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'US +1',
    phone: '',
  });

  const setField = (field: keyof ReviewFormData, value: string) => {
    setForm(prev => ({...prev, [field]: value}));
  };

  return [form, setField];
}

export const Reviewpage = ({onBack}: {onBack: () => void}) => {
  const [form, setFormField] = useReviewForm();
  const brandingFields = useSelector((state: RootState) => state.eventBranding);
  const planevent = useSelector((state: RootState) => state.planevent);
  const questions = useSelector((state: RootState) => state.questions);
  const pricing = useSelector((state: RootState) => state.pricing);

  const eventTitle = brandingFields.eventTitle || 'Untitled Event';
  const eventLink = brandingFields.eventLink || 'united-event';
  const hostName = brandingFields.hostName || '';
  const numQuestions = questions.selected.length;
  const maxGuests = pricing.guests;
  const matchingType =
    planevent.selected && planevent.selected[0] === 'platonic'
      ? 'platonically'
      : 'romantically';
  const tier = pricing.tier;
  const chargeGuests = pricing.chargeGuests;
  const totalPrice =
    95 + maxGuests * (tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0);
  const perGuest =
    (95 + maxGuests * (tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0)) /
    maxGuests;

  const isFormComplete =
    !!form.firstName && !!form.lastName && !!form.email && !!form.phone;

  return (
    <Container
      currentStep={5}
      totalSteps={5}
      goBack={onBack}
      nextDisabled={!isFormComplete}
      btnTitle="Pay Now">
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.container}>
          <Text style={styles.eventTitle}>Review</Text>
          <Text style={styles.eventLink}>
            match.box/
            <Text style={styles.eventLinkBold}>{eventLink}</Text>
          </Text>
          <View style={styles.summarySection}>
            <Text style={styles.summaryLabel}>SUMMARY</Text>
            <Text style={styles.summaryItem}>
              <Text style={styles.summaryBold}>{eventTitle}</Text>
              {hostName ? (
                <Text style={styles.summaryItem}>
                  {' '}
                  (hosted by <Text style={styles.summaryBold}>{hostName}</Text>)
                </Text>
              ) : null}
            </Text>
            <Text style={styles.summaryItem}>
              <Text style={styles.summaryBold}>{numQuestions}</Text> questions
            </Text>
            <Text style={styles.summaryItem}>
              Up to <Text style={styles.summaryBold}>{maxGuests}</Text>{' '}
              participants
            </Text>
            <Text style={styles.summaryItem}>
              Matching <Text style={styles.summaryAccent}>{matchingType}</Text>
            </Text>
            <Text style={styles.summaryItem}>
              Unlocked Matchbox's{' '}
              <Text style={styles.summaryUnderline}>
                {tier === 'premium'
                  ? 'full feature set'
                  : tier === 'elite'
                  ? 'elite features'
                  : 'basic features'}
              </Text>
            </Text>
            {chargeGuests === 'yes' && (
              <Text style={styles.summaryItem}>
                Guests will be charged for tickets.
              </Text>
            )}
          </View>
          <View style={styles.whatsNextSection}>
            <Text style={styles.whatsNextLabel}>WHAT’S NEXT?</Text>
            <Text style={styles.whatsNextItem}>
              1. Your event link will be active right away.
            </Text>
            <Text style={styles.whatsNextItem}>
              2. You’ll get an admin link, where you can monitor signups and run
              the algorithm.
            </Text>
            <Text style={styles.whatsNextItem}>
              3. You’ll get all of this in an email.
            </Text>
          </View>
          {/* Form */}
          <View style={styles.formRow}>
            <View style={styles.formCol}>
              <Text style={styles.inputLabel}>First name</Text>
              <TextInput
                style={styles.input}
                value={form.firstName}
                onChangeText={v => setFormField('firstName', v)}
                placeholder="First name"
                placeholderTextColor={colors.grayMedium}
              />
            </View>
            <View style={styles.formCol}>
              <Text style={styles.inputLabel}>Last name</Text>
              <TextInput
                style={styles.input}
                value={form.lastName}
                onChangeText={v => setFormField('lastName', v)}
                placeholder="Last name"
                placeholderTextColor={colors.grayMedium}
              />
            </View>
          </View>
          <Text style={styles.inputLabel}>Email address</Text>
          <TextInput
            style={styles.input}
            value={form.email}
            onChangeText={v => setFormField('email', v)}
            placeholder="Email address"
            placeholderTextColor={colors.grayMedium}
            keyboardType="email-address"
          />
          <Text style={styles.inputLabel}>Phone number</Text>
          <View style={styles.formRow}>
            <View style={[styles.formCol, {flex: 1.2, marginRight: 8}]}>
              <TextInput
                style={styles.input}
                value={form.countryCode}
                onChangeText={v => setFormField('countryCode', v)}
                placeholder="US +1"
                placeholderTextColor={colors.grayMedium}
              />
            </View>
            <View style={[styles.formCol, {flex: 3}]}>
              <TextInput
                style={styles.input}
                value={form.phone}
                onChangeText={v => setFormField('phone', v)}
                placeholder="Phone number"
                placeholderTextColor={colors.grayMedium}
                keyboardType="phone-pad"
              />
            </View>
          </View>
          <TouchableOpacity
            style={[
              styles.continueButton,
              isFormComplete
                ? styles.continueButtonEnabled
                : styles.continueButtonDisabled,
            ]}
            disabled={!isFormComplete}>
            <Text
              style={[
                styles.continueButtonText,
                isFormComplete
                  ? styles.continueButtonTextEnabled
                  : styles.continueButtonTextDisabled,
              ]}>
              CONTINUE
            </Text>
          </TouchableOpacity>

          <View style={styles.priceSummary}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>
                {tier.charAt(0).toUpperCase() + tier.slice(1)} event
              </Text>
              <Text style={styles.priceValue}>$95.00</Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>
                {maxGuests} participants @ $
                {(tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0).toFixed(2)}
              </Text>
              <Text style={styles.priceValue}>
                $
                {(
                  maxGuests *
                  (tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0)
                ).toFixed(2)}
              </Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabelTotal}>Total</Text>
              <Text style={styles.priceValueTotal}>
                ${totalPrice.toFixed(2)}
              </Text>
            </View>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Per guest</Text>
              <Text style={styles.priceValue}>${perGuest.toFixed(2)}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
