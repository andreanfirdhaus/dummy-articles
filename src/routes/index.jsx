import { createBrowserRouter } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import RootLayout from '../layout/root-layout';
import Blog from '../pages/blog/index';
import Posts from '../pages/blog/_id';
import { posts, github } from '../api/loader';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/articles',
                element: <Blog />,
                loader: posts,
            },
            {
                path: '/articles/:id',
                element: <Posts />,
                loader: posts,
            },
            {
                path: '/about',
                element: <About />,
                loader: github,
            },
        ],
    },
]);
