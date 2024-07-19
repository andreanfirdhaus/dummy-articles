import Navigation from '../components/navigation';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <Navigation />
            <Outlet />
        </>
    );
}
