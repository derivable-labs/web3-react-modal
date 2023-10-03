import {useCallback, useState} from 'react'
import { useWeb3React } from '@web3-react/core'
import { ConnectionType } from '../utils/web3React'
import { getConnection } from '../utils/connectors'

const useAuth = () => {
  const { chainId, connector, account } = useWeb3React()
  // const { connectionType } = useSelector((state: AppState) => state.wallet)
  const [connectionType,setConnectionType] = useState<ConnectionType>(ConnectionType.INJECTED)

  const login = useCallback(async (connectorType: ConnectionType) => {
    const connector2 = getConnection(connectorType)
    try {
      if (connector2?.connectEagerly && connectionType) {
        await connector2.connectEagerly()
        if(!account){
          await connector2.activate()
        }
      } else {
        await connector2?.activate()
      }
    } catch (error) {
      const res = await connector2?.activate()
      console.log('🚀 ~ file: useAuth.ts:24 ~ login ~ rest:', res)
    }
    setConnectionType(connectorType)
  }, [])

  const logout = useCallback(async () => {
    try {
      const connector2 = getConnection(connectionType)
      if (connector2 && connector2?.deactivate) {
        connector2.deactivate()
      }
      connector2?.resetState?.()
      // setConnectionType( undefined)
      connector?.deactivate?.()
      connector?.resetState?.()
    } catch (e) {
      console.log('🚀 ~ file: useAuth.ts:38 ~ logout ~ e:', e)
    }
  }, [chainId])

  return { login, logout }
}

export default useAuth
