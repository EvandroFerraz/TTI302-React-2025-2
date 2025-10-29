import React from 'react'
import App from './components/App'
import { createRoot } from 'react-dom/client'

import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'
import 'primereact/resources/themes/bootstrap4-light-purple/theme.css'

const root = createRoot(document.getElementById("root"))
root.render(<App/>)