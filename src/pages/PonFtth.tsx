import { Section, SectionHeading } from '../components/ui/Section';
import { ServiceHero, ServiceSection, ServiceCard, CTA } from '../components/ServiceDetailLayout';

const rotate3dClasses = ['rotate-3d-1', 'rotate-3d-2', 'rotate-3d-3', 'rotate-3d-4', 'rotate-3d-5'];
const getRotateClass = (idx: number) => rotate3dClasses[idx % rotate3dClasses.length];

export default function PonFtth() {
  return (
    <>
      <ServiceHero
        title="FTTH Networks Must Be Planned for Growth, Not Just Coverage"
        description="Once fiber is in the ground, design mistakes are difficult and costly to correct. Short-term planning around splits, take-rates, or technology choices often limits flexibility as demand increases. We plan FTTH networks that remain operationally stable and financially viable as subscriber density, bandwidth, and services evolve."
        badge="FTTH Network Planning"
        badgeIcon="🌐"
        themeColor="cyan"
      />

      <Section className="bg-white relative py-20">
        <SectionHeading
          title="Intro"
          subtitle="Planning FTTH for Long-Term Growth"
          centered={true}
        />
        <div className="mt-12 overflow-hidden">
          <div className="max-w-3xl mx-auto mt-8">
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              In practice, many FTTH networks are designed to meet initial coverage targets rather than long-term operational reality. As take-rates rise and bandwidth consumption increases, early design choices around split ratios, feeder capacity, and PON architecture can quietly limit scalability.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed mb-8">
              Because the outside plant is permanent, correcting these constraints later often requires costly redesigns, service disruption, or accelerated capital spending.
            </p>
            <p className="text-slate-700 text-lg leading-relaxed">
              At SpiroLink, we design FTTH networks with growth, economics, and upgrade paths in mind—so the network continues to perform predictably as demand evolves, not just at initial deployment.
            </p>
          </div>
        </div>
      </Section>

      <ServiceSection title="Why FTTH Networks Struggle as They Scale" subtitle="Common Planning Pitfalls" isDark={false} themeColor="cyan">
        <div className="max-w-4xl mx-auto space-y-3">
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-slate-700"><span className="font-semibold">Initial Coverage Goals Override Growth Planning:</span> FTTH networks are often planned around early coverage goals rather than long-term adoption. When take-rates rise faster than expected, feeder capacity and split designs become immediate constraints.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-slate-700"><span className="font-semibold">Split Ratios Limit Future Bandwidth:</span> Split ratios selected for initial economics frequently limit future bandwidth growth, forcing earlier-than-planned upgrades or overlay builds.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-slate-700"><span className="font-semibold">PON Architecture Lock-In:</span> PON architecture choices made too early can restrict technology migration paths, increasing complexity when moving from GPON to XGS-PON or beyond.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-slate-700"><span className="font-semibold">Inaccurate Demand Forecasting:</span> Inaccurate demand forecasting leads to uneven utilization, with some areas saturating while others remain underused, complicating operational planning.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-cyan-500">
            <p className="text-slate-700"><span className="font-semibold">Costly Outside Plant Corrections:</span> Because the outside plant is permanent, correcting these limitations later often requires additional fiber builds, service disruption, or increased capital expenditure.</p>
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="Where We Design FTTH Networks" subtitle="Industries and Operator Types">
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-6 slide-left-right">
            {[
              { title: "Telecom Operators & ISPs", desc: "As subscriber density and bandwidth demand increase, access networks must scale without breaking the business model. We design FTTH networks that accommodate growth in take-rate, speed tiers, and services without forcing disruptive redesigns.", color: "from-cyan-50 to-blue-50", border: "border-cyan-200" },
              { title: "Utilities & Energy Providers", desc: "Utilities deploying fiber for smart grid and broadband services require reliable access networks that coexist with operational infrastructure. We design FTTH networks that support multi-use objectives without compromising reliability.", color: "from-blue-50 to-sky-50", border: "border-blue-200" },
              { title: "Real Estate Developers & Smart Communities", desc: "New developments demand future-ready connectivity from day one. We design FTTH architectures that support phased occupancy, technology upgrades, and long-term service flexibility.", color: "from-sky-50 to-cyan-50", border: "border-sky-200" },
              { title: "Rural & Underserved Regions", desc: "Low-density areas require careful planning to balance coverage, cost, and performance. We design FTTH networks that maximize reach while preserving upgrade paths as adoption grows.", color: "from-cyan-50 to-indigo-50", border: "border-cyan-200" }
            ].map((item, idx) => (
              <div key={idx} className={`group relative ${getRotateClass(idx)} flex-shrink-0 w-80`}>
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className={`relative p-6 bg-gradient-to-br ${item.color} rounded-lg border ${item.border} hover:border-cyan-400/50 transition-all duration-300 card-glow`}>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-cyan-700 transition-colors">{item.title}</h3>
                  <p className="text-slate-700 group-hover:text-slate-800 transition-colors">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ServiceSection>

      <ServiceSection title="The SpiroLink Advantage" subtitle="How We Design FTTH Networks" isDark themeColor="cyan">
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            { title: 'Designed for Take-Rate Reality', desc: 'We design FTTH networks with realistic adoption curves in mind—not just theoretical coverage targets. This ensures feeder capacity, splits, and aggregation points scale smoothly as subscribers come online.' },
            { title: 'Upgrade Paths Without Rebuilds', desc: 'FTTH networks should evolve without forcing major ODN changes. We design architectures that support GPON, XGS-PON, and next-generation PON migration without outside plant disruption.' },
            { title: 'Balanced Economics', desc: 'Every design decision considers long-term cost, not just initial capex. We balance split ratios, port utilization, and fiber counts to protect ROI as service demand evolves.' },
            { title: 'Vendor-Neutral Planning', desc: 'Our FTTH designs are driven by density, demand, and growth—not by vendor lock-in. This keeps operators flexible as technologies and suppliers change.' },
            { title: 'Documentation That Supports Operations', desc: 'Clear design documentation is critical years after deployment. We deliver planning outputs that allow operations teams to manage, expand, and troubleshoot the network with confidence.' },
            { title: 'Ownership Mindset', desc: 'We work as long-term partners, taking shared responsibility for how FTTH networks perform over their lifecycle—not just how they are initially deployed.' },
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="font-bold text-xl flex-shrink-0" style={{color: '#0C94CE'}}>✓</span>
              <div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="FTTH 'Did You Know?' Insight Cards" subtitle="Key Concepts That Drive Better FTTH Design" themeColor="cyan">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              step: '1',
              title: 'Timing Isn\'t Passive',
              description: 'In a PON, upstream bandwidth isn\'t free — it is actively scheduled by the OLT to avoid collisions among ONUs at different distances. The OLT allocates timeslots and power levels dynamically (via GATE/REPORT maps and PLOAM messaging). This timing control impacts how many ONUs you can support and how effectively bandwidth is shared — a dimension that pure fiber budget calculations don\'t capture.'
            },
            {
              step: '2',
              title: 'Loss Budgets Are Dominated by Splitting & Connectors',
              description: 'FTTH optical loss budgets are governed more by splitters, connectors, and splices than by fiber length. Each splitter\'s insertion loss and return loss adds up quickly, consuming margin before you even reach long spans. Mis-characterized connector loss or poor splice quality can silently erode performance long before physical distance becomes a concern.'
            },
            {
              step: '3',
              title: 'Next-Gen PON Isn\'t Just Faster GPON',
              description: 'Moving from GPON to XGS-PON or 10G-class PON isn\'t simply "higher speed" — it introduces distinct wavelength, coexistence, and channel planning requirements that influence the ODN design. Higher-speed PON variants use different or additional upstream/downstream wavelengths and may require tighter power and reflectance control. Poor wavelength planning can limit coexistence or future upgrades on the same fiber plant.'
            },
            {
              step: '4',
              title: 'Split Ratio Is a Physical Constraint, Not a Marketing Choice',
              description: 'Designing with a 1:64 split isn\'t just a cost decision — it changes optical power distribution, ONU sensitivity margins, and upstream timing windows. Higher split ratios increase optical attenuation and widen timing jitter windows, reducing overall margin and making the link more sensitive to fiber imperfections. Good planning balances economics with long-term signal integrity.'
            },
            {
              step: '5',
              title: 'Feeder Fiber Counts Limit Future Flexibility',
              description: 'Feeder fiber exhaustion — not just access fiber — is one of the most common reasons FTTH upgrades get constrained. Underestimating feeder counts forces later restructures or regeneration points. Adding feeders after initial deployment is significantly more expensive and disruptive than planning appropriate feeder capacity upfront.'
            },
            {
              step: '6',
              title: 'Uniform Designs Increase Operational Complexity',
              description: 'Using identical split design across all zones may simplify planning, but it hides real performance differences across dense, suburban, and rural areas. Different zone characteristics (take-rate, distances, latency needs) require tailored split and feeder strategies to ensure consistent QoS and efficient utilization without overbuilding or under-serving.'
            },
          ].map((phase, idx) => (
            <div key={idx} className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 text-white rounded-full flex items-center justify-center font-bold" style={{backgroundColor: '#0C94CE'}}>
                  {phase.step}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-2">{phase.title}</h4>
                  <p className="text-slate-700 text-sm">{phase.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ServiceSection>

      <ServiceSection title="Industries & Use Cases" subtitle="Who We Serve" isDark themeColor="cyan">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Fiber-to-the-Home (FTTH)</h3>
            <p className="text-slate-700 text-sm">Residential broadband networks delivering high-speed connectivity to individual homes and small businesses.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Multi-Dwelling Units (MDU)</h3>
            <p className="text-slate-700 text-sm">Apartments, condos, and multi-tenant buildings with shared fiber infrastructure and optimized cost structure.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Smart Cities</h3>
            <p className="text-slate-700 text-sm">Public broadband networks supporting IoT, smart grid, public safety, and smart city service delivery.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Rural Broadband</h3>
            <p className="text-slate-700 text-sm">Underserved areas with federal/state funding utilizing FTTH for economic development and digital inclusion.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Enterprise Campus</h3>
            <p className="text-slate-700 text-sm">Large organizations and corporate campuses deploying fiber for internal connectivity and external services.</p>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Municipal Networks</h3>
            <p className="text-slate-700 text-sm">Public utility networks operated by cities and municipalities for community broadband service delivery.</p>
          </div>
        </div>
      </ServiceSection>

      <Section className="bg-white relative py-16">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Ready for Your FTTH Network?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Contact us today for network planning, technology selection, detailed design, feasibility analysis, and full implementation support for your PON and FTTH initiative.
      <ServiceSection title="Get Clarity on Your FTTH Plan Before You Build" subtitle="Thinking-First Approach" isDark={false} themeColor="cyan">
        <div className="max-w-3xl mx-auto mt-8">
          <p className="text-slate-700 text-lg leading-relaxed mb-6">
            FTTH networks are long-lived infrastructure, and early design decisions—split ratios, feeder fiber counts, technology migration paths—determine long-term performance and cost.
          </p>
          <p className="text-slate-700 text-lg leading-relaxed">
            Before finalizing your access network strategy, it helps to validate capacity assumptions, upgrade paths, and signal margin expectations with an experienced optical & PON planning perspective.
          </p>
        </div>
      </ServiceSection>

      <ServiceSection title="FTTH-Specific FAQ" subtitle="Common Questions About Our Approach" isDark={false} themeColor="cyan">
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Can you plan FTTH networks for mixed technology environments?</h3>
            <p className="text-slate-700">Yes. We design FTTH networks that support both GPON and next-generation PON (XGS-PON and beyond), and we ensure the ODN and wavelength plan allow clean coexistence and upgrade paths.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">What factors determine FTTH split ratio decisions?</h3>
            <p className="text-slate-700">Split ratio is tied to optical loss budgets, ONU sensitivity, network density, and long-term bandwidth expectations. We model these factors explicitly rather than relying on defaults.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Do you work with existing ODN infrastructure?</h3>
            <p className="text-slate-700">Yes. We assess brownfield ODNs to identify hidden margin limitations, feasibility for upgrades, and optimal reuse of existing assets without compromising performance.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">How do you handle take-rate uncertainty?</h3>
            <p className="text-slate-700">We model multiple adoption scenarios and plan feeder capacity, split architecture, and aggregation so that performance remains predictable across reasonable demand curves.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Can you forecast FTTH backhaul and aggregation requirements?</h3>
            <p className="text-slate-700">Absolutely. We include aggregation planning and uplink capacity analysis as part of the FTTH design to ensure backhaul does not saturate before the access layer.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">Do you provide implementation support?</h3>
            <p className="text-slate-700">Our focus is planning and engineering. We provide comprehensive design documentation and can coordinate with qualified implementation partners where needed.</p>
          </div>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
            <h3 className="font-bold text-slate-900 mb-2">How do you balance cost and performance in FTTH design?</h3>
            <p className="text-slate-700">We optimize designs by balancing fiber counts, split ratios, feeder architecture, and technology choices to protect long-term ROI without compromising scalability.</p>
          </div>
        </div>
      </ServiceSection>

      <CTA
        title="Discuss Your FTTH Design Challenges"
        description="Review an existing or planned FTTH network, or discuss your access network strategy with our team"
      />
    </>
  );
}
