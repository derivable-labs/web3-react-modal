export enum ConnectionType {
  COINBASE = 'COINBASE',
  INJECTED = 'INJECTED',
  WALLET_CONNECT_V2 = 'WALLET_CONNECT_V2',
  NETWORK = 'NETWORK'
}

export const injectedInstallLinks = [
  {
    icon: 'MetamaskIcon',
    name: 'Metamask',
    link: 'https://metamask.io/download/'
  },
  {
    icon: 'BraveIcon',
    name: 'Brave',
    link: 'https://brave.com/vi/wallet/'
  },
  {
    icon: 'TrustWalletIcon',
    name: 'TrustWallet',
    link: 'https://trustwallet.com/download'
  }
]

export const supportedConnectors = {
  [ConnectionType.INJECTED]: {
    images: ['MetamaskIcon', 'BraveIcon', 'TrustWalletIcon'],
    title: 'Injected Wallets'
  },
  [ConnectionType.WALLET_CONNECT_V2]: {
    images: ['WalletConnectIcon'],
    title: 'WalletConnect'
  },
  [ConnectionType.COINBASE]: {
    images: ['CoinBaseIcon'],
    title: 'CoinBase'
  }
}

// if (!window.location.hostname.includes('lz.finance')) {
//   injected.images.splice(1, 2)
//   injected.images.push('BraveIcon')
//   injectedInstallLinks.splice(1, 2)
//   injectedInstallLinks.push({
//     icon: 'LaunchzoneIcon',
//     name: 'Launchzone',
//     link: 'https://docs.lz.finance/our-products/lz-wallet'
//   })
// }

// const authereum = {
//   images: ['AuthereumIcon'],
//   title: 'Authereum'
// }
//
// const torus = {
//   images: ['TorusIcon'],
//   title: 'Torus'
// }
//
// const fortmatic = {
//   images: ['FortmaticIcon'],
//   title: 'Fortmatic'
// }
//
// const magic = {
//   images: ['MagicIcon'],
//   title: 'Magic'
// }
//
// const portis = {
//   images: ['PortisIcon'],
//   title: 'Portis'
// }

// const ledger = {
//   images: ['LedgerIcon'],
//   title: 'Ledger'
// }
//
// const frame = {
//   images: ['FrameIcon'],
//   title: 'Frame'
// }
//
// export default {
//   injected,
//   // torus,
//   // authereum,
//   walletconnect
//   // fortmatic,
//   // magic,
//   // portis,
//   // ledger,
//   // frame
// }
