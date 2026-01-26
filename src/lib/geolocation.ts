/**
 * Geolocation utility to detect user's country
 * Uses IP-based geolocation from free API
 */

export interface GeolocationData {
  country_code: string;
  country_name: string;
  city?: string;
  region?: string;
}

/**
 * Get user's country from their IP address
 * Uses multiple geolocation APIs with fallbacks
 */
export async function getUserCountry(): Promise<string | null> {
  // Try multiple APIs in order of reliability
  const apis = [
    {
      name: 'ipapi.co',
      url: 'https://ipapi.co/json/',
      extractCountry: (data: any) => data.country_code
    },
    {
      name: 'ip-api.com',
      url: 'https://ip-api.com/json/',
      extractCountry: (data: any) => data.countryCode
    },
    {
      name: 'ipwhois.io',
      url: 'https://ipwho.is/',
      extractCountry: (data: any) => data.country_code
    }
  ];

  for (const api of apis) {
    try {
      console.log(`Trying geolocation with ${api.name}...`);
      const response = await fetch(api.url, { 
        signal: AbortSignal.timeout(5000) 
      });
      
      if (!response.ok) {
        console.log(`${api.name} failed with status ${response.status}`);
        continue;
      }

      const data = await response.json();
      const countryCode = api.extractCountry(data);
      
      if (countryCode) {
        console.log(`Successfully detected country: ${countryCode} via ${api.name}`);
        return countryCode;
      }
    } catch (error) {
      console.log(`${api.name} error:`, error);
      continue;
    }
  }

  console.warn('All geolocation APIs failed');
  return null;
}

/**
 * Alternative geolocation method using browser's Geolocation API
 * Note: Requires user permission
 */
export function getUserCountryFromBrowser(): Promise<string | null> {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Use reverse geocoding to get country from coordinates
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
          );
          
          if (!response.ok) {
            resolve(null);
            return;
          }

          const data = await response.json();
          const address = data.address;
          
          // Try to extract country code from address
          const countryCode = address?.country_code?.toUpperCase() || null;
          resolve(countryCode);
        } catch (error) {
          console.warn('Reverse geocoding failed:', error);
          resolve(null);
        }
      },
      (error) => {
        console.warn('Browser geolocation error:', error);
        resolve(null);
      },
      {
        timeout: 5000,
        maximumAge: 3600000, // Cache for 1 hour
      }
    );
  });
}

/**
 * Get user's country with fallback strategies
 * 1. First tries IP-based geolocation (no permission needed)
 * 2. Falls back to browser geolocation if IP fails (requires permission)
 */
export async function detectUserCountry(): Promise<string | null> {
  // First try IP-based geolocation (no permission required)
  const ipCountry = await getUserCountry();
  if (ipCountry) {
    return ipCountry;
  }

  // Fallback to browser geolocation (requires permission)
  const browserCountry = await getUserCountryFromBrowser();
  return browserCountry;
}

/**
 * Map language to likely country code
 * Useful for setting a default country based on language selection
 */
export const languageToCountryMap: Record<string, string> = {
  en: 'US', // Default to US for English
  hi: 'IN', // Hindi → India
  es: 'ES', // Spanish → Spain
  fr: 'FR', // French → France
  ar: 'SA', // Arabic → Saudi Arabia
  de: 'DE', // German → Germany
  pt: 'BR', // Portuguese → Brazil
  zh: 'CN', // Chinese → China
  ja: 'JP', // Japanese → Japan
  ru: 'RU', // Russian → Russia
  it: 'IT', // Italian → Italy
  ko: 'KR', // Korean → South Korea
};

/**
 * Get suggested country based on selected language
 */
export function getCountryFromLanguage(languageCode: string): string | null {
  return languageToCountryMap[languageCode] || null;
}
