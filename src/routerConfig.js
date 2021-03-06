// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Dashboard from './pages/Dashboard';

const routerConfig = [
  {
    path: '/Dashboard',
    layout: BlankLayout,
    component: Dashboard,
  },
  {
    path: '/',
    layout: BlankLayout,
    component: Dashboard,
  },
];

export default routerConfig;
