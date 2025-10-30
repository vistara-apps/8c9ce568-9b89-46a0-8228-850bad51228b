# SignalStream - Trading Signals on Base

A Farcaster Mini App for discovering and monetizing trading signals with immutable reputation tracking on Base.

## Features

- 🎯 **Immutable Provider Reputation** - On-chain tracking of signal provider performance
- 🔍 **Tailored Signal Access** - Filter signals by risk tolerance, assets, and performance
- 📱 **Farcaster Frames Integration** - Publish and discover signals in Farcaster feeds
- ⚡ **Gasless Micropayments** - Seamless payment flow on Base with paymaster support

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit (Coinbase Wallet, WalletConnect)
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **TypeScript**: Full type safety

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your OnchainKit API key:
```
NEXT_PUBLIC_ONCHAINKIT_API_KEY=your_key_here
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/       # Reusable UI components
│   ├── Header.tsx
│   ├── TabBar.tsx
│   ├── SignalCard.tsx
│   └── ProviderCard.tsx
├── layout.tsx       # Root layout with providers
├── page.tsx         # Home page
├── providers.tsx    # OnchainKit & React Query setup
└── globals.css      # Global styles with BASE theme

public/
└── .well-known/
    └── farcaster.json  # Farcaster manifest
```

## Key Components

- **SignalCard**: Displays trading signal details with provider info, price levels, and ROI
- **ProviderCard**: Shows provider reputation, win rate, and subscription options
- **Header**: App navigation with notifications
- **TabBar**: Bottom navigation for mobile-first experience

## Deployment

Deploy to Vercel:

```bash
npm run build
vercel deploy
```

## License

MIT
