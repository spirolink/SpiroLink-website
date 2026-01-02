import { Link } from 'react-router-dom';
import { Section } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useI18n } from '../i18n/I18nProvider';

export default function Projects() {
  const { t } = useI18n();
  return (
    <>
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">{t('projectsPageTitle')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {t('projectsPageDescription')}
          </p>
          <div className="mt-12">
            <p className="text-slate-600 text-lg mb-8">
              {t('projectsComingMessage')}
            </p>
            <Link to="/contact">
              <Button>{t('projectsDiscussBtn')}</Button>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
