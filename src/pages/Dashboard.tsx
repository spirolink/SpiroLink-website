import { Link } from 'react-router-dom';
import { ArrowRight, LogOut } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { useAuth } from '../contexts/AuthContext';

const PRIMARY_COLOR = '#0EA5E9';

export default function Dashboard() {
  const { logout, user } = useAuth();

  const services = [
    {
      title: 'Enterprise Network Planning',
      description: 'Enterprise Wi-Fi Network site surveys and RF coverage analysis',
    },
    {
      title: 'PON & FTTH Planning',
      description: 'FTTH Network Planning and PON Technology Design services',
    },
    {
      title: 'Microwave & Optical Design',
      description: 'RF coverage analysis, link budget analysis and implementation',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <p className="text-sm text-gray-600 mt-1">Welcome, {user?.email || 'User'}</p>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Services Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-200 p-6 flex flex-col"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ color: index === 1 ? PRIMARY_COLOR : 'inherit' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                {index === 1 && (
                  <div className="h-1 mt-4" style={{ backgroundColor: PRIMARY_COLOR }}></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto text-white px-8 py-3 rounded-lg font-semibold transition-all hover:shadow-lg" style={{ backgroundColor: PRIMARY_COLOR }}>
                View All Services <ArrowRight className="w-5 h-5 ml-2 inline" />
              </Button>
            </Link>
            <Link to="/contact" className="flex-1 sm:flex-none">
              <Button className="w-full sm:w-auto border-2 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all" style={{ borderColor: PRIMARY_COLOR, color: PRIMARY_COLOR }}>
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
