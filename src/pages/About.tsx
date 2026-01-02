import { Section } from '../components/ui/Section';
import { useI18n } from '../i18n/I18nProvider';

export default function About() {
  const { t } = useI18n();
  return (
    <>
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">{t('aboutPageTitle')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {t('aboutComingSoon')}
          </p>
          <div className="mt-12">
            <p className="text-slate-600 text-lg">
              {t('aboutDescription')}
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
