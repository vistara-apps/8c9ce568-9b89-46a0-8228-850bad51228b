'use client';

import { useEffect, useState } from 'react';
import { sdk } from '@farcaster/miniapp-sdk';
import { Search, TrendingUp, Users, Bell } from 'lucide-react';
import { SignalCard } from './components/SignalCard';
import { ProviderCard } from './components/ProviderCard';
import { Header } from './components/Header';
import { TabBar } from './components/TabBar';

interface Signal {
  id: string;
  provider: {
    name: string;
    avatar: string;
    reputation: number;
  };
  asset: string;
  type: 'Long' | 'Short';
  entryPrice: string;
  targetPrice: string;
  stopLoss: string;
  roi: string;
  timeframe: string;
  price: string;
}

interface Provider {
  id: string;
  name: string;
  avatar: string;
  reputation: number;
  winRate: string;
  totalSignals: number;
  followers: string;
  price: string;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState<'signals' | 'providers'>('signals');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // CRITICAL: Call sdk.actions.ready() to prevent infinite loading
    sdk.actions.ready();
  }, []);

  const mockSignals: Signal[] = [
    {
      id: '1',
      provider: {
        name: 'Nakamoto',
        avatar: '👤',
        reputation: 95,
      },
      asset: 'WETH',
      type: 'Long',
      entryPrice: '$2,450',
      targetPrice: '$2,650',
      stopLoss: '$2,380',
      roi: '+8.2%',
      timeframe: '2 hours ago',
      price: '0.001 ETH',
    },
    {
      id: '2',
      provider: {
        name: 'SatoshiPro',
        avatar: '👤',
        reputation: 92,
      },
      asset: 'DEGEN',
      type: 'Short',
      entryPrice: '$0.0089',
      targetPrice: '$0.0075',
      stopLoss: '$0.0095',
      roi: '-15.7%',
      timeframe: '5 hours ago',
      price: '0.0005 ETH',
    },
    {
      id: '3',
      provider: {
        name: 'CryptoSage',
        avatar: '👤',
        reputation: 88,
      },
      asset: 'USDC',
      type: 'Long',
      entryPrice: '$1.00',
      targetPrice: '$1.02',
      stopLoss: '$0.99',
      roi: '+2.0%',
      timeframe: '1 day ago',
      price: '0.0008 ETH',
    },
  ];

  const mockProviders: Provider[] = [
    {
      id: '1',
      name: 'Satoshi',
      avatar: '👤',
      reputation: 95,
      winRate: '85.5%',
      totalSignals: 247,
      followers: '$85.14K',
      price: '0.01 ETH',
    },
    {
      id: '2',
      name: 'Vitalik',
      avatar: '👤',
      reputation: 92,
      winRate: '82.3%',
      totalSignals: 189,
      followers: '$62.8K',
      price: '0.008 ETH',
    },
    {
      id: '3',
      name: 'CryptoKing',
      avatar: '👤',
      reputation: 88,
      winRate: '78.9%',
      totalSignals: 156,
      followers: '$28.2K',
      price: '0.005 ETH',
    },
  ];

  return (
    <div className="min-h-screen bg-bg pb-20">
      <Header />

      {/* Search Bar */}
      <div className="px-6 pt-6 pb-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search signals..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-surface text-fg rounded-lg pl-12 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="px-6 pb-4">
        <div className="flex gap-2 overflow-x-auto no-scrollbar">
          <button className="px-4 py-2 bg-primary text-white rounded-lg whitespace-nowrap text-sm font-medium">
            All Signals
          </button>
          <button className="px-4 py-2 bg-surface text-fg rounded-lg whitespace-nowrap text-sm font-medium">
            Long Only
          </button>
          <button className="px-4 py-2 bg-surface text-fg rounded-lg whitespace-nowrap text-sm font-medium">
            Short Only
          </button>
          <button className="px-4 py-2 bg-surface text-fg rounded-lg whitespace-nowrap text-sm font-medium">
            High ROI
          </button>
        </div>
      </div>

      {/* Content Tabs */}
      <div className="px-6 pb-4">
        <div className="flex gap-4 border-b border-gray-700">
          <button
            onClick={() => setActiveTab('signals')}
            className={`pb-3 px-2 font-semibold transition-colors relative ${
              activeTab === 'signals' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            Recent Signals
            {activeTab === 'signals' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
          <button
            onClick={() => setActiveTab('providers')}
            className={`pb-3 px-2 font-semibold transition-colors relative ${
              activeTab === 'providers' ? 'text-primary' : 'text-gray-400'
            }`}
          >
            Top Providers
            {activeTab === 'providers' && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 space-y-4">
        {activeTab === 'signals' ? (
          <>
            {mockSignals.map((signal) => (
              <SignalCard key={signal.id} signal={signal} />
            ))}
          </>
        ) : (
          <>
            {mockProviders.map((provider) => (
              <ProviderCard key={provider.id} provider={provider} />
            ))}
          </>
        )}
      </div>

      <TabBar />
    </div>
  );
}
