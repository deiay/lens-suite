import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { createClient, configureChains, chain } from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';


const { provider, chains, webSocketProvider } = configureChains(
    [chain.polygonMumbai],    
    [      
      alchemyProvider({
        // This is Alchemy's default API key.
        // You can get your own at https://dashboard.alchemyapi.io
        apiKey: "_gg7wSSi0KMBsdKnGVfHDueq6xMB9EkC",
      }),
      publicProvider()
    ]
)

const { connectors } = getDefaultWallets({
appName: 'My RainbowKit App',
  chains
});



const wagmiClient = createClient({
  autoConnect: true,
  webSocketProvider,
  connectors,
  provider
})

export { chains, wagmiClient };

