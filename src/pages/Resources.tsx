import { useState } from 'react';
import { Download, X } from 'lucide-react';
import { Section, SectionHeading } from '../components/ui/Section';
import { useI18n } from '../i18n/I18nProvider';

interface DownloadItem {
  title: string;
  description: string;
  file: string;
}

export default function Resources() {
  const { t } = useI18n();
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
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">{t('resourcesPageTitle')}</h1>
          <p className="text-xl text-slate-700">
            {t('resourcesPageDescription')}
          </p>
        </div>
      </Section>

      <Section className="bg-white">
        <SectionHeading 
          title={t('resourcesDownloadTitle')} 
          subtitle={t('resourcesDownloadSubtitle')}
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
                  {t('resourcesDownloadBtn')}
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
              <h2 className="text-2xl font-bold text-slate-900">{t('resourcesModalTitle')}</h2>
              <button
                onClick={handleCloseModal}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-slate-600 mb-6">
              {t('resourcesModalDescription')} <span className="font-semibold">{selectedFile?.title}</span>
            </p>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-slate-700 mb-2"
              >
                {t('resourcesEmailLabel')}
              </label>
              <input
                id="email"
                type="email"
                placeholder={t('resourcesEmailPlaceholder')}
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
                {t('resourcesDownloadBtnModal')}
              </button>
              <button
                onClick={handleCloseModal}
                className="flex-1 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold py-2 rounded-lg transition-colors"
              >
                {t('resourcesCancelBtn')}
              </button>
            </div>

            <p className="text-slate-500 text-xs mt-4 text-center">
              {t('resourcesPrivacyNotice')}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
