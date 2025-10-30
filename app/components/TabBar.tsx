'use client';

import { Home, Search, TrendingUp, User } from 'lucide-react';

export function TabBar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-surface border-t border-gray-800 z-50">
      <div className="flex items-center justify-around px-6 py-3">
        <button className="flex flex-col items-center gap-1 text-primary">
          <Home className="w-6 h-6" />
          <span className="text-xs font-medium">Home</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-fg transition-colors">
          <Search className="w-6 h-6" />
          <span className="text-xs font-medium">Search</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-fg transition-colors">
          <TrendingUp className="w-6 h-6" />
          <span className="text-xs font-medium">Trending</span>
        </button>
        
        <button className="flex flex-col items-center gap-1 text-gray-400 hover:text-fg transition-colors">
          <User className="w-6 h-6" />
          <span className="text-xs font-medium">Profile</span>
        </button>
      </div>
    </nav>
  );
}
