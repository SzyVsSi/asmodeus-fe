import { useTranslation } from 'react-i18next';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

const animatedComponents = makeAnimated();

const options = [
	{ value: 'en', label: 'English' },
	{ value: 'nl', label: 'Dutch' },
	{ value: 'pl', label: 'Polish' },
];

export const LanguagePicker = () => {
	const { t, i18n } = useTranslation('common');

	return (
		<Select<(typeof options)[0]>
			onChange={(e) => i18n.changeLanguage(e?.value || '')}
			options={options}
			components={animatedComponents}
			placeholder={`${t('language')}...`}
			defaultValue={options.find((option) => option.value === i18n.language)}
		/>
	);
};
