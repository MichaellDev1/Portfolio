import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
const LazyApp = React.lazy(() => import('./App'))

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <div>
      <Suspense>
        <LazyApp />
      </Suspense>
    </div>
  </React.StrictMode>
)
