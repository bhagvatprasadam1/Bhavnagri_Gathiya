export const APP_LINKS = {
  playStore: 'https://play.google.com/store/apps/details?id=in.sellonapp.bhagvatprasadam&pcampaignid=web_share',
  appStore: 'https://apps.apple.com/in/app/bhagvat-prasadam/id6751397354',
};

export function PlayStoreBadge({ className = '' }) {
  return (
    <a
      href={APP_LINKS.playStore}
      target="_blank"
      rel="noopener noreferrer"
      title="Download Bhagvat Prasadam App on Google Play"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black hover:bg-neutral-900 text-white transition-all shadow-sm hover:scale-105 select-none shrink-0 border border-neutral-700/60 ${className}`}
    >
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3.609 1.814L13.793 12 3.61 22.186c-.367-.34-.61-.83-.61-1.428V3.242c0-.598.243-1.088.61-1.428zm11.242 11.244l2.586 2.586-11.77 6.643 9.184-9.229zm0-2.116L5.667 1.713l11.77 6.643-2.586 2.586zm1.488 1.058l3.447-1.954c.762-.432.762-1.139 0-1.571l-3.447-1.954-2.116 2.74 2.116 2.739z" />
      </svg>
      <span className="text-[10px] font-bold tracking-tight leading-none">Play Store</span>
    </a>
  );
}

export function AppStoreBadge({ className = '' }) {
  return (
    <a
      href={APP_LINKS.appStore}
      target="_blank"
      rel="noopener noreferrer"
      title="Download Bhagvat Prasadam App on Apple App Store"
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black hover:bg-neutral-900 text-white transition-all shadow-sm hover:scale-105 select-none shrink-0 border border-neutral-700/60 ${className}`}
    >
      <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.76 1.05-1.82.93-2.88-.91.04-2 .6-2.65 1.36-.57.65-.97 1.72-.83 2.76 1.01.08 2.02-.54 2.55-1.24z" />
      </svg>
      <span className="text-[10px] font-bold tracking-tight leading-none">App Store</span>
    </a>
  );
}

export default function MobileAppHeaderBar() {
  return (
    <div className="bg-[#3B2418] text-[#FFF8E9] py-1 px-3 sm:px-4 text-center flex items-center justify-center relative select-none">
      <div className="max-w-7xl mx-auto w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 text-[10px] sm:text-xs">
        {/* Desktop / Tablet Text */}
        <span className="hidden sm:inline font-medium text-[#FFF8E9]/90">
          Install <strong className="text-white font-bold">Bhagvat Prasadam</strong> App &amp; Get{' '}
          <span className="font-extrabold text-[#E5A323] uppercase tracking-wide">
            2% Extra Discount
          </span>{' '}
          on App! Available on:
        </span>

        {/* Mobile Concise Text (fits cleanly on 1 single line with badges) */}
        <span className="inline sm:hidden font-medium text-[#FFF8E9]/90 text-[10px]">
          Install App &amp; Get{' '}
          <span className="font-black text-[#E5A323]">2% Off</span>:
        </span>

        {/* App Store / Play Store Badges */}
        <div className="inline-flex items-center gap-1.5 shrink-0">
          <PlayStoreBadge />
          <AppStoreBadge />
        </div>
      </div>
    </div>
  );
}
