// assets
import { ContainerOutlined, DownloadOutlined } from '@ant-design/icons';

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
  id: 'group-dashboard',
  title: 'Документи',
  type: 'group',
  children: [
    {
      id: 'report',
      title: 'Звіт',
      type: 'item',
      url: '/report',
      icon: ContainerOutlined,
      breadcrumbs: false
    },
    {
      id: 'income',
      title: 'Прихід',
      type: 'item',
      url: '/income',
      icon: DownloadOutlined,
      breadcrumbs: false
    }
    // {
    //   id: 'dashboard',
    //   title: 'Dashboard',
    //   type: 'item',
    //   url: '/dashboard/default',
    //   icon: icons.DashboardOutlined,
    //   breadcrumbs: false
    // }
  ]
};

export default dashboard;
