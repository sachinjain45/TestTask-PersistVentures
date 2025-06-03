import { SectionOption } from "./types";

export const sections: {
  title: string;
  options: SectionOption[];
}[] = [
  {
    title: "What's the matching experience?",
    options: [
      {
        key: 'platonic',
        label: 'Platonic matching',
        desc: 'Anyone can match with anyone.',
      },
      {
        key: 'romantic',
        label: 'Romantic matching',
        desc: 'The questionnaire will ask everyone their gender and sexual orientation.',
      },
    ],
  },
  {
    title: "Who's coming?",
    options: [
      {
        key: 'friends',
        label: "I'm inviting my friends",
        desc: 'You’ll make sure the gender balance works out.',
      },
      {
        key: 'friendsOfFriends',
        label: "I'm inviting friends of friends",
        desc: 'You’ll ask each person to bring someone of their preferred gender, so the event will be balanced.',
      },
      {
        key: 'community',
        label: 'I run an existing community',
        desc: 'You’ll invite people from an existing pool of friends.',
      },
      {
        key: 'strangers',
        label: "I'm distributing tickets to strangers",
        desc: 'Guests are based on other people’s availability for your event or from other communities.',
      },
    ],
  },
  {
    title: 'Should we consider their age?',
    options: [
      {
        key: 'noAge',
        label: "Don't consider age",
        desc: 'My guests are of all a similar age, such that they would feel comfortable matching with anyone.',
      },
      {
        key: 'age',
        label: 'Use age-constrained matching',
        desc: 'The questionnaire will ask guests their age, and matches will be made between guests close in age.',
        premium: true,
      },
    ],
  },
  {
    title: 'How should we handle an imbalance?',
    options: [
      {
        key: 'flexible',
        label: 'Give “flexible” matches to any extra men or women',
        desc: 'Pair each remaining person with their best “friend” match among the remaining people.',
        note: 'Imbalances can happen in age-constrained platonic events when there is a large range in the ages of participants.',
      },
      {
        key: 'unmatched',
        label: 'Leave any extra guests unmatched',
        desc: 'Give each remaining person a kind message explaining they went unmatched.',
      },
    ],
  },
  {
    title: 'Where will it happen?',
    options: [
      {
        key: 'myPlace',
        label: "I'm hosting at my place",
        desc: 'My home can accommodate the event I’m planning.',
        note: 'This won’t affect the matching, but it’s important for you to plan.',
      },
      {
        key: 'public',
        label: 'I’m hosting in a public space',
        desc: 'We’ll all meet up at the park / etc.',
      },
      {
        key: 'restaurant',
        label: 'I know a restaurant / bar / club',
        desc: 'We’ll get our matches over food and drinks.',
      },
      {
        key: 'quiet',
        label: 'I’m getting an event space',
        desc: 'I’m working with a venue that accommodates social events / gatherings.',
      },
    ],
  },
];

export const whosComingOptions: {
  platonic: SectionOption[];
  default: SectionOption[];
} = {
  platonic: [
    {
      key: 'friends',
      label: 'I’m inviting my friends',
      note: 'This won’t affect the matching, but it’s important for you to plan.',
    },
    {
      key: 'friendsOfFriends',
      label: 'I’m inviting friends of friends',
    },
    {
      key: 'community',
      label: 'I’m inviting people from a pre-existing community',
    },
    {
      key: 'strangers',
      label: 'I’m advertising tickets to strangers',
    },
  ],
  default: [
    {
      key: 'friends',
      label: "I'm inviting my friends",
      desc: 'I’ll make sure the gender balance works out myself.',
    },
    {
      key: 'friendsOfFriends',
      label: "I'm inviting friends of friends",
      desc: 'I’ll ask each person to bring someone of their preferred gender, so the event ends up balanced.',
    },
    {
      key: 'community',
      label: 'I run an existing community',
      desc: 'I’ll invite people from a pre-existing pool of guests.',
    },
    {
      key: 'strangers',
      label: "I'm distributing tickets to strangers",
      desc: 'I’ll make a set number of tickets available for guests based on their gender/preferences.',
    },
  ],
};