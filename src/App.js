
import './App.css';
import Main from './layout/Main';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';

import Blog from './component/Blog/Blog'
import Topics from './component/Topics/Topics';
import Home from './component/Home/Home';
import Statics from './component/Statics/Statics';
import ErrorPage from './component/ErrorPage/ErrorPage';
import TopicsCart from './component/TopicsCart/TopicsCart';
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
          path: '/home',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Home></Home>
        },
        {
          path: '/topics',
          loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<TopicsCart></TopicsCart>
        },
        {
          path: '/topics/:topicsId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicsId}`);
          },
          element:<Topics></Topics>
        },
       

        {
          path: '/statics',
          loader:()=>fetch('https://openapi.programming-hero.com/api/quiz'),
          element:<Statics></Statics>
        },
        {
          path: '/blog',
          element:<Blog></Blog>
        }
      ]
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
