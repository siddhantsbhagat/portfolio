"use client";

import React from 'react';

export default function Footer({ theme }) {
  const isWhite = theme === 'white';
  const divider = isWhite ? 'border-black/10' : 'border-white/10';
  const muted = isWhite ? 'text-black/40' : 'text-white/40';
  const linkCls = isWhite ? 'text-black/60 hover:text-black' : 'text-white/60 hover:text-white';
  const iconCls = isWhite ? 'text-black/50 hover:text-black' : 'text-white/50 hover:text-white';

  const navLinks = ['Home', 'Work', 'Projects', 'Resume'];

  const XIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5"><path d="M4 4l16 16m0-16L4 20" strokeLinecap="round"/></svg>;
  const LiIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
  const GhIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>;
  const YtIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>;
  const IgIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
  const EmIcon = () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;

  const socials = [
    { title: 'X', href: '#', Icon: XIcon },
    { title: 'LinkedIn', href: '#', Icon: LiIcon },
    { title: 'GitHub', href: '#', Icon: GhIcon },
    { title: 'YouTube', href: '#', Icon: YtIcon },
    { title: 'Instagram', href: '#', Icon: IgIcon },
    { title: 'Email', href: '#', Icon: EmIcon },
  ];

  return (
    <footer className={`w-full border-t ${divider} mt-8`}>
      <div className="max-w-2xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
        {/* Navigate */}
        <div className="flex flex-col items-center md:items-start">
          <p className={`font-sans text-xs font-semibold uppercase tracking-widest mb-6 ${muted}`}>Navigate</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-3 max-w-xs">
            {navLinks.map(l => (
              <a key={l} href="#" className={`font-sans text-sm transition-colors ${linkCls}`}>{l}</a>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div className="flex flex-col items-center md:items-start">
          <p className={`font-sans text-xs font-semibold uppercase tracking-widest mb-6 ${muted}`}>Connect</p>
          <div className="flex flex-wrap justify-center md:justify-start gap-5 max-w-[200px]">
            {socials.map(({ title, href, Icon }) => (
              <a key={title} href={href} target="_blank" rel="noopener noreferrer" title={title} className={`transition-colors ${iconCls}`}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={`border-t ${divider} py-6`}>
        <p className={`font-sans text-xs text-center ${muted}`}>
          &copy; 2024 Siddhant Bhagat. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
