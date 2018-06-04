const types = {
  chore: {
    description: 'Build process or auxiliary tool changes',
    emoji: '🤖',
    value: 'chore'
  },
  ci: {
    description: 'CI related changes',
    emoji: '🎡',
    value: 'ci'
  },
  docs: {
    description: 'Documentation only changes',
    emoji: '✏️',
    value: 'docs'
  },
  feat: {
    description: 'A new feature',
    emoji: '🎸',
    value: 'feat'
  },
  fix: {
    description: 'A bug fix',
    emoji: '🐜',
    value: 'fix'
  },
  perf: {
    description: 'A code change that improves performance',
    emoji: '⚡️',
    value: 'perf'
  },
  refactor: {
    description: 'A code change that neither fixes a bug or adds a feature',
    emoji: '💡',
    value: 'refactor'
  },
  style: {
    description: 'Markup-only changes (white-space, formatting, missing semi-colons, etc)',
    emoji: '💄',
    value: 'style'
  },
  test: {
    description: 'Adding missing tests',
    emoji: '💍',
    value: 'test'
  }
};

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#type
const list = [
  'test',
  'feat',
  'fix',
  'chore',
  'docs',
  'refactor',
  'style',
  'ci',
  'perf'
];

// https://github.com/angular/angular/blob/master/CONTRIBUTING.md#scope
const scopes = [
  null,
  'init',
  'runner',
  'watcher',
  'config',
  'web-server',
  'changelog'
];

module.exports = {
  list,
  maxMessageLength: 50,
  minMessageLength: 3,
  types
};
