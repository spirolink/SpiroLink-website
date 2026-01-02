import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
<<<<<<< HEAD
import StayTuned from '../components/StayTuned';

export default function Home() {
=======
import { useI18n } from '../i18n/I18nProvider';
import StayTuned from '../components/StayTuned';

export default function Home() {
  const { t } = useI18n();

>>>>>>> origin/sampritha-branch
  return (
    <>
      {/* SPIROLINK Hero - Original Design */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
<<<<<<< HEAD
              Innovative & Sustainable Digital Solutions
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              SPIROLINK transforms your vision into powerful digital products. We build modern,
              scalable solutions that drive growth and efficiency.
=======
              {t('homeHeroTitle')}
            </h1>
            <p className="text-xl text-slate-700 mb-8">
              {t('homeHeroDescription')}
>>>>>>> origin/sampritha-branch
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/services">
                <Button>
<<<<<<< HEAD
                  Explore Our Services <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">Get In Touch</Button>
=======
                  {t('exploreOurServices')} <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline">{t('getInTouch')}</Button>
>>>>>>> origin/sampritha-branch
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
<<<<<<< HEAD
            <StayTuned title="Stay Tuned" subtitle="This dashboard is under development. Something amazing is coming soon!" />
=======
            <StayTuned />
>>>>>>> origin/sampritha-branch
          </div>
        </div>
      </Section>

      {/* START: PON & FTTH MODULE - HOME PAGE OVERVIEW */}
      <Section className="bg-white">
        <SectionHeading
<<<<<<< HEAD
          title="PON & FTTH Network Planning Services"
          subtitle="Technical Excellence"
=======
          title={t('homePoNFtthTitle')}
          subtitle={t('homePoNFtthSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">FTTH Network Planning:</span> Service area analysis, topology selection, CO & hub planning
=======
                <span className="font-semibold">{t('homePoNFtthNetworkPlanningTitle')}</span> {t('homePoNFtthNetworkPlanningDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">PON Technology Design:</span> GPON, XG-PON, XGS-PON, NG-PON2, EPON
=======
                <span className="font-semibold">{t('homePoNFtthTechnologyDesignTitle')}</span> {t('homePoNFtthTechnologyDesignDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">ODN Engineering:</span> Split ratios, fiber routing, FDH, NAP, splice planning
=======
                <span className="font-semibold">{t('homePoNFtthOdnEngineeringTitle')}</span> {t('homePoNFtthOdnEngineeringDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Capacity & Coverage:</span> Port sizing, take-rate modeling, bandwidth forecasting
=======
                <span className="font-semibold">{t('homePoNFtthCapacityTitle')}</span> {t('homePoNFtthCapacityDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Network Migration:</span> Copper/HFC to FTTH, GPON to XGS-PON upgrades
=======
                <span className="font-semibold">{t('homePoNFtthMigrationTitle')}</span> {t('homePoNFtthMigrationDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/pon-ftth">
              <Button>
<<<<<<< HEAD
                View Full Technical Services <ArrowRight className="w-5 h-5" />
=======
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
>>>>>>> origin/sampritha-branch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - HOME PAGE OVERVIEW */}

      {/* START: Microwave Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
<<<<<<< HEAD
          title="Microwave Network Design Services"
          subtitle="Wireless Connectivity Excellence"
=======
          title={t('homeMicrowaveTitle')}
          subtitle={t('homeMicrowaveSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Network Planning & Design:</span> Site surveys, frequency planning, link budget calculations, network optimization
=======
                <span className="font-semibold">{t('homeMicrowavePlanningTitle')}</span> {t('homeMicrowavePlanningDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Microwave Link Engineering:</span> Point-to-point/multipoint, 6 GHz to 86 GHz, capacity planning, redundancy design
=======
                <span className="font-semibold">{t('homeMicrowaveLinkTitle')}</span> {t('homeMicrowaveLinkDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Regulatory & Compliance:</span> Frequency licensing, compliance documentation, standards adherence
=======
                <span className="font-semibold">{t('homeMicrowaveRegulatoryTitle')}</span> {t('homeMicrowaveRegulatoryDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Implementation Support:</span> Technical documentation, equipment selection, installation supervision, commissioning
=======
                <span className="font-semibold">{t('homeMicrowaveImplementationTitle')}</span> {t('homeMicrowaveImplementationDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/microwave-network">
              <Button>
<<<<<<< HEAD
                View Full Technical Services <ArrowRight className="w-5 h-5" />
=======
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
>>>>>>> origin/sampritha-branch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Microwave Network Module - HOME PAGE OVERVIEW */}

      {/* START: Long-Haul Optical Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-white">
        <SectionHeading
<<<<<<< HEAD
          title="Long-Haul Optical Network Planning Services"
          subtitle="Backbone Infrastructure Excellence"
=======
          title={t('homeOpticalTitle')}
          subtitle={t('homeOpticalSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Long-haul Fiber Route Planning:</span> Feasibility analysis, fiber path optimization, capacity planning, geographic redundancy
=======
                <span className="font-semibold">{t('homeOpticalRouteTitle')}</span> {t('homeOpticalRouteDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">DWDM System Design:</span> Wavelength assignment, optical amplifier placement, coherent transmission design (100G-800G+)
=======
                <span className="font-semibold">{t('homeOpticalDwdmTitle')}</span> {t('homeOpticalDwdmDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Optical Link Budget Engineering:</span> Power budgets, OSNR analysis, regeneration planning, margin optimization
=======
                <span className="font-semibold">{t('homeOpticalLinkBudgetTitle')}</span> {t('homeOpticalLinkBudgetDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Network Resilience & Protection:</span> Protection schemes, diverse routing, disaster recovery, SLA design
=======
                <span className="font-semibold">{t('homeOpticalResilienceTitle')}</span> {t('homeOpticalResilienceDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Migration & Upgrade Planning:</span> Legacy system modernization, capacity augmentation, seamless technology transitions
=======
                <span className="font-semibold">{t('homeOpticalMigrationTitle')}</span> {t('homeOpticalMigrationDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/optical-long-haul">
              <Button>
<<<<<<< HEAD
                View Full Technical Services <ArrowRight className="w-5 h-5" />
=======
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
>>>>>>> origin/sampritha-branch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Long-Haul Optical Network Module - HOME PAGE OVERVIEW */}

      {/* START: Enterprise Wi-Fi Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
<<<<<<< HEAD
          title="Enterprise & Critical Wi-Fi Network Planning Services"
          subtitle="Wireless Access Infrastructure Excellence"
=======
          title={t('homeWifiTitle')}
          subtitle={t('homeWifiSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ul className="space-y-4 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
<<<<<<< HEAD
                <span className="font-semibold">Enterprise Wi-Fi Network Design:</span> Site surveys, RF coverage planning, AP placement, channel planning, roaming optimization
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">Wi-Fi 6/6E/7 Planning:</span> Next-generation implementation, 6 GHz spectrum, multi-gigabit design, WPA3 security
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">Security & Policy Design:</span> Secure SSID architecture, 802.1X authentication, guest isolation, compliance planning
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">Performance Optimization:</span> RF interference analysis, spectrum management, channel optimization, monitoring design
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
              <div>
                <span className="font-semibold">Migration & Upgrade Planning:</span> Technology refresh, phased deployment, minimal-disruption strategies, ROI analysis
=======
                <span className="font-semibold">{t('homeWifiDesignTitle')}</span> {t('homeWifiDesignDesc')}
>>>>>>> origin/sampritha-branch
              </div>
            </li>
          </ul>
          <div className="mt-8 text-center">
            <Link to="/wifi-network">
              <Button>
<<<<<<< HEAD
                View Full Technical Services <ArrowRight className="w-5 h-5" />
=======
                {t('homePoNFtthViewFullBtn')} <ArrowRight className="w-5 h-5" />
>>>>>>> origin/sampritha-branch
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Enterprise Wi-Fi Network Module - HOME PAGE OVERVIEW */}
      <Section className="bg-slate-50">
        <SectionHeading
<<<<<<< HEAD
          title="Why Choose SPIROLINK"
          subtitle="Expert Solutions"
=======
          title={t('homeWhyChooseTitle')}
          subtitle={t('homeWhyChooseSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
<<<<<<< HEAD
            <h3 className="text-xl font-semibold text-slate-900 mb-3">⚡ Innovative Approach</h3>
            <p className="text-slate-600">Cutting-edge technology paired with strategic thinking to solve complex network challenges.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🌱 Sustainable Growth</h3>
            <p className="text-slate-600">Design scalable infrastructure that grows with your business and environmental needs.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">🎯 Expert Team</h3>
            <p className="text-slate-600">Experienced engineers and planners dedicated to your network's success.</p>
=======
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
>>>>>>> origin/sampritha-branch
          </div>
        </div>
      </Section>

      {/* Call to Action - GET STARTED */}
      <Section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32">
        <div className="text-center max-w-3xl mx-auto">
<<<<<<< HEAD
          <h2 className="text-4xl font-bold mb-6">GET STARTED</h2>
          <p className="text-xl mb-12 text-green-50">
            Ready to build reliable wireless infrastructure for your organization? Contact us today for:
          </p>
          <ul className="text-lg mb-12 space-y-2 text-green-100">
            <li>✓ Free initial consultation</li>
            <li>✓ Network feasibility assessment</li>
            <li>✓ Project scoping and quotation</li>
            <li>✓ Technical discussions with our engineering team</li>
=======
          <h2 className="text-4xl font-bold mb-6">{t('homeGetStartedTitle')}</h2>
          <p className="text-xl mb-12 text-green-50">
            {t('homeGetStartedDescription')}
          </p>
          <ul className="text-lg mb-12 space-y-2 text-green-100">
            <li>{t('homeFreeConsultation')}</li>
            <li>{t('homeNetworkAssessment')}</li>
            <li>{t('homeProjectScoping')}</li>
            <li>{t('homeTechnicalDiscussion')}</li>
>>>>>>> origin/sampritha-branch
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
<<<<<<< HEAD
                Contact Us <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={() => alert('Request a Quote functionality coming soon. Contact us directly at hello@spirolink.com')}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
=======
                {t('homeContactUsBtn')} <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={() => alert(t('homeQuoteComingSoon'))}
              className="px-8 py-4 text-lg font-semibold rounded-lg bg-white text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
            >
              {t('homeRequestQuoteBtn')} <ArrowRight className="w-5 h-5" />
>>>>>>> origin/sampritha-branch
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
