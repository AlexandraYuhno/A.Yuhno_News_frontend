import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {files: ['**/*.js'], languageOptions: {sourceType: 'script'}},
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  {
    'rules': {
      'indent': ['error', 2],
      'quotes': ['error', 'single'],
      'semi': ['error', 'always']
    }
  }
];