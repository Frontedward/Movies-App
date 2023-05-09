import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app/app'
import store, { persistor } from './store/store'
import NetworkStatus from './components/network-status/network-status'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NetworkStatus>
                    <App />
                </NetworkStatus>
            </PersistGate>
        </Provider>
    </React.StrictMode>,
    rootElement
);
