import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Section, SectionHeading } from '../components/ui/Section';
import { Button } from '../components/ui/Button';

export default function Services() {
  return (
    <>
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
          <p className="text-xl text-slate-700 mb-8">
            Comprehensive solutions for fiber and microwave network planning and digital transformation
          </p>
        </div>
      </Section>

      {/* START: PON & FTTH MODULE - SERVICES PAGE SUMMARY */}
      <Section className="bg-white">
        <SectionHeading
          title="PON & FTTH Network Planning Services"
          subtitle="Technical Excellence"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            We provide comprehensive engineering services for designing, scaling, and upgrading fiber access networks. 
            Our expertise spans FTTH network planning, PON technology design, ODN engineering, capacity planning, and 
            network migration strategies.
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Service Areas:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>FTTH Network Planning:</strong> Service area analysis, topology selection, CO & hub planning</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>PON Technology Design:</strong> GPON, XG-PON, XGS-PON, NG-PON2, EPON</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>ODN Engineering:</strong> Split ratios, fiber routing, FDH, NAP, splice planning</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Capacity & Coverage:</strong> Port sizing, take-rate modeling, bandwidth forecasting</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Network Migration:</strong> Copper/HFC to FTTH, GPON to XGS-PON upgrades</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/pon-ftth">
              <Button size="lg">
                View Complete Technical Details <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - SERVICES PAGE SUMMARY */}

      {/* START: Microwave Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title="Microwave Network Design Services"
          subtitle="Technical Excellence"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Microwave networks are a proven, high-reliability communication solution for environments where fiber is unavailable, delayed, cost-prohibitive, or operationally risky. At SpiroLink, we design carrier-grade microwave networks that deliver high availability, predictable performance, and long-term operational resilience across diverse industries.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Our approach goes beyond individual radio links. We design end-to-end microwave systems that integrate seamlessly with fiber, IP/MPLS, and enterprise networks—ensuring reliability, scalability, and sustainability.
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Service Areas:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Network Planning & Design:</strong> Comprehensive site surveys, frequency planning, link budget calculations, network topology design, interference analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Microwave Link Engineering:</strong> Point-to-point and point-to-multipoint solutions, 6 GHz to 86 GHz expertise, capacity planning, redundancy design</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Regulatory & Compliance:</strong> Frequency licensing coordination, regulatory compliance documentation, international standards adherence (ITU, ETSI, FCC)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Implementation Support:</strong> Detailed technical documentation, equipment selection and vendor evaluation, installation supervision, network commissioning</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link to="/microwave-network">
              <Button size="lg">
                View Complete Technical Details <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Microwave Network Module - SERVICES PAGE */}

      {/* START: Long-Haul Optical Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title="Long-Haul Optical Network Planning Services"
          subtitle="Technical Excellence"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Long-haul optical networks form the backbone of modern digital infrastructure, connecting cities, regions, data centers, and critical services across vast distances. We specialize in planning and designing high-capacity optical fiber networks that deliver terabit-scale capacity, ultra-low latency, and exceptional reliability for carriers, internet service providers, data center operators, and large enterprises.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Our vendor-neutral optical transport planning services focus on long-haul and regional backbone networks, delivering resilient, high-capacity transport architectures that support mission-critical traffic.
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Service Areas:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Long-haul Fiber Route Planning:</strong> Feasibility analysis, fiber path optimization, capacity planning, geographic redundancy</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>DWDM System Design:</strong> Wavelength assignment, optical amplifier placement, coherent transmission (100G-800G+)</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Optical Link Budget Engineering:</strong> Power budgets, OSNR calculations, regeneration planning, margin analysis</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Network Resilience Design:</strong> Protection schemes, diverse routing, disaster recovery, SLA optimization</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Migration & Upgrade Planning:</strong> Legacy modernization, capacity augmentation, minimal-disruption strategies</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/optical-long-haul">
              <Button size="lg">
                View Complete Technical Details <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Long-Haul Optical Network Module - SERVICES PAGE */}

      {/* START: Enterprise Wi-Fi Network Module - SERVICES PAGE */}
      <Section className="bg-white">
        <SectionHeading
          title="Enterprise & Critical Wi-Fi Network Planning Services"
          subtitle="Technical Excellence"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            Modern Wi-Fi networks are no longer best-effort convenience systems. They are core access infrastructure supporting business-critical applications, real-time operations, IoT, and user experience at scale. We provide professional Wi-Fi network planning and design services that deliver predictable performance, scalability, and operational reliability across enterprise, industrial, public, and mission-critical environments.
          </p>
          
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            We design Wi-Fi networks that perform consistently under real load, real interference, and real usage patterns, with expertise spanning enterprise networks, healthcare facilities, educational institutions, hospitality venues, manufacturing environments, and public spaces.
          </p>
          
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-lg mb-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">Core Service Areas:</h3>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Enterprise Wi-Fi Network Design:</strong> Site surveys, RF coverage planning, AP placement optimization, channel planning, roaming design</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Wi-Fi 6/6E/7 Planning:</strong> Next-generation Wi-Fi implementation, 6 GHz spectrum planning, multi-gigabit wireless design, WPA3 security</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Security & Policy Design:</strong> Secure SSID architecture, WPA3-Enterprise, 802.1X authentication, guest isolation, compliance planning</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Performance Optimization:</strong> RF interference analysis, spectrum management, co-channel optimization, application monitoring design</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-green-600 flex-shrink-0">✓</span>
                <span><strong>Migration & Upgrade Planning:</strong> Legacy system assessment, technology refresh, phased deployment, minimal-disruption strategies</span>
              </li>
            </ul>
          </div>

          <div className="text-center">
            <Link to="/wifi-network">
              <Button size="lg">
                View Complete Technical Details <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </Section>
      {/* END: Enterprise Wi-Fi Network Module - SERVICES PAGE */}

      <Section className="bg-slate-50">
        <SectionHeading
          title="Why Partner With Us"
          subtitle="What Sets Us Apart"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Expert Team</h3>
            <p className="text-slate-600">Experienced engineers and planners with proven track record in fiber and microwave network deployment</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Proven Methodology</h3>
            <p className="text-slate-600">Comprehensive design approach ensuring thorough planning from concept to construction</p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-slate-900 mb-3">Full Documentation</h3>
            <p className="text-slate-600">Construction-ready plans, specifications, and cost models for immediate deployment</p>
          </div>
        </div>
      </Section>

      <Section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-green-50">
            Let's discuss how we can help with your network planning needs.
          </p>
          <Link to="/contact">
            <Button className="text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              Contact Us <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
