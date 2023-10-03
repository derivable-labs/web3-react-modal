import React, { useEffect, useMemo, useState } from 'react'
import styles from '../../styles.module.css'
import { Modal } from '../Modal'
import {
  ConnectionType,
  injectedInstallLinks,
  supportedConnectors
} from '../../config/supportedConnectors'
import Icons from '../Icons'

export const Web3ReactModal = ({
  setVisible,
  visible,
  onConnect,
  providerOptions
}: {
  setVisible: any
  visible: any
  onConnect: any
  providerOptions: ConnectionType[]
}) => {
  const [dontHaveProvider, setDontHaveProvider] = useState<any>(false)

  // back to select wallet when popup toggle
  useEffect(() => {
    setDontHaveProvider(false)
  }, [visible])

  const modalItems = useMemo(() => {
    const _modalItems = []
    // render web3-react connectors
    for (const name of providerOptions) {
      if (!supportedConnectors[name]) continue

      const logos = []
      for (const i in supportedConnectors[name].images) {
        const WalletIcon = Icons[supportedConnectors[name].images[i]]
        logos.push(<WalletIcon key={i} />)
      }

      _modalItems.push(
        <div
          className={`${styles.walletItem} ${
            name === ConnectionType.INJECTED ? styles.injectedWalletItem : ''
          }`}
          key={name}
          onClick={async () => {
            // @ts-ignore
            if (name === ConnectionType.INJECTED && !window.ethereum) {
              setDontHaveProvider(true)
            } else {
              onConnect(name)
              setVisible(false)
            }
          }}
        >
          <span
            className={
              logos.length === 1 ? styles.smallWalletLogos : styles.walletLogos
            }
          >
            {logos}
          </span>
          <span className={styles.walletTitle}>
            {supportedConnectors[name].title}
          </span>
        </div>
      )
    }
    return _modalItems
  }, [providerOptions])

  return (
    <Modal setVisible={setVisible} visible={visible}>
      {dontHaveProvider ? (
        // show this popup when cannot find provide
        <div className={styles.dontHaveProvider}>
          <span>Login Your Wallet</span>
          <span>
            No extension/wallet detected from your browser, please install one
            of the following extension/wallet to connect.
          </span>
          <div>
            {injectedInstallLinks.map((item, key) => {
              const Icon = Icons[item.icon]
              return (
                <a
                  key={key}
                  className={styles.injectedWalletToInstall}
                  href={item.link}
                  target='_blank'
                  rel='noreferrer'
                >
                  <Icon />
                  <span>{item.name}</span>
                </a>
              )
            })}
          </div>
          <div>
            <span
              className={styles.btnBack}
              onClick={() => setDontHaveProvider(false)}
            >
              &#8592; Back
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.web3Modal}>{modalItems}</div>
      )}
    </Modal>
  )
}
