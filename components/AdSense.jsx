'use client';

export default function AdSense({ slot, format = 'auto' }) {
  // AdSense will be activated once the account is approved
  // This component renders the ad placeholder
  return (
    <div className="ad-container" style={{ textAlign: 'center', margin: '2rem 0', minHeight: '90px' }}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID || ''}
        data-ad-slot={slot || ''}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
