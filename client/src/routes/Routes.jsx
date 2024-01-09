import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ErrorPage from '../pages/ErrorPage'
import Feed from '../components/Feed'
import VideoDetail from '../components/VideoDetail'
import SearchFeed from '../components/SearchFeed'
import ChannelDetail from '../components/ChannelDetail'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
  children: [
        {
          path: '/',
          element: <Feed />,
        },
        {
          path: '/video/:id',
          element: <VideoDetail />,
        },
        {
          path: '/channel/:id',
          element: <ChannelDetail />,
        },
        {
          path: '/search/:searchTerm',
          element: <SearchFeed />,
        },
      ],
  },
 
])
