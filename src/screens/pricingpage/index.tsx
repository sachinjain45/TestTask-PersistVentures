import React, {useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  DimensionValue,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container} from '../../components';
import {RootState} from '../../redux/store';
import {
  setGuests,
  setChargeGuests,
  setTier,
} from '../../redux/reducers/pricingSlice';
import {PricingPageProps} from './types';
import {styles} from './style';

const guestOptions = [20, 30, 40, 50, 60, 80, 100, 150, 200, 500];

const getSliderFillWidth = (
  guests: number,
  guestOptions: number[],
): DimensionValue => {
  const idx = guestOptions.indexOf(guests);
  if (idx === guestOptions.length - 1) return '100%';
  return `${10 + idx * 10}%`;
};

export const Pricingpage = ({onNext, onBack}: PricingPageProps) => {
  const dispatch = useDispatch();
  const pricing = useSelector((state: RootState) => state.pricing);

  const guests = pricing.guests;
  const chargeGuests = pricing.chargeGuests;
  const tier = pricing.tier;
  const sliderBarWidth = useRef(1);

  const sliderFillWidth: DimensionValue = getSliderFillWidth(
    guests,
    guestOptions,
  );

  const nextDisabled = !guests || !tier || !chargeGuests;

  return (
    <Container
      currentStep={4}
      totalSteps={5}
      goNext={onNext}
      goBack={onBack}
      nextDisabled={nextDisabled}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled">
        <View style={styles.container}>
          <Text style={styles.header}>Pricing</Text>
          <Text style={styles.subheader}>
            Event pricing is flexible based on the size of your event, the
            features you need, and whether you'll charge your guests to attend.
          </Text>

          <Text style={styles.sectionTitle}>How many guests?</Text>
          <View style={styles.guestsRow}>
            <View style={styles.guestCountContainer}>
              <Text style={styles.guestCountText}>{guests}</Text>
            </View>

            <View style={styles.guestSliderRow}>
              <View style={styles.sliderBarContainer}>
                <View style={styles.guestCountBubble}>
                  <Text style={styles.guestCountText}>{guests}</Text>
                </View>

                <View
                  style={[
                    styles.sliderFill,
                    {width: sliderFillWidth as DimensionValue},
                  ]}
                />

                <View
                  style={styles.sliderBar}
                  onLayout={e => {
                    sliderBarWidth.current = e.nativeEvent.layout.width;
                  }}>
                  {guestOptions.map(opt => (
                    <TouchableOpacity
                      key={opt}
                      style={[styles.sliderTick]}
                      onPress={() => dispatch(setGuests(opt))}>
                      <View
                        style={[
                          styles.sliderTickMark,
                          guests === opt && styles.sliderTickMarkSelected,
                        ]}
                      />
                      <Text
                        style={[
                          styles.sliderTickLabel,
                          guests === opt && styles.sliderTickLabelSelected,
                        ]}>
                        {opt}
                      </Text>
                    </TouchableOpacity>
                  ))}
                  <TouchableOpacity
                    style={styles.sliderBarOverlay}
                    activeOpacity={1}
                    onPress={e => {
                      const {locationX} = e.nativeEvent;
                      const width = sliderBarWidth.current || 1;
                      const percent = locationX / width;
                      const idx = Math.round(
                        percent * (guestOptions.length - 1),
                      );
                      dispatch(setGuests(guestOptions[idx]));
                    }}>
                    <View style={styles.sliderBarOverlayView} />
                  </TouchableOpacity>
                </View>

                <View style={styles.sliderButtonRow}>
                  <TouchableOpacity
                    style={styles.sliderButton}
                    onPress={() => dispatch(setGuests(20))}>
                    <Text style={styles.sliderButtonText}>0</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.sliderButton}
                    onPress={() => dispatch(setGuests(500))}>
                    <Text style={styles.sliderButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <Text style={styles.guestHint}>
            This is the <Text style={styles.bold}>maximum</Text> number of
            guests that will be allowed to participate. You won’t be allowed to
            add more later, so we recommend including a buffer.{'\n'}
            <Text style={styles.unused}>
              Any <Text style={styles.italic}>unused</Text> seats after a
              Premium event will be automatically credited toward your next
              event.
            </Text>
          </Text>

          <Text style={styles.sectionTitle}>Charge guests for tickets?</Text>
          <View style={styles.chargeRow}>
            <TouchableOpacity
              style={[
                styles.chargeOption,
                chargeGuests === 'no' && styles.chargeOptionSelected,
              ]}
              onPress={() => dispatch(setChargeGuests('no'))}>
              <Text style={styles.chargeOptionTitle}>No</Text>
              <Text style={styles.chargeOptionDesc}>
                I'll cover the cost of Matchbox myself.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.chargeOption,
                chargeGuests === 'yes' && styles.chargeOptionSelected,
                {marginRight: 0},
              ]}
              onPress={() => dispatch(setChargeGuests('yes'))}>
              <Text style={styles.chargeOptionTitle}>Yes</Text>
              <Text style={styles.chargeOptionDesc}>
                I'll fold Matchbox into the ticket price.
              </Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.sectionTitle}>Choose a tier</Text>
          <View style={styles.tierRow}>
            <TouchableOpacity
              style={[
                styles.tierOption,
                tier === 'basic' && styles.tierOptionSelected,
                styles.tierOptionDisabled,
              ]}
              disabled>
              <Text style={styles.tierTitleDisabled}>Basic</Text>
              <Text style={styles.tierDescDisabled}>
                Doesn't include the premium questions you selected.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tierOption,
                tier === 'premium' && styles.tierOptionSelected,
              ]}
              onPress={() => dispatch(setTier('premium'))}>
              <View style={styles.tierPriceRow}>
                <Text style={styles.tierTitle}>Premium</Text>
                <Text style={styles.tierPrice}>$95 + $5/guest</Text>
              </View>
              <Text style={styles.tierDesc}>
                Access Matchbox’s{' '}
                <Text style={styles.bold}>full feature set</Text>, and get a
                license to charge your guests for tickets.
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tierOption,
                tier === 'elite' && styles.tierOptionSelected,
              ]}
              onPress={() => dispatch(setTier('elite'))}>
              <View style={styles.tierPriceRow}>
                <Text style={styles.tierTitle}>Elite</Text>
                <Text style={styles.tierPrice}>$95 + $8/guest</Text>
              </View>
              <Text style={styles.tierDesc}>
                Everything in Premium, plus{' '}
                <Text style={styles.bold}>multiple matches</Text> for each
                guest.
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.subtotalRow}>
            <Text style={styles.subtotalText}>
              Subtotal:{' '}
              <Text style={styles.bold}>
                $
                {95 +
                  guests * (tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0)}
              </Text>
              {chargeGuests === 'yes' ? ' (charged to guests)' : ''}
            </Text>

            <Text style={styles.subtotalText}>
              $
              {(
                (95 +
                  guests *
                    (tier === 'premium' ? 5 : tier === 'elite' ? 8 : 0)) /
                guests
              ).toFixed(2)}
              {' /guest'}
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
};
