import clsx from 'clsx';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const activeLink = ({ isActive }) => {
    return clsx(isActive && 'active');
  };
  return (
    <>
      <header className="py-1 px-1 bg-transparent ">
        <nav className="bg-transparent">
          <NavLink className={`${activeLink} text-lg mr-5`} to="/">
            Home
          </NavLink>
          <NavLink className={`${activeLink} text-lg mr-5`} to="/about">
            About us
          </NavLink>
          <NavLink className={`${activeLink} text-lg mr-5`} to="/contacts">
            Contacts
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default Layout;
