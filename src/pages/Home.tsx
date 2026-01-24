import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import { Button } from '../components/ui/Button';
import { Section, SectionHeading } from '../components/ui/Section';
import { useI18n } from '../i18n/I18nProvider';
import { useAuth } from '../contexts/AuthContext';
import Chatbot from '../components/Chatbot';
import { ImageCarousel } from '../components/ImageCarousel';

const PRIMARY_COLOR = '#0EA5E9';

// Hook for interactive scrolling with auto-resume
const useScrollAnimation = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handleScroll = () => {
      setIsAnimating(false);
      
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setIsAnimating(true);
      }, 3000);
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return { ref, isAnimating };
};

export default function Home() {
  const { t } = useI18n();
  const { user } = useAuth();
  const whyChooseRef = useScrollAnimation();

  return (
    <>
      <div style={{ position: 'relative', zIndex: 10 }}>
      {/* SPIROLINK Hero - Two Column with 3D Rotating Cards */}
      <Section className="bg-white py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">
                  Innovative & Sustainable Digital Solutions
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Advanced fiber, microwave, and wireless network design for carriers, service providers, and enterprises worldwide. From planning to implementation.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                {user ? (
                  <>
                    <Link to="/dashboard" className="inline-block">
                      <Button className="w-full sm:w-auto text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
                        Go to Dashboard <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </Button>
                    </Link>
                    <Link to="/services" className="inline-block">
                      <Button className="w-full sm:w-auto border-2 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all" style={{ borderColor: PRIMARY_COLOR, backgroundColor: PRIMARY_COLOR }}>
                        Explore Services <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/services" className="inline-block">
                      <Button className="w-full sm:w-auto text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
                        Explore Services <ArrowRight className="w-5 h-5 ml-2 inline" />
                      </Button>
                    </Link>
                    <Link to="/contact" className="inline-block">
                      <Button className="w-full sm:w-auto text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
                        Contact Us
                      </Button>
                    </Link>
                  </>
                )}
              </div>

              <div className="flex gap-6 text-sm text-gray-600 pt-4 flex-wrap">
                <a href="#" className="hover:text-gray-900 transition-colors">Schedule Consultation</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">Brochure</a>
                <span className="text-gray-300">|</span>
                <a href="#" className="hover:text-gray-900 transition-colors">Case Study</a>
              </div>
            </div>

            {/* Right: Image Carousel Dashboard */}
            <div className="flex justify-center items-center w-full">
              <ImageCarousel
                images={[
                  { src: '/assets/downloads/ftth.jpg', alt: 'PON FTTH Network' },
                  { src: '/assets/downloads/microwave.jpg', alt: 'Microwave Network' },
                  { src: '/assets/downloads/optical.jpg', alt: 'Optical Long Haul' },
                  { src: '/assets/downloads/wifi.jpg', alt: 'WiFi Network' },
                ]}
                autoRotateInterval={4000}
                className="w-full h-[400px] md:h-[500px]"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white py-24">
        <SectionHeading
          title={t('homeWhyChooseTitle')}
          subtitle={t('homeWhyChooseSubtitle')}
          centered={true}
        />
        <div className="mt-12 overflow-x-auto rounded-2xl scroll-smooth" ref={whyChooseRef.ref}>
          <div className={`flex gap-8 ${whyChooseRef.isAnimating ? 'slide-left-right' : ''} pb-4`}>
            {[
              { title: t('homeInnovativeTitle'), desc: t('homeInnovativeDesc'), icon: '⚡' },
              { title: t('homeSustainableTitle'), desc: t('homeSustainableDesc'), icon: '🌱' },
              { title: t('homeExpertTitle'), desc: t('homeExpertDesc'), icon: '🛡️' }
            ].map((item, idx) => (
              <div key={idx} className="group relative overflow-hidden flex-shrink-0 w-96 transition-all duration-300 hover:-translate-y-1">
                <div className="relative p-8 rounded-xl border border-gray-100 hover:border-gray-200 bg-white shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col hover:bg-sky-50/40" style={{ borderTopColor: PRIMARY_COLOR, borderTopWidth: '3px' }}>
                  <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-sky-600 transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed flex-grow group-hover:text-gray-700 transition-colors duration-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Call to Action - GET STARTED */}
      <Section className="bg-slate-900 text-white py-40 relative">
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white">
            {t('homeGetStartedTitle')}
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-gray-300 leading-relaxed">
            {t('homeGetStartedDescription')}
          </p>
          <ul className="text-lg mb-12 space-y-3 text-gray-300 inline-block text-left">
            <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>{t('homeFreeConsultation')}</li>
            <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>{t('homeNetworkAssessment')}</li>
            <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>{t('homeProjectScoping')}</li>
            <li className="flex items-center gap-3"><span className="inline-block w-2 h-2 rounded-full" style={{ backgroundColor: PRIMARY_COLOR }}></span>{t('homeTechnicalDiscussion')}</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 relative z-20">
            <Link to="/contact">
              <button className="px-8 py-4 text-lg font-semibold rounded-lg text-white shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:-translate-y-1" style={{ backgroundColor: PRIMARY_COLOR, color: 'white' }}>
                {t('homeContactUsBtn')} <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <button
              onClick={() => alert(t('homeQuoteComingSoon'))}
              className="px-8 py-4 text-lg font-semibold rounded-lg border-2 text-white hover:opacity-80 shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:-translate-y-1"
              style={{ borderColor: PRIMARY_COLOR, backgroundColor: PRIMARY_COLOR, color: 'white' }}
            >
              {t('homeRequestQuoteBtn')} <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>
      </div>
      <Chatbot />
    </>
  );
}
