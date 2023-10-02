import React, { useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import './style.scss'
import '../../styles/main.scss'
import { WalletLogoIcon } from '../Icons'
import 'dapp-comp/dist/index.css'
import { Web3ReactModal } from 'dapp-comp/dist'
import { UserWalletModal } from '../UserWalletModal'
import { shortenAddressString } from '../../utils/helpers'
import useAuth from '../../hooks/useAuth'
import { ConnectionType } from '../../utils/web3React'

const LS_CONNECTOR = 'web3connector'

export const AppLayout = () => {
  const { account, isActive } = useWeb3React()
  const [visibleWalletModal, setVisibleWalletModal] = useState<any>()
  const [visibleUserWalletModal, setVisibleUserWalletModal] = useState<any>()
  const { logout, login } = useAuth()

  // useEffect(() => {
  //   const initConnector = localStorage.getItem(LS_CONNECTOR)
  //   if (initConnector) {
  //     const connector = Object.values(connectors)
  //       .map(({ connector }) => connector)
  //       .find(connector => connector?.constructor?.name === initConnector)
  //     if (connector) {
  //       activate(connector)
  //     }
  //   }
  // }, [activate])
  //
  // useEffect(() => {
  //   const initConnector = localStorage.getItem(LS_CONNECTOR)
  //   if (initConnector) {
  //     const connector: any = Object.values(connectors)
  //       .map(({ connector }) => connector)
  //       .find(connector => connector?.constructor?.name === initConnector)
  //     const handleAccountsChanged = (accounts: any) => {
  //       if (accounts.length > 0) {
  //         activate(connector)
  //       }
  //     }
  //     const { ethereum } = window
  //     if (ethereum && ethereum.on && connector && !active && !error) {
  //       ethereum.on('accountsChanged', handleAccountsChanged)
  //       return () => {
  //         if (ethereum.removeListener) {
  //           ethereum.removeListener('accountsChanged', handleAccountsChanged)
  //         }
  //       }
  //     }
  //   }
  //   return
  // }, [activate, active, error])
  //
  //
  // useEffect(() => {
  //   if (!!account && !!library) {
  //     library
  //       .getBalance(account)
  //       .then((balance: any) => {
  //         setBalance(weiToNumber(balance))
  //       })
  //       .catch(() => {
  //         setBalance(null)
  //       })
  //     setBalance(undefined)
  //   }
  // }, [account, library, chainId])

  return <div className={`body dark`}>
    <aside className='sidebar'>
      <div className='connect-wallet '>
        {
          isActive ? (
            <span
              className='short-address-box'
              onClick={() => setVisibleUserWalletModal(true)}
            >
                                <span>
                                    {shortenAddressString(account ? account : '')}
                                </span>
                                <WalletLogoIcon />
                            </span>
          ) : (
            <span
              className='short-address-box'
              onClick={() => setVisibleWalletModal(true)}
            >
                            Login
                        </span>
          )
        }
      </div>
    </aside>
    <Web3ReactModal
      providerOptions={Object.values(ConnectionType)}
      visible={visibleWalletModal}
      setVisible={setVisibleWalletModal}
      onConnect={(connector: any) => {
        login(connector)
      }}
    />
    <UserWalletModal
      visible={visibleUserWalletModal}
      setVisible={setVisibleUserWalletModal}
      deactivate={() => {
        logout()
        localStorage.removeItem(LS_CONNECTOR)
      }}
      balance={''}
      account={account ? account : ''}
    />
  </div>
}
