import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Luma Dental Clinic | Modern Dental Care',
  description:
    'Premium dental clinic website offering cosmetic, restorative, and family dentistry with advanced technology and compassionate care.',
  keywords: ['dental clinic', 'dentist', 'cosmetic dentistry', 'teeth whitening', 'implants'],
  alternates: { canonical: 'https://lumadental.example.com' },
  openGraph: {
    title: 'Luma Dental Clinic',
    description: 'Comprehensive dental care for individuals and families with modern technology.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Dentist',
              name: 'Luma Dental Clinic',
              url: 'https://lumadental.example.com',
              telephone: '+1-800-555-0148',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '128 Harbor Avenue',
                addressLocality: 'Seattle',
                addressRegion: 'WA',
                postalCode: '98101',
                addressCountry: 'US',
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '09:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '10:00',
                  closes: '14:00',
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
