import React from 'react'
import ReactDOM from 'react-dom'
import { Web3ReactProvider } from '@web3-react/core'
import { HashRouter as Router} from 'react-router-dom';
import './styles/main.scss'
import './index.css'
import { AppLayout } from './components/AppLayout'
import { connectors } from './utils/connectors'

ReactDOM.render(
  <React.StrictMode>
    <Web3ReactProvider connectors={connectors}>
      {/*@ts-ignore*/}
      <Router>
        <AppLayout />
      </Router>
    </Web3ReactProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
