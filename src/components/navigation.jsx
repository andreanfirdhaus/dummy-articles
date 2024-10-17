import { NavLink } from 'react-router-dom';

export default function Navigation() {
    return (
        <header>
            <nav className='flex justify-center bg-zinc-800 max-w-[16rem] mx-auto p-5 my-6 rounded-full'>
                <ul className='flex justify-center space-x-6 [&_li]:text-white [&_li]:text-base'>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 ounded-full transition duration-300 ease-in-out'
                                    : ''
                            }
                        >
                            /home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/articles'
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 ounded-full transition duration-300 ease-in-out'
                                    : ''
                            }
                        >
                            /articles
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/about'
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-blue-400 ounded-full transition duration-300 ease-in-out'
                                    : ''
                            }
                        >
                            /about
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
