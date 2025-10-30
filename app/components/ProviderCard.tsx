'use client';

import { TrendingUp, Users } from 'lucide-react';

interface ProviderCardProps {
  provider: {
    id: string;
    name: string;
    avatar: string;
    reputation: number;
    winRate: string;
    totalSignals: number;
    followers: string;
    price: string;
  };
}

export function ProviderCard({ provider }: ProviderCardProps) {
  return (
    <div className="bg-surface rounded-lg p-4 shadow-card hover:shadow-xl transition-shadow">
      {/* Provider Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl">
            {provider.avatar}
          </div>
          <div>
            <h3 className="font-bold text-fg text-lg">{provider.name}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs text-success font-medium">
                {provider.reputation}% Rep
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-400">
                {provider.totalSignals} signals
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-bg rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp className="w-4 h-4 text-success" />
            <span className="text-xs text-gray-400">Win Rate</span>
          </div>
          <div className="text-lg font-bold text-success">{provider.winRate}</div>
        </div>
        <div className="bg-bg rounded-lg p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-xs text-gray-400">Followers</span>
          </div>
          <div className="text-lg font-bold text-fg">{provider.followers}</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex-1 bg-primary hover:bg-accent text-white font-semibold py-3 rounded-lg transition-colors">
          Subscribe • {provider.price}
        </button>
        <button className="px-4 py-3 bg-bg hover:bg-gray-800 text-fg font-semibold rounded-lg transition-colors">
          View Profile
        </button>
      </div>
    </div>
  );
}
