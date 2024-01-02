const usernames = [
  'AlexMiller',
  'OliviaAdams',
  'EmmaHall',
  'LaurenEvans',
  'MeganCollins',
  'AnnaClarkson',
  'BrianTaylor',
  'MatthewCarter',
];

const thoughts = [
  'Learning a new skill is a journey of self-discovery.',
  'Coding styles may differ, but the logic is a universal language.',
  'I correct autocorrect more than it corrects me.',
  "There are two E's in bee, but they're both silent.",
  'The only difference between relaxation and boredom is enjoyment.',
  'If tomatoes are fruit, then ketchup is jam.',
  "Only one sock goes missing because if both did, you wouldn't notice.",
  'Does a straw have one hole, or two?',
];

const reactions = [
  "That's incredible!",
  'Pretty neat.',
  "I'm impressed!",
  'Sending positive vibes',
  'Hahaha',
  'Really? Is that true?',
  "That's hard to believe.",
  'That is not true.',
];

const emails = ['gmail', 'hotmail', 'yahoo', 'outlook'];

// Gets random item from array.
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Returns random user and email associated with them.
const randomUsers = (numUsers) => {
  const usersArray = [];
  for (let i = 0; i < numUsers; i++) {
    // Only generates random username once so email matches as well.
    const sameUsername = randomArrayItem(usernames);

    usersArray.push({
      username: sameUsername,
      email: `${sameUsername}@${randomArrayItem(emails)}.com`,
    });
  }
  return usersArray;
};

// Returns random user and reaction.
const randomReactions = (numReactions) => {
  const reactionsArray = [];
  for (let i = 0; i < numReactions; i++) {
    reactionsArray.push({
      username: randomArrayItem(usernames),
      reactionBody: randomArrayItem(reactions),
    });
  }
  return reactionsArray;
};

// Returns random thought with 3 random usernames and reactions.
const randomThoughts = (numThoughts) => {
  const thoughtsArray = [];
  for (let i = 0; i < numThoughts; i++) {
    thoughtsArray.push({
      thoughtText: randomArrayItem(thoughts),
      username: randomArrayItem(usernames),
      reactions: randomReactions(3),
    });
  }
  return thoughtsArray;
};

module.exports = { randomUsers, randomThoughts };
