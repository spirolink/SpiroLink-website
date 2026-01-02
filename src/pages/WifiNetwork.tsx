import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Shield, Zap, TrendingUp } from 'lucide-react';
import { Section, SectionHeading } from '../components/ui/Section';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';

export default function WifiNetwork() {
  return (
    <>
      {/* START: Enterprise Wi-Fi Network Planning Page */}

      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl font-bold text-slate-900 mb-6">
            Designing High-Performance Wi-Fi Networks for Enterprise and Critical Environments
          </h1>
          <p className="text-xl text-slate-700 mb-8">
            Modern Wi-Fi networks are no longer best-effort convenience systems. They are core access 
            infrastructure supporting business-critical applications, real-time operations, IoT, and user 
            experience at scale. We provide professional Wi-Fi network planning and design services that 
            deliver predictable performance, scalability, and operational reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg">
                Get Started <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <button 
              onClick={() => document.getElementById('core-services')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              View Our Capabilities <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Professional Wi-Fi Network Planning & Design"
          subtitle="Enterprise-Grade Wireless Excellence"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-lg leading-relaxed mb-8">
            We design Wi-Fi networks that perform consistently under real load, real interference, and real 
            usage patterns. Our approach integrates RF engineering, network architecture, security, and 
            operational resilience into comprehensive designs that meet your specific requirements.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Whether supporting corporate campuses, healthcare facilities, educational institutions, 
            hospitality venues, manufacturing environments, or public spaces, we deliver reliable wireless 
            infrastructure that scales with your business needs.
          </p>
        </div>
      </Section>

      {/* Core Services Section */}
      <Section className="bg-slate-50" id="core-services">
        <SectionHeading
          title="Our Core Services"
          subtitle="Technical Expertise"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <Wifi className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Wi-Fi Network Design</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Site surveys (predictive and active)</li>
                <li>• RF coverage and capacity planning</li>
                <li>• Access point placement optimization</li>
                <li>• Channel and power planning</li>
                <li>• Controller and management architecture</li>
                <li>• Roaming and handoff optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Zap className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wi-Fi 6/6E/7 Planning</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• 802.11ax (Wi-Fi 6) implementation</li>
                <li>• 6 GHz spectrum planning (Wi-Fi 6E)</li>
                <li>• Wi-Fi 7 (802.11be) readiness</li>
                <li>• OFDMA and MU-MIMO optimization</li>
                <li>• Target Wake Time (TWT) for IoT</li>
                <li>• WPA3 security implementation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Shield className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Network Security & Policy Design</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Secure SSID architecture and segmentation</li>
                <li>• WPA3-Enterprise implementation</li>
                <li>• 802.1X authentication design (RADIUS/NAC)</li>
                <li>• Guest network isolation</li>
                <li>• Role-based access control (RBAC)</li>
                <li>• Compliance planning (HIPAA, PCI-DSS, GDPR)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <TrendingUp className="w-10 h-10 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Wi-Fi Performance & Migration</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• RF interference analysis and mitigation</li>
                <li>• Spectrum analysis and management</li>
                <li>• Application performance monitoring</li>
                <li>• Legacy system assessment</li>
                <li>• Phased deployment planning</li>
                <li>• ROI analysis and business case</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Industries We Serve Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Industries & Environments We Serve"
          subtitle="Enterprise Solutions Across Sectors"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {[
            {
              title: 'Corporate & Enterprise',
              description: 'Headquarters, regional offices, multi-floor buildings, open office layouts, and distributed campus environments supporting BYOD.'
            },
            {
              title: 'Healthcare Facilities',
              description: 'Hospitals, medical centers, clinics, and medical campuses supporting clinical applications, medical devices, and RTLS systems.'
            },
            {
              title: 'Education Institutions',
              description: 'K-12 schools, colleges, universities, libraries, and research facilities enabling digital learning and 1:1 device programs.'
            },
            {
              title: 'Hospitality & Tourism',
              description: 'Hotels, resorts, casinos, theme parks, and restaurants delivering seamless guest experiences and operational efficiency.'
            },
            {
              title: 'Retail & Commercial',
              description: 'Retail stores, shopping malls, restaurants, and commercial buildings supporting point-of-sale and customer engagement.'
            },
            {
              title: 'Manufacturing & Warehousing',
              description: 'Factories, distribution centers, and logistics facilities supporting mobile devices, AGVs, and industrial IoT systems.'
            },
            {
              title: 'Transportation & Transit',
              description: 'Airports, train stations, bus terminals, and ports providing passenger connectivity and operational communications.'
            },
            {
              title: 'Sports & Entertainment',
              description: 'Stadiums, arenas, concert halls, and convention centers supporting tens of thousands of concurrent users.'
            },
            {
              title: 'Government & Public Sector',
              description: 'Government buildings, public safety operations, libraries, parks, and smart city infrastructure.'
            },
            {
              title: 'Smart Buildings & Real Estate',
              description: 'Commercial real estate, multi-tenant buildings, coworking spaces, and smart building systems integration.'
            },
            {
              title: 'Outdoor & Public Spaces',
              description: 'Parks, plazas, pedestrian zones, downtown districts, and community gathering spaces.'
            },
          ].map((industry, idx) => (
            <Card key={idx}>
              <CardContent>
                <h4 className="font-bold text-slate-900 mb-2">{industry.title}</h4>
                <p className="text-slate-700 text-sm">{industry.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
          title="Why Choose Our Wi-Fi Planning Services"
          subtitle="What Sets Us Apart"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <div className="space-y-4">
            {[
              { title: 'RF Engineering Excellence', desc: 'Deep expertise in radio frequency design, propagation modeling, and interference mitigation' },
              { title: 'Latest Technology Expertise', desc: 'Certified in Wi-Fi 6/6E/7 design and implementation best practices' },
              { title: 'Vendor-Neutral Approach', desc: 'Objective recommendations across all major enterprise Wi-Fi platforms' },
              { title: 'High-Density Specialization', desc: 'Proven track record designing networks supporting thousands of concurrent users' },
              { title: 'Security-First Design', desc: 'Comprehensive security architecture integrated from initial planning' },
              { title: 'Predictive Accuracy', desc: 'Advanced modeling tools ensuring design meets real-world performance requirements' },
              { title: 'Future-Proof Architecture', desc: 'Scalable designs accommodating growth and technology evolution' },
              { title: 'Comprehensive Documentation', desc: 'Detailed deliverables enabling seamless implementation and management' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-4 rounded-lg">
                <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                <div>
                  <h4 className="font-semibold text-slate-900">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Design Approach Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Our Design Approach"
          subtitle="Structured Process for Reliable Results"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          {[
            {
              step: '1',
              title: 'Requirements Analysis',
              description: 'Understanding your coverage areas, user density, application requirements, security policies, and budget parameters.'
            },
            {
              step: '2',
              title: 'Site Survey & Assessment',
              description: 'Conducting predictive and active site surveys including RF measurements, interference analysis, and building assessment.'
            },
            {
              step: '3',
              title: 'RF Design & Modeling',
              description: 'Creating detailed heat maps, AP placement plans, channel assignments, and interference mitigation strategies.'
            },
            {
              step: '4',
              title: 'Network Architecture',
              description: 'Designing controller placement, management systems, authentication infrastructure, and network segmentation.'
            },
            {
              step: '5',
              title: 'Security Planning',
              description: 'Implementing authentication methods, encryption standards, and compliance requirements for your industry.'
            },
            {
              step: '6',
              title: 'Documentation & Implementation',
              description: 'Delivering comprehensive design packages, equipment specifications, and validation procedures.'
            },
          ].map((phase, idx) => (
            <Card key={idx}>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                    {phase.step}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-2">{phase.title}</h4>
                    <p className="text-slate-700 text-sm">{phase.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Technical Capabilities Section */}
      <Section className="bg-slate-50">
        <SectionHeading
          title="Technical Capabilities"
          subtitle="Advanced Wireless Engineering"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-4">Wi-Fi Standards & Technologies</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Wi-Fi 7 (802.11be): 46 Gbps, 320 MHz channels</li>
                <li>• Wi-Fi 6E (802.11ax 6GHz): Clean spectrum, reduced interference</li>
                <li>• Wi-Fi 6 (802.11ax): OFDMA, MU-MIMO, TWT</li>
                <li>• Frequency bands: 2.4 GHz, 5 GHz, 6 GHz</li>
                <li>• OFDMA and MU-MIMO technologies</li>
                <li>• Beamforming and spatial streams</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-4">Advanced Features & Protocols</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Fast roaming (802.11r, k, v)</li>
                <li>• Band steering and client steering</li>
                <li>• WPA3-Enterprise (802.1X/EAP)</li>
                <li>• Enhanced Open (OWE)</li>
                <li>• Network Access Control (NAC)</li>
                <li>• Application visibility and control</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-4">Coverage & Capacity Planning</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Indoor office environments</li>
                <li>• Outdoor campus areas</li>
                <li>• Warehouse and industrial spaces</li>
                <li>• Harsh environmental conditions</li>
                <li>• Concurrent user calculations</li>
                <li>• Peak vs. average load planning</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-4">Network Architectures</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Centralized controller architecture</li>
                <li>• Cloud-managed Wi-Fi solutions</li>
                <li>• Distributed/autonomous architecture</li>
                <li>• Hybrid deployment options</li>
                <li>• Multi-vendor interoperability</li>
                <li>• Scalability for growth</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Design Deliverables Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Design Deliverables"
          subtitle="Complete Documentation for Implementation"
          centered={true}
        />
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Site Survey & Analysis Reports</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• RF coverage heat maps</li>
                <li>• Signal strength analysis</li>
                <li>• Interference assessment</li>
                <li>• Spectrum analysis results</li>
                <li>• Building material impact</li>
                <li>• Existing network assessment</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Network Design Documentation</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Network architecture diagrams</li>
                <li>• AP placement plans with coordinates</li>
                <li>• Channel and power assignment tables</li>
                <li>• Controller specifications</li>
                <li>• VLAN and security architecture</li>
                <li>• QoS policies and configuration</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Equipment & Implementation</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Bill of materials with part numbers</li>
                <li>• Equipment specifications</li>
                <li>• Power and cabling requirements</li>
                <li>• Installation guidelines</li>
                <li>• Configuration templates</li>
                <li>• Testing procedures</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4 text-lg">Validation & Support</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Post-deployment validation survey</li>
                <li>• Performance testing criteria</li>
                <li>• Acceptance procedures</li>
                <li>• Monitoring recommendations</li>
                <li>• Optimization guidelines</li>
                <li>• Capacity expansion planning</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Performance Optimization Section */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
          title="Performance Optimization Strategies"
          subtitle="Ensuring Reliable Operation"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Coverage Optimization</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Optimal AP placement based on materials</li>
                <li>• Power level optimization</li>
                <li>• Antenna selection and orientation</li>
                <li>• Dead zone elimination</li>
                <li>• Seamless roaming design</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Capacity Management</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Right-sizing AP density</li>
                <li>• OFDMA and MU-MIMO utilization</li>
                <li>• Band steering (2.4 GHz to 5 GHz)</li>
                <li>• Load balancing across APs</li>
                <li>• Client steering optimization</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Interference Mitigation</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• Non-overlapping channel planning</li>
                <li>• Co-channel interference prevention</li>
                <li>• Spectrum analysis and monitoring</li>
                <li>• Rogue AP detection</li>
                <li>• IoT device coexistence</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Application Performance</h3>
              <ul className="space-y-2 text-slate-700 text-sm">
                <li>• QoS policies for critical apps</li>
                <li>• Voice and video prioritization</li>
                <li>• Bandwidth allocation</li>
                <li>• Application visibility</li>
                <li>• Deep packet inspection</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Standards & Compliance Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Standards & Compliance"
          subtitle="Industry Best Practices"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Industry Standards</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• IEEE 802.11 (Wi-Fi standards)</li>
                <li>• Wi-Fi Alliance certifications</li>
                <li>• FCC regulations (RF power limits)</li>
                <li>• ETSI standards (European)</li>
                <li>• 3GPP (cellular coexistence)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Security & Compliance</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• PCI-DSS (payment card industry)</li>
                <li>• HIPAA (healthcare)</li>
                <li>• GDPR (data privacy)</li>
                <li>• SOC 2 compliance</li>
                <li>• ISO 27001 information security</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Technology Partnerships Section */}
      <Section className="bg-slate-50">
        <SectionHeading
          title="Technology Partnerships"
          subtitle="Vendor-Neutral Expertise"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-center mb-8">
            We maintain vendor-neutral expertise across all major enterprise Wi-Fi platforms, enabling 
            objective recommendations based on your specific requirements.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-slate-900 mb-4">Enterprise Wi-Fi Vendors</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Cisco (Catalyst, Meraki)</li>
                <li>• Aruba (HPE)</li>
                <li>• Juniper (Mist AI)</li>
                <li>• Ruckus (CommScope)</li>
                <li>• Extreme Networks</li>
                <li>• Fortinet</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 mb-4">Planning & Survey Tools</h3>
              <ul className="space-y-2 text-slate-700">
                <li>• Ekahau Site Survey Pro</li>
                <li>• AirMagnet Survey Pro</li>
                <li>• iBwave WiFi</li>
                <li>• Hamina Network Planner</li>
                <li>• NetSpot</li>
                <li>• TamoGraph Site Survey</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Case Studies Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Case Study Examples"
          subtitle="Proven Deployments"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto">
          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Corporate Headquarters Wi-Fi 6E Upgrade</h3>
              <p className="text-slate-700 text-sm mb-4">
                Designed Wi-Fi 6E network for 250,000 sq ft headquarters supporting 2,000 employees. 
                Implemented 6 GHz spectrum with 180 access points achieving 99.9% coverage.
              </p>
              <p className="text-green-600 text-sm font-semibold">Result: 4K video conferencing throughout facility</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Stadium High-Density Wi-Fi</h3>
              <p className="text-slate-700 text-sm mb-4">
                Engineered 65,000-seat stadium Wi-Fi supporting 50,000+ concurrent users. 
                Deployed 1,200 access points with directional antennas.
              </p>
              <p className="text-green-600 text-sm font-semibold">Result: 80 Mbps average throughput per user</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Hospital Campus Wireless Network</h3>
              <p className="text-slate-700 text-sm mb-4">
                Planned healthcare Wi-Fi for 500-bed hospital and medical campus. 
                Integrated RTLS for asset tracking, supported 5,000+ medical devices.
              </p>
              <p className="text-green-600 text-sm font-semibold">Result: 99.999% uptime for clinical systems</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Hotel Chain WiFi Standardization</h3>
              <p className="text-slate-700 text-sm mb-4">
                Designed standardized Wi-Fi 6 solution deployed across 50 hotel properties. 
                Cloud-managed architecture with centralized policies.
              </p>
              <p className="text-green-600 text-sm font-semibold">Result: Supports 10,000+ concurrent guests nightly</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h3 className="font-bold text-slate-900 mb-3">Manufacturing Facility Industrial Wi-Fi</h3>
              <p className="text-slate-700 text-sm mb-4">
                Engineered Wi-Fi for 800,000 sq ft manufacturing facility with extreme RF challenges. 
                Supported 500+ mobile devices and tablets.
              </p>
              <p className="text-green-600 text-sm font-semibold">Result: Deterministic latency for automated systems</p>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* FAQs Section */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Common Questions Answered"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12 space-y-6">
          {[
            {
              q: 'How many access points do I need for my building?',
              a: 'Depends on coverage area, user density, building materials, and capacity requirements. Typically 1 AP per 2,000-3,000 sq ft for standard offices, more for high-density areas.'
            },
            {
              q: 'Should I upgrade to Wi-Fi 6 or Wi-Fi 6E?',
              a: 'Wi-Fi 6E offers significant advantages with 6 GHz spectrum (less interference, more capacity) but requires compatible client devices. We analyze your device ecosystem to recommend optimal technology.'
            },
            {
              q: 'How long does Wi-Fi network planning take?',
              a: 'Small offices: 1-2 weeks; medium facilities: 2-4 weeks; large campuses: 4-12 weeks depending on complexity and survey requirements.'
            },
            {
              q: 'What\'s included in a site survey?',
              a: 'RF measurements, coverage heat maps, interference analysis, AP placement recommendations, channel planning, and validation testing.'
            },
            {
              q: 'Can Wi-Fi support real-time applications like voice and video?',
              a: 'Yes, with proper QoS configuration, adequate capacity planning, and modern Wi-Fi 6/6E technology supporting prioritized traffic and low-latency applications.'
            },
            {
              q: 'How do you handle Wi-Fi security?',
              a: 'We implement WPA3 encryption, 802.1X authentication, network segmentation, guest isolation, wireless intrusion detection, and industry compliance (PCI-DSS, HIPAA, etc.).'
            },
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg">
              <h3 className="font-bold text-slate-900 mb-3">Q: {faq.q}</h3>
              <p className="text-slate-700">A: {faq.a}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Get Started Section */}
      <Section className="bg-white">
        <SectionHeading
          title="Get Started Today"
          subtitle="Enterprise Wi-Fi Planning Made Simple"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <p className="text-slate-700 text-center text-lg mb-8">
            Ready to deploy enterprise-grade wireless connectivity? Contact us today for:
          </p>
          <ul className="space-y-3 text-slate-700 mb-8 max-w-2xl mx-auto">
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Complimentary Wi-Fi assessment and preliminary analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Coverage and capacity planning recommendations</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Technology guidance (Wi-Fi 6/6E/7 selection)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Predictive site survey and detailed heat maps</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Project scoping and cost estimation</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-600 font-bold">✓</span>
              <span>Consultation with our RF engineering team</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg">
                Contact Us <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <button
              onClick={() => {
                const contactForm = document.querySelector('form');
                if (contactForm) {
                  const serviceSelect = contactForm.querySelector('select[name="serviceType"]') as HTMLSelectElement;
                  if (serviceSelect) {
                    serviceSelect.value = 'wifi';
                    contactForm.scrollIntoView({ behavior: 'smooth' });
                  }
                }
              }}
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors"
            >
              Request Site Survey <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </Section>

      {/* Download Resources Section */}
      <Section className="bg-slate-50">
        <SectionHeading
          title="Download Resources"
          subtitle="Planning Guides and Best Practices"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-3xl mx-auto">
          {[
            'White Paper: "Wi-Fi 6E Planning and Design Guide"',
            'Guide: "High-Density Wi-Fi Best Practices"',
            'Checklist: "Enterprise Wi-Fi Project Planning"',
            'Comparison: "Wi-Fi 6 vs. Wi-Fi 6E vs. Wi-Fi 7"',
            'Template: "Wi-Fi Requirements Questionnaire"',
            'Case Study Collection: "Successful Wi-Fi Deployments"',
          ].map((resource, idx) => (
            <button
              key={idx}
              className="p-4 bg-white rounded-lg border-2 border-green-600 text-green-600 font-semibold hover:bg-green-50 transition-colors text-left"
            >
              {resource}
            </button>
          ))}
        </div>
      </Section>

      {/* Contact Section */}
      <Section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-32">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Enterprise-Grade Wi-Fi?</h2>
          <p className="text-xl mb-8 text-green-50">
            Let's discuss how we can deliver reliable wireless connectivity for your organization.
          </p>
          <Link to="/contact">
            <Button className="text-green-600 hover:bg-gray-50 shadow-lg hover:shadow-xl px-8 py-4 text-lg font-semibold">
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Button>
          </Link>
        </div>
      </Section>

      {/* END: Enterprise Wi-Fi Network Planning Page */}
    </>
  );
}
