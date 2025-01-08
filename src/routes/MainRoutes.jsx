import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import Dashboard from 'layout/Dashboard';

const Color = Loadable(lazy(() => import('pages/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/component-overview/shadows')));
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard/index')));
const Income = Loadable(lazy(() => import('pages/income/index')));

// render - sample page
const Report = Loadable(lazy(() => import('pages/report/index')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <Dashboard />,
  children: [
    // {
    //   path: '/',
    //   element: <Income />
    // },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'report',
      element: <Report />
    },
    {
      path: 'income',
      element: <Income />,
      default: true
    },
    {
      path: 'typography',
      element: <Typography />
    }
  ]
};

export default MainRoutes;
