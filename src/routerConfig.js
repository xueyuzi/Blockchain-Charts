// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routerConfig 为 iceworks 检测关键字，请不要修改名称

import BlankLayout from './layouts/BlankLayout';
import Login from './pages/Login';

const routerConfig = [
  {
    path: '/login',
    layout: BlankLayout,
    component: Login,
  },
  {
    path: '/',
    layout: BlankLayout,
    component: Login,
  },
];

export default routerConfig;
