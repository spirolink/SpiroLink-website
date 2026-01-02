import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { useI18n } from '../i18n/I18nProvider';
import StayTuned from '../components/StayTuned';

export default function Home() {
  const { t } = useI18n();

  return (
    <>
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

      {/* START: PON & FTTH MODULE - HOME PAGE OVERVIEW */}
      <Section className="bg-white">
        <SectionHeading
          title={t('homePoNFtthTitle')}
          subtitle={t('homePoNFtthSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homePoNFtthNetworkPlanningTitle')}</span> {t('homePoNFtthNetworkPlanningDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homePoNFtthTechnologyDesignTitle')}</span> {t('homePoNFtthTechnologyDesignDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homePoNFtthOdnEngineeringTitle')}</span> {t('homePoNFtthOdnEngineeringDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homePoNFtthCapacityTitle')}</span> {t('homePoNFtthCapacityDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homePoNFtthMigrationTitle')}</span> {t('homePoNFtthMigrationDesc')}
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/pon-ftth">
              <Button>
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - HOME PAGE OVERVIEW */}

      {/* START: Microwave Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
          title={t('homeMicrowaveTitle')}
          subtitle={t('homeMicrowaveSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeMicrowavePlanningTitle')}</span> {t('homeMicrowavePlanningDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeMicrowaveLinkTitle')}</span> {t('homeMicrowaveLinkDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeMicrowaveRegulatoryTitle')}</span> {t('homeMicrowaveRegulatoryDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeMicrowaveImplementationTitle')}</span> {t('homeMicrowaveImplementationDesc')}
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/microwave-network">
              <Button>
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Microwave Network Module - HOME PAGE OVERVIEW */}

      {/* START: Long-Haul Optical Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-white">
        <SectionHeading
          title={t('homeOpticalTitle')}
          subtitle={t('homeOpticalSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeOpticalRouteTitle')}</span> {t('homeOpticalRouteDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeOpticalDwdmTitle')}</span> {t('homeOpticalDwdmDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeOpticalLinkBudgetTitle')}</span> {t('homeOpticalLinkBudgetDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeOpticalResilienceTitle')}</span> {t('homeOpticalResilienceDesc')}
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeOpticalMigrationTitle')}</span> {t('homeOpticalMigrationDesc')}
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/optical-long-haul">
              <Button>
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Long-Haul Optical Network Module - HOME PAGE OVERVIEW */}

      {/* START: Enterprise Wi-Fi Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
          title={t('homeWifiTitle')}
          subtitle={t('homeWifiSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">{t('homeWifiDesignTitle')}</span> {t('homeWifiDesignDesc')}
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/wifi-network">
              <Button>
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Enterprise Wi-Fi Network Module - HOME PAGE OVERVIEW */}
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

      {/* Call to Action - GET STARTED */}
      <Section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">{t('homeGetStartedTitle')}</h2>
          <p className="text-xl mb-12 text-green-50">
            {t('homeGetStartedDescription')}
          </p>
          <ul className="text-lg mb-12 space-y-2 text-green-100">
            <li>{t('homeFreeConsultation')}</li>
            <li>{t('homeNetworkAssessment')}</li>
            <li>{t('homeProjectScoping')}</li>
            <li>{t('homeTechnicalDiscussion')}</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                {t('homeContactUsBtn')} <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={() => alert(t('homeQuoteComingSoon'))}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              {t('homeRequestQuoteBtn')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
