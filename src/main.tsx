import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
// import './index.css'
import { store } from './app/store'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd';
import enUS from 'antd/locale/en_US';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={enUS}>
        <App />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
)
