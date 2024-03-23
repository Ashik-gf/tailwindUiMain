import { Iconify } from './iconify.constant'
import { Routes } from './routes.constant'

export const menuTree = [
  {
    key: 1,
    label: 'Overview',
    icon: Iconify.dashboard,
    link: Routes.overview,
    children: [
      // {
      //   key: 1.1,
      //   label: 'Admin',
      //   link: 'admin',
      // },
    ],
  },
  {
    key: 2,
    label: 'Entities',
    icon: Iconify.userRounded,
    link: Routes.entities,
    children: [],
  },
  {
    key: 3,
    label: 'People',
    icon: Iconify.users,
    link: Routes.people,
    children: [],
  },
  {
    key: 4,
    label: 'Training',
    icon: Iconify.training,
    link: Routes.training,
    children: [],
  },
  {
    key: 5,
    label: 'Settings',
    icon: Iconify.settings,
    link: Routes.settings,
    children: [],
  },
]

export const headerMenuTree = [
  { key: 1, title: 'User Profile', link: Routes.profile, icon: Iconify.user },
  { key: 2, title: 'Logout', link: Routes.logout, icon: Iconify.logout },
]
