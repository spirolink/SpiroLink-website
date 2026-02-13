import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Section, SectionHeading } from '../components/ui/Section';

type ServiceLink = {
  title: string;
  description: string;
  href: string;
};

const services: ServiceLink[] = [
  {
    title: 'PON / FTTH',
    description: 'PON & FTTH planning, design, and deployment support.',
    href: '/pon-ftth',
  },
  {
    title: 'Microwave Network',
    description: 'End-to-end microwave network design and engineering services.',
    href: '/microwave-network',
  },
  {
    title: 'Optical Long Haul',
    description: 'Long-haul optical network architecture and detailed design.',
    href: '/optical-long-haul',
  },
  {
    title: 'WiFi Network',
    description: 'WiFi planning, RF design, and performance optimization.',
    href: '/wifi-network',
  },
  {
    title: 'Remote Property Connectivity',
    description: 'Connectivity solutions for remote and hard-to-reach sites.',
    href: '/remote-property-connectivity',
  },
  {
    title: 'Engineering Communication Labs',
    description: 'Lab validation, testing, and engineering support services.',
    href: '/engineering-communication-labs',
  },
];

export default function Services() {
  return (
    <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-20 md:py-24">
      <SectionHeading
        title="Services"
        subtitle="Explore our network engineering services and solutions."
        centered={false}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Link
            key={service.href}
            to={service.href}
            className="group bg-white rounded-xl border border-slate-200 p-6 hover:shadow-lg transition-shadow focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2"
            aria-label={'Open ' + service.title}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-slate-600 transition-colors flex-shrink-0 mt-1" />
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
