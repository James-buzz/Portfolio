/**
 *
 */
module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'scope-case': [2, 'always', 'lower-case'],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build', // used for changes related to building or compiling the code, such as changes to build scripts or configuration files.
        'chore', // used for changes that do not modify the source code or tests, such as updating dependencies or performing housekeeping tasks.
        'ci', // used for changes to the continuous integration (CI) configuration or scripts.
        'docs', // used for changes to documentation files, such as READMEs or user guides.
        'feat', // used for new features or enhancements to existing functionality.
        'fix', //  used for bug fixes or corrections to existing code.
        'perf', // used for changes that improve performance.
        'refactor', // used for changes that do not add new functionality or fix bugs, but instead reorganize or simplify existing code.
        'revert', //  used for commits that undo previous changes.
        'style', // used for changes to the code style or formatting, such as whitespace or naming conventions.
        'test', //  used for changes to tests or testing infrastructure.
        'translation', // used for changes to language translation files
        'security', // used for changes to imrpove cyber securirty
      ],
    ],
  },
};
