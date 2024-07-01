import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from '../AppBar/AppBar';
import css from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={css.container}>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
      <Outlet />
    </div>
  );
}
export default Layout;
