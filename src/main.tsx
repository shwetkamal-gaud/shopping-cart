import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import QueryProviders from './QueryProviders.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { PersistGate } from 'redux-persist/integration/react'
import ThemeProvider  from './components/ThemeProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProviders>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <App />
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </QueryProviders>
  </StrictMode>,
)
