import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { Section, SectionHeading } from '../components/ui/Section';
<<<<<<< HEAD
=======
import { useI18n } from '../i18n/I18nProvider';
>>>>>>> origin/sampritha-branch

interface DownloadItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  file: string;
}

const downloadItems: DownloadItem[] = [
  {
    id: 'ftth-best-practices',
    icon: '📄',
    title: 'FTTH Network Planning Best Practices',
    description: 'Comprehensive guide for designing scalable fiber networks',
    file: 'assets/downloads/FTTH_Network_Planning_Best_Practices.txt',
  },
  {
    id: 'pon-technology',
    icon: '📘',
    title: 'Choosing the Right PON Technology',
    description: 'Technical comparison of GPON, XGS-PON, NG-PON2, and EPON',
    file: 'assets/downloads/Choosing_the_Right_PON_Technology.txt',
  },
  {
    id: 'project-checklist',
    icon: '✅',
    title: 'FTTH Project Planning Essentials',
    description: 'Complete project planning checklist and methodology',
    file: 'assets/downloads/FTTH_Project_Planning_Essentials.txt',
  },
  {
    id: 'cost-calculator',
    icon: '📊',
    title: 'Cost Per Home Passed Estimator',
    description: 'Excel calculator for cost estimation and budgeting',
    file: 'assets/downloads/Cost_Per_Home_Passed_Estimator.txt',
  },
  {
    id: 'grant-template',
    icon: '📝',
    title: 'Grant Application Technical Documentation',
    description: 'Template and guidelines for grant applications',
    file: 'assets/downloads/Grant_Application_Technical_Documentation.txt',
  },
];

export default function Resources() {
<<<<<<< HEAD
=======
  const { t } = useI18n();
>>>>>>> origin/sampritha-branch
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [selectedFile, setSelectedFile] = useState<DownloadItem | null>(null);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleDownloadClick = (item: DownloadItem) => {
    setSelectedFile(item);
    setShowModal(true);
    setEmailError('');
    setEmail('');
  };

  const handleConfirmDownload = () => {
    if (!email.trim()) {
      setEmailError('Please enter your email address');
      return;
    }

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    if (selectedFile) {
      console.log('Download tracked:', {
        email: email,
        file: selectedFile.title,
        fileName: selectedFile.file,
        time: new Date().toISOString(),
      });

      const link = document.createElement('a');
      link.href = selectedFile.file;
      link.download = selectedFile.file.split('/').pop() || 'download';
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setShowModal(false);
      setEmail('');
      setSelectedFile(null);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEmail('');
    setEmailError('');
    setSelectedFile(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleConfirmDownload();
    }
  };

  return (
    <>
      {/* START: PON & FTTH MODULE - RESOURCES PAGE */}
      <Section className="bg-gradient-to-br from-green-50 to-blue-50 py-32">
        <div className="text-center max-w-3xl mx-auto">
<<<<<<< HEAD
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">Download Resources</h1>
          <p className="text-xl text-slate-700">
            Access detailed technical documents, planning tools, and templates to support your FTTH and PON network projects.
=======
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">{t('resourcesPageTitle')}</h1>
          <p className="text-xl text-slate-700">
            {t('resourcesPageDescription')}
>>>>>>> origin/sampritha-branch
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading 
<<<<<<< HEAD
          title="Download Resources & Tools" 
          subtitle="Free Technical Resources"
=======
          title={t('resourcesDownloadTitle')} 
          subtitle={t('resourcesDownloadSubtitle')}
>>>>>>> origin/sampritha-branch
          centered={true}
        />
        <div className="max-w-4xl mx-auto mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadItems.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{item.description}</p>
                <button
                  onClick={() => handleDownloadClick(item)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  <Download className="w-4 h-4" />
<<<<<<< HEAD
                  Download
=======
                  {t('resourcesDownloadBtn')}
>>>>>>> origin/sampritha-branch
                </button>
              </div>
            ))}
          </div>
        </div>
      </Section>
      {/* END: PON & FTTH MODULE - RESOURCES PAGE */}

      {/* Email Gate Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8">
            <div className="flex items-center justify-between mb-4">
<<<<<<< HEAD
              <h2 className="text-2xl font-bold text-slate-900">Download Resource</h2>
=======
              <h2 className="text-2xl font-bold text-slate-900">{t('resourcesModalTitle')}</h2>
>>>>>>> origin/sampritha-branch
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 mb-6">
<<<<<<< HEAD
              Enter your email to download{' '}
              <span className="font-semibold">{selectedFile?.title}</span>
=======
              {t('resourcesModalDescription')} <span className="font-semibold">{selectedFile?.title}</span>
>>>>>>> origin/sampritha-branch
            </p>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
<<<<<<< HEAD
                Email Address
=======
                {t('resourcesEmailLabel')}
>>>>>>> origin/sampritha-branch
              </label>
              <input
                id="email"
                type="email"
<<<<<<< HEAD
                placeholder="your@email.com"
=======
                placeholder={t('resourcesEmailPlaceholder')}
>>>>>>> origin/sampritha-branch
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              {emailError && (
                <p className="text-red-600 text-sm mt-2">{emailError}</p>
              )}
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleConfirmDownload}
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition-colors"
              >
<<<<<<< HEAD
                Download
=======
                {t('resourcesDownloadBtnModal')}
>>>>>>> origin/sampritha-branch
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-2 rounded-lg transition-colors"
              >
<<<<<<< HEAD
                Cancel
=======
                {t('resourcesCancelBtn')}
>>>>>>> origin/sampritha-branch
              </button>
            </div>

            <p className="text-slate-500 text-xs mt-4 text-center">
<<<<<<< HEAD
              We respect your privacy. Your email will only be used for download tracking.
=======
              {t('resourcesPrivacyNotice')}
>>>>>>> origin/sampritha-branch
            </p>
          </div>
        </div>
      )}
    </>
  );
}
