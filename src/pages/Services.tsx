import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';
import { useI18n } from '../i18n/I18nProvider';

export default function Services() {
  const { t } = useI18n();
  
  return (
    <>
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">{t('servicesPageTitle')}</h1>
          <p className="text-xl text-slate-700 mb-8">
            {t('servicesPageDescription')}
          </p>
        </div>
      </Section>

      {/* START: PON & FTTH MODULE - SERVICES PAGE SUMMARY */}
      <Section className="bg-white">
        <SectionHeading
          title={t('servicesPoNFtthTitle')}
          subtitle={t('servicesPoNFtthSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesPoNFtthIntro')}
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('servicesCoreAreas')}</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesFtthNetworkPlanningTitle')}:</strong> {t('servicesFtthNetworkPlanningDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesPonTechnologyTitle')}:</strong> {t('servicesPonTechnologyDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOdnEngineeringTitle')}:</strong> {t('servicesOdnEngineeringDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('serviceCapacityCoverageTitle')}:</strong> {t('serviceCapacityCoverageDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesNetworkMigrationTitle')}:</strong> {t('servicesNetworkMigrationDesc')}</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/pon-ftth">
              <Button size="lg">
                {t('servicesViewCompleteBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - SERVICES PAGE SUMMARY */}

      {/* START: Microwave Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title={t('servicesMicrowaveTitle')}
          subtitle={t('servicesMicrowaveSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesMicrowaveIntro')}
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesMicrowaveIntro2')}
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('servicesCoreAreas')}</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesMicrowavePlanningTitle')}:</strong> {t('servicesMicrowavePlanningDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesMicrowaveLinkTitle')}:</strong> {t('servicesMicrowaveLinkDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesMicrowaveRegulatoryTitle')}:</strong> {t('servicesMicrowaveRegulatoryDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesMicrowaveImplementationTitle')}:</strong> {t('servicesMicrowaveImplementationDesc')}</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                {t('servicesGetStartedBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/microwave-network">
              <Button size="lg">
                {t('servicesViewCompleteBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Microwave Network Module - SERVICES PAGE */}

      {/* START: Long-Haul Optical Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title={t('servicesOpticalTitle')}
          subtitle={t('servicesOpticalSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesOpticalIntro')}
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesOpticalIntro2')}
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('servicesCoreAreas')}</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOpticalRouteTitle')}:</strong> {t('servicesOpticalRouteDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOpticalDwdmTitle')}:</strong> {t('servicesOpticalDwdmDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOpticalLinkBudgetTitle')}:</strong> {t('servicesOpticalLinkBudgetDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOpticalResilienceTitle')}:</strong> {t('servicesOpticalResilienceDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesOpticalMigrationTitle')}:</strong> {t('servicesOpticalMigrationDesc')}</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/optical-long-haul">
              <Button size="lg">
                {t('servicesViewCompleteBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Long-Haul Optical Network Module - SERVICES PAGE */}

      {/* START: Enterprise Wi-Fi Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title={t('servicesWifiTitle')}
          subtitle={t('servicesWifiSubtitle')}
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesWifiIntro')}
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            {t('servicesWifiIntro2')}
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">{t('servicesCoreAreas')}</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesWifiDesignTitle')}:</strong> {t('servicesWifiDesignDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesWifi6Title')}:</strong> {t('servicesWifi6Desc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesWifiSecurityTitle')}:</strong> {t('servicesWifiSecurityDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesWifiPerformanceTitle')}:</strong> {t('servicesWifiPerformanceDesc')}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>{t('servicesWifiMigrationTitle')}:</strong> {t('servicesWifiMigrationDesc')}</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/wifi-network">
              <Button size="lg">
                {t('servicesViewCompleteBtn')} <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Enterprise Wi-Fi Network Module - SERVICES PAGE */}

      <Section className="bg-slate-50">
        <SectionHeading
          title={t('servicesWhyPartnerTitle')}
          subtitle={t('servicesWhyPartnerSubtitle')}
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('servicesExpertTeamTitle')}</h3>
            <p className="text-slate-600">{t('servicesExpertTeamDesc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('servicesProvenMethodTitle')}</h3>
            <p className="text-slate-600">{t('servicesProvenMethodDesc')}</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">{t('servicesDocumentationTitle')}</h3>
            <p className="text-slate-600">{t('servicesDocumentationDesc')}</p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">{t('servicesCtaTitle')}</h2>
          <p className="text-xl mb-8 text-green-50">
            {t('servicesCtaDescription')}
          </p>
          <Link to="/contact">
            <Button className="text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              {t('contactUsBtn')} <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
