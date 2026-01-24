import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { useI18n } from '../i18n/I18nProvider';
import StayTuned from '../components/StayTuned';
import Chatbot from '../components/Chatbot';

export default function Home() {
  const { t } = useI18n();

  return (
    <>
      <div style={{ position: 'relative', zIndex: 10 }}>
      {/* SPIROLINK Hero - Original Design */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
              {t('homeHeroTitle')}
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              {t('homeHeroDescription')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button>
                  {t('exploreOurServices')} <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">{t('getInTouch')}</Button>
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <StayTuned />
          </div>
        </div>
      </Section>


      <Section className="bg-slate-50">
        <SectionHeading
          title={t('homeWhyChooseTitle')}
          subtitle={t('homeWhyChooseSubtitle')}
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('homeInnovativeTitle')}</h3>
            <p className="text-slate-600">{t('homeInnovativeDesc')}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('homeSustainableTitle')}</h3>
            <p className="text-slate-600">{t('homeSustainableDesc')}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('homeExpertTitle')}</h3>
            <p className="text-slate-600">{t('homeExpertDesc')}</p>
          </div>
        </div>
      </Section>
      </div>
      <Chatbot />
    </>
  );
}
