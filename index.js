'use strict';

module.exports = {
  rules: {
    'color-hex-length': 'short',
    'color-no-invalid-hex': true,
    'comment-no-empty': true,
    'comment-whitespace-inside': 'always',
    'custom-property-empty-line-before': 'never',
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values'],
      },
    ],
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-single-line-max-declarations': 1,
    'font-family-no-duplicate-names': true,
    'function-calc-no-unspaced-operator': true,
    'function-linear-gradient-no-nonstandard-direction': true,
    'function-name-case': 'lower',
    'keyframe-declaration-no-important': true,
    'length-zero-no-unit': true,
    'media-feature-name-no-unknown': true,
    'no-invalid-double-slash-comments': true,
    'property-no-unknown': true,
    'property-no-vendor-prefix': [
      true,
      {
        ignoreProperties: [
          'appearance',
          'mask-image',
          'user-select',
          'backdrop-filter',
          'text-size-adjust',
          'tab-size',
          'mask-position',
          'mask-size',
        ],
      },
    ],
    'rule-empty-line-before': [
      'always-multi-line',
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-case': 'lower',
    'shorthand-property-no-redundant-values': true,
    'string-no-newline': true,
    'unit-no-unknown': true,
    'value-no-vendor-prefix': [
      true,
      {
        ignoreValues: ['sticky'],
      },
    ],
  },
};
