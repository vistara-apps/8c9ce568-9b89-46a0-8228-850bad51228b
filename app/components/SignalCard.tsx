'use client';

import { TrendingUp, TrendingDown, Clock } from 'lucide-react';

interface SignalCardProps {
  signal: {
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
  };
}

export function SignalCard({ signal }: SignalCardProps) {
  const isLong = signal.type === 'Long';
  const isPositiveROI = signal.roi.startsWith('+');

  return (
    <div className="bg-surface rounded-lg p-4 shadow-card hover:shadow-xl transition-shadow">
      {/* Provider Info */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-xl">
            {signal.provider.avatar}
          </div>
          <div>
            <h3 className="font-semibold text-fg">{signal.provider.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-xs text-gray-400">{signal.timeframe}</span>
              <span className="text-xs text-success font-medium">
                {signal.provider.reputation}% Rep
              </span>
            </div>
          </div>
        </div>
        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isLong ? 'bg-success/20 text-success' : 'bg-danger/20 text-danger'
        }`}>
          {signal.type}
        </div>
      </div>

      {/* Asset & ROI */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <div className="text-sm text-gray-400 mb-1">Asset</div>
          <div className="text-xl font-bold text-fg">{signal.asset}</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-400 mb-1">Expected ROI</div>
          <div className={`text-xl font-bold flex items-center gap-1 ${
            isPositiveROI ? 'text-success' : 'text-danger'
          }`}>
            {isPositiveROI ? (
              <TrendingUp className="w-5 h-5" />
            ) : (
              <TrendingDown className="w-5 h-5" />
            )}
            {signal.roi}
          </div>
        </div>
      </div>

      {/* Price Levels */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        <div className="bg-bg rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Entry</div>
          <div className="text-sm font-semibold text-fg">{signal.entryPrice}</div>
        </div>
        <div className="bg-bg rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Target</div>
          <div className="text-sm font-semibold text-success">{signal.targetPrice}</div>
        </div>
        <div className="bg-bg rounded-lg p-3">
          <div className="text-xs text-gray-400 mb-1">Stop Loss</div>
          <div className="text-sm font-semibold text-danger">{signal.stopLoss}</div>
        </div>
      </div>

      {/* Action Button */}
      <button className="w-full bg-primary hover:bg-accent text-white font-semibold py-3 rounded-lg transition-colors">
        Get Access • {signal.price}
      </button>
    </div>
  );
}
