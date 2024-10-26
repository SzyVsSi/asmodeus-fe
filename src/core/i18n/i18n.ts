import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';
import enJson from './locales/en.json' with { type: 'json' };
import nlJson from './locales/nl.json' with { type: 'json' };
import plJson from './locales/pl.json' with { type: 'json' };

const resources = {
	en: enJson,
	nl: nlJson,
	pl: plJson,
};

i18n
	.use(LanguageDetector)
	.use(initReactI18next) // passes i18n down to react-i18next
	.init({
		resources,
		fallbackLng: 'en',
		debug: import.meta.env.DEV,
		supportedLngs: ['en', 'nl', 'pl'],
		defaultNS: 'common',
		interpolation: {
			escapeValue: false, // react already safes from xss
		},
	});

export default i18n;
