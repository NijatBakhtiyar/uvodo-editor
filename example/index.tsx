import { createRoot } from 'react-dom/client'

import { Editor } from '~/editor'

const container = document.querySelector('#root')
const root = createRoot(container!)

const App = () => (
  <>
    <Editor />
  </>
)

root.render(<App />)
