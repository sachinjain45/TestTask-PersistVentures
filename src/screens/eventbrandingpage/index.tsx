import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {Container, CustomInput} from '../../components';
import {RootState} from '../../redux/store';
import {setEventBrandingFields} from '../../redux/reducers/eventBrandingSlice';
import {EventBrandingFields, EventBrandingTouched} from './types';
import {styles} from './style';
import {colors} from '../../theme';

export const Eventbrandingpage = ({
  onNext,
  onBack,
}: {
  onNext: () => void;
  onBack: () => void;
}) => {
  const dispatch = useDispatch();
  const brandingFields = useSelector((state: RootState) => state.eventBranding);

  const [touched, setTouched] = useState<EventBrandingTouched>({
    eventTitle: false,
    eventLink: false,
    hostName: false,
  });

  const isBlank = (val: string) => !val.trim();

  const handleInputChange = (
    field: keyof EventBrandingFields,
    text: string,
  ) => {
    dispatch(setEventBrandingFields({[field]: text}));
    if (!touched[field]) setTouched(t => ({...t, [field]: true}));
  };

  const handleInputBlur = (field: keyof EventBrandingFields) => {
    setTouched(t => ({...t, [field]: true}));
  };

  const eventTitleValid =
    !isBlank(brandingFields.eventTitle) &&
    brandingFields.eventTitle.length >= 3;
  const eventLinkValid =
    !isBlank(brandingFields.eventLink) &&
    !/[^a-z0-9-]/.test(brandingFields.eventLink);
  const hostNameValid =
    !isBlank(brandingFields.hostName) && brandingFields.hostName.length >= 3;

  const nextDisabled = !(eventTitleValid && eventLinkValid && hostNameValid);

  return (
    <Container
      currentStep={3}
      totalSteps={5}
      goNext={onNext}
      goBack={onBack}
      nextDisabled={nextDisabled}>
      <View style={styles.container}>
        <Text style={styles.header}>Event branding</Text>
        <Text style={styles.subheader}>
          Customize how your event will appear to your guests when they arrive
          at your event page.
        </Text>

        <Text style={styles.label}>Event title</Text>
        <View style={styles.inputWrapper}>
          <CustomInput
            style={styles.input}
            value={brandingFields.eventTitle}
            onChangeText={text => handleInputChange('eventTitle', text)}
            onBlur={() => handleInputBlur('eventTitle')}
            placeholder="Untitled Event"
            placeholderTextColor={colors.grayMedium}
          />
        </View>
        {touched.eventTitle && isBlank(brandingFields.eventTitle) && (
          <Text style={styles.validationError}>Can't be left blank</Text>
        )}
        {touched.eventTitle &&
          !isBlank(brandingFields.eventTitle) &&
          brandingFields.eventTitle.length < 3 && (
            <Text style={styles.validationError}>
              Enter at least 3 characters
            </Text>
          )}

        <Text style={styles.label}>Event link</Text>
        <View style={styles.linkRow}>
          <View style={styles.linkPrefix}>
            <Text style={styles.linkPrefixText}>match.box/</Text>
          </View>
          <View style={styles.linkSeparator} />
          <CustomInput
            wrapperStyle={[styles.linkInput]}
            value={brandingFields.eventLink}
            onChangeText={text => handleInputChange('eventLink', text)}
            onBlur={() => handleInputBlur('eventLink')}
            placeholder="Untitled-event"
            placeholderTextColor={colors.grayMedium}
          />
        </View>

        {touched.eventLink && isBlank(brandingFields.eventLink) ? (
          <Text style={styles.validationError}>Can't be left blank</Text>
        ) : (
          <Text style={styles.linkHint}>
            Guests will visit{' '}
            <Text style={styles.linkUrl}>
              https://match.box/{brandingFields.eventLink}
            </Text>{' '}
            to participate
          </Text>
        )}

        {touched.eventLink &&
          !isBlank(brandingFields.eventLink) &&
          /[^a-z0-9-]/.test(brandingFields.eventLink) && (
            <Text style={styles.validationError}>
              Can only contain lowercase letters, numbers, and hyphens
            </Text>
          )}

        <Text style={styles.label}>Host’s name</Text>
        <View style={styles.inputWrapper}>
          <CustomInput
            style={styles.input}
            value={brandingFields.hostName}
            onChangeText={text => handleInputChange('hostName', text)}
            onBlur={() => handleInputBlur('hostName')}
            placeholder="John Doe"
            placeholderTextColor={colors.grayMedium}
          />
        </View>

        <Text style={styles.hostHint}>
          Appears on your event page:{' '}
          <Text style={styles.hostHintItalic}>
            "a Matchbox event hosted by {brandingFields.hostName}"
          </Text>
        </Text>
        {touched.hostName && isBlank(brandingFields.hostName) && (
          <Text style={styles.validationError}>Can't be left blank</Text>
        )}
        {touched.hostName &&
          !isBlank(brandingFields.hostName) &&
          brandingFields.hostName.length < 3 && (
            <Text style={styles.validationError}>
              Enter at least 3 characters
            </Text>
          )}
      </View>
    </Container>
  );
};
