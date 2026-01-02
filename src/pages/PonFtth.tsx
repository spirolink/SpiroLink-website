import { Section, SectionHeading } from '../components/ui/Section';

export default function PonFtth() {
  return (
    <>
      {/* START: PON & FTTH MODULE - FULL PAGE */}
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            PON & FTTH Network Planning Services
          </h1>
          <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
            Comprehensive engineering services for designing, scaling,
            and upgrading fiber access networks.
          </p>
        </div>
      </Section>

      {/* FTTH Network Planning */}
      <Section className="bg-white">
        <SectionHeading 
          title="FTTH Network Planning" 
          subtitle="Foundation for Success"
          centered={false}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Service area analysis, topology selection, CO & hub planning
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Comprehensive demand forecasting and market analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Service territory mapping and density analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Optimal topology selection for your deployment model</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Central office and hub site planning</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* PON Technology Design */}
      <Section className="bg-slate-50">
        <SectionHeading 
          title="PON Technology Design" 
          subtitle="Architecture Selection"
          centered={false}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            GPON, XG-PON, XGS-PON, NG-PON2, EPON
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Technology selection based on service requirements and budget</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>PON port density and port configuration planning</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>OLT and ONU equipment selection and compatibility</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Future technology upgrade pathways</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* ODN Engineering */}
      <Section className="bg-white">
        <SectionHeading 
          title="ODN Engineering" 
          subtitle="Optical Distribution Network"
          centered={false}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Split ratios, fiber routing, FDH, NAP, splice planning
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Optimal splitter configuration and split ratios (1:16 to 1:128)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Fiber route planning for aerial, underground, and submarine routes</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>FDH (First Distribution Hub) and NAP (Network Access Point) design</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Splice point planning and cable management strategies</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Capacity & Coverage */}
      <Section className="bg-slate-50">
        <SectionHeading 
          title="Capacity & Coverage Planning" 
          subtitle="Sizing for Growth"
          centered={false}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Port sizing, take-rate modeling, bandwidth forecasting
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Homes Passed (HHP) and Serviceable Addressable Market (SAM) analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Take-rate and penetration modeling by customer segment</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>PON port utilization planning and expansion strategies</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Bandwidth forecasting and service tier planning</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Network Migration */}
      <Section className="bg-white">
        <SectionHeading 
          title="Network Migration" 
          subtitle="Technology Transitions"
          centered={false}
        />
        <div className="max-w-3xl mx-auto">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            Copper/HFC to FTTH, GPON to XGS-PON upgrades
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Legacy network retirement and migration schedules</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>GPON to XGS-PON upgrade pathways and hardware reuse</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Customer migration strategies and service continuity planning</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">•</span>
              <span>Network overlap management during deployment phases</span>
            </li>
          </ul>
        </div>
      </Section>

      {/* Design Approach */}
      <Section className="bg-slate-50">
        <SectionHeading 
          title="Our Design Approach" 
          subtitle="Six-Step Methodology"
          centered={true}
        />
        <div className="max-w-3xl mx-auto mt-12">
          <ol className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">1</span>
              <span>Demand & serving area analysis</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">2</span>
              <span>PON architecture & split strategy definition</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">3</span>
              <span>ODN & fiber route engineering</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">4</span>
              <span>Optical loss budget & performance modeling</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">5</span>
              <span>Scalability & migration planning</span>
            </li>
            <li className="flex gap-3">
              <span className="font-semibold text-green-600 flex-shrink-0">6</span>
              <span>Construction-ready documentation</span>
            </li>
          </ol>
        </div>
      </Section>

      {/* PON Technologies */}
      <Section className="bg-white">
        <SectionHeading 
          title="PON Technologies" 
          subtitle="Next-Generation Solutions"
          centered={true}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">🟢 GPON</h3>
            <p className="text-slate-600">Cost-effective broadband deployment for residential and business customers with proven market maturity.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">⚡ XGS-PON</h3>
            <p className="text-slate-600">Symmetric 10G for future-ready networks with premium services and competitive broadband performance.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">🔷 NG-PON2</h3>
            <p className="text-slate-600">Multi-wavelength, high-capacity access for enterprise deployments and long-reach applications.</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-slate-900 mb-2">🌐 EPON / 10G-EPON</h3>
            <p className="text-slate-600">Ethernet-based PON solutions for flexible deployments and alternative technology strategies.</p>
          </div>
        </div>
      </Section>

      {/* Network Capabilities */}
      <Section className="bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Network Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Split Ratios</h3>
              <p className="text-slate-600">1:16 to 1:128 configurations optimized for your service area density</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Reach</h3>
              <p className="text-slate-600">20–60 km network reach supporting both short and long-distance deployments</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Deployment Types</h3>
              <p className="text-slate-600">Aerial, underground, and submarine routes with optimized cost-benefit analysis</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industries Served */}
      <Section className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-8 text-center">Industries Served</h2>
          <p className="text-slate-700 text-lg leading-relaxed text-center mb-8">
            ISPs, telecom operators, municipalities, utilities, enterprises, real estate developers, and rural broadband initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Public Sector</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Municipalities</li>
                <li>• Public utilities</li>
                <li>• Government agencies</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Telecom & ISPs</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Broadband providers</li>
                <li>• Telecom operators</li>
                <li>• Wireless carriers</li>
              </ul>
            </div>
            <div className="bg-slate-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-slate-900 mb-3">Enterprise</h3>
              <ul className="text-slate-600 space-y-2 text-sm">
                <li>• Data centers</li>
                <li>• Real estate developers</li>
                <li>• Educational institutions</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - FULL PAGE */}
    </>
  );
}
