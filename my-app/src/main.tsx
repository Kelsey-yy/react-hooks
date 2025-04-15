
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router/index'
import { Provider } from 'react-redux'
import store from '@/store'
import './index.scss'
import '@ant-design/v5-patch-for-react-19';
createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  //   <App />
  // </StrictMode>,
  <Provider store={store}>
    <RouterProvider router={router}/>

  </Provider>
)
