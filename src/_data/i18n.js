// Import translation files using dynamic imports
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load translation files
const nl = JSON.parse(readFileSync(join(__dirname, 'i18n/nl.json'), 'utf-8'));
const en = JSON.parse(readFileSync(join(__dirname, 'i18n/en.json'), 'utf-8'));

// Export all translations
export default {
  nl,
  en
};
