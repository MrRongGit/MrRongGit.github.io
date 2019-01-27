import Home from './components/Home'
import Login from './components/Login'
import Admin from './components/Admin'
import Menu from './components/Menu'
import Register from './components/Register'
import About from './components/about/About'

// 二级路由
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

export const routes = [
  { 
    path: '/',
    components: {
      default: Home,
      'orderingGuide': OrderingGuide,
      'delivery': Delivery,
      'history': History
    }
  },
  {
    path: '/login',
    component: Login
  },
  {
    path: '/admin',
    component: Admin,
    name: 'adminLink',
    // beforeEnter:(to,from,next) =>{
    //   alert('非登陆状态')
    // }
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/register',
    component: Register
  },
  {
    path: '/about',
    component: About,
    redirect: '/about/contact',
    children: [{
        path: '/about/contact',
        name: 'contactLink',
        component: Contact
      },
      {
        path: '/about/history',
        name: 'historyLink',
        component: History
      },
      {
        path: '/about/delivery',
        name: 'deliveryLink',
        component: Delivery
      },
      {
        path: '/about/orderingGuide',
        name: 'orderingGuideLink',
        component: OrderingGuide
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }


];
