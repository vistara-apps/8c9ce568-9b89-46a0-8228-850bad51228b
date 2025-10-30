'use client';

import { Menu, Bell } from 'lucide-react';

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-bg border-b border-gray-800">
      <div className="flex items-center justify-between px-6 py-4">
        <button className="p-2 -ml-2 hover:bg-surface rounded-lg transition-colors">
          <Menu className="w-6 h-6 text-fg" />
        </button>
        
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <h1 className="text-xl font-bold text-fg">SignalStream</h1>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Trading Signals Platform</p>
        </div>

        <button className="p-2 -mr-2 hover:bg-surface rounded-lg transition-colors relative">
          <Bell className="w-6 h-6 text-fg" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-danger rounded-full" />
        </button>
      </div>
    </header>
  );
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
      />
    </svg>
  );
}
