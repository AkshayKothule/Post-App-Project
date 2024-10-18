import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import { authLayout , Login } from './components/index.js'
import Signup from './pages/Signup.jsx'
import AllPosts from "./pages/AllPost.jsx"
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from './pages/Post.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: (
                <authLayout authentication={false}>
                    <Login />
                </authLayout>
            ),
        },
        {
            path: "/signup",
            element: (
                <authLayout authentication={false}>
                    <Signup />
                </authLayout>
            ),
        },
        {
            path: "/all-posts",
            element: (
                <authLayout authentication>
                    {" "}
                    <AllPosts />
                </authLayout>
            ),
        },
        {
            path: "/add-post",
            element: (
                <authLayout authentication>
                    {" "}
                    <AddPost />
                </authLayout>
            ),
        },
        {
            path: "/edit-post/:slug",
            element: (
                <authLayout authentication>
                    {" "}
                    <EditPost />
                </authLayout>
            ),
        },
        {
            path: "/post/:slug",
            element: <Post />,
        },
    ],
},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider  router={router}/>
    </Provider>
   
  </StrictMode>,
)
