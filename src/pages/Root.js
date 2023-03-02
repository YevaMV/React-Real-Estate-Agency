import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/homepage/MainNavigation';

function Root() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}
export default Root;
