"use client";

import React, { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, Monitor, Github, Mail, Layout, Code, Play } from 'lucide-react';
import GlassSurface from './GlassSurface';

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Only mount if no reduced motion (or allow it but without animations)
    const down = (e) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4 pt-[20vh] animate-fade-in pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/40 backdrop-blur-md pointer-events-auto" 
        onClick={() => setOpen(false)}
      />
      
      {/* Dialog */}
      <div className="relative w-full max-w-2xl pointer-events-auto">
        <GlassSurface variant="modal" tier="full" className="rounded-xl overflow-hidden shadow-2xl border-2 border-tracker-cyan/50">
          <Command 
            className="w-full bg-transparent text-white font-terminal"
            label="Command Menu"
            shouldFilter={true}
          >
            <div className="flex items-center border-b border-white/20 px-4">
              <Search className="w-5 h-5 text-tracker-cyan shrink-0" />
              <Command.Input 
                autoFocus 
                placeholder="Search projects, actions, or jump to..." 
                className="w-full bg-transparent border-none focus:ring-0 text-lg px-4 py-4 placeholder-white/30 text-white outline-none"
              />
              <div className="text-[10px] bg-white/10 px-2 py-1 rounded text-white/50 border border-white/20">ESC</div>
            </div>

            <Command.List className="max-h-[300px] overflow-y-auto p-2 scrollbar-hide">
              <Command.Empty className="py-6 text-center text-white/50 text-sm">
                No results found. Maybe in another universe?
              </Command.Empty>

              <Command.Group heading="Navigation" className="text-[10px] tracking-widest text-tracker-cyan/70 p-2 uppercase">
                <Command.Item onSelect={() => setOpen(false)} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm cursor-pointer hover:bg-white/10 aria-selected:bg-tracker-cyan/20 aria-selected:text-tracker-cyan">
                  <Layout className="w-4 h-4" /> Go to Mission Brief (Home)
                </Command.Item>
                <Command.Item onSelect={() => setOpen(false)} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm cursor-pointer hover:bg-white/10 aria-selected:bg-tracker-cyan/20 aria-selected:text-tracker-cyan">
                  <Code className="w-4 h-4" /> View Sightings (Projects)
                </Command.Item>
              </Command.Group>

              <Command.Separator className="h-px bg-white/10 my-2" />

              <Command.Group heading="Quick Actions" className="text-[10px] tracking-widest text-tracker-cyan/70 p-2 uppercase">
                <Command.Item onSelect={() => { window.open('https://github.com', '_blank'); setOpen(false); }} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm cursor-pointer hover:bg-white/10 aria-selected:bg-tracker-cyan/20 aria-selected:text-tracker-cyan">
                  <Github className="w-4 h-4" /> Open GitHub Logs
                </Command.Item>
                <Command.Item onSelect={() => { navigator.clipboard.writeText('hello@example.com'); setOpen(false); }} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm cursor-pointer hover:bg-white/10 aria-selected:bg-tracker-cyan/20 aria-selected:text-tracker-cyan">
                  <Mail className="w-4 h-4" /> Copy Encrypted Comm (Email)
                </Command.Item>
                <Command.Item onSelect={() => setOpen(false)} className="flex items-center gap-2 px-3 py-3 rounded-lg text-sm cursor-pointer hover:bg-white/10 aria-selected:bg-tracker-cyan/20 aria-selected:text-tracker-cyan">
                  <Monitor className="w-4 h-4" /> Override Visuals (Toggle Theme)
                </Command.Item>
              </Command.Group>
            </Command.List>
          </Command>
        </GlassSurface>
      </div>
      
      <style jsx global>{`
        [cmdk-item][aria-selected="true"] {
          background-color: rgba(94, 234, 212, 0.2);
          color: #5eead4;
        }
      `}</style>
    </div>
  );
}
