
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { Provider } from 'react-redux'
import store from '@/store'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Provider store={store}>
    <RouterProvider router={router}/>

  </Provider>
)
