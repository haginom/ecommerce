import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

const SidebarData = [
  {
    title: 'Welcome, Sign In',
    path: '/signup',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Trainers',
    path: '/trainers',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'See All',
        path: 'trainers',
      },
      {
        title: 'adidas',
        path: 'trainers/adidas',
      },
      {
      title: 'Asics',
      path: 'trainers/asics',
      },
      {
        title: 'Converse',
        path: 'trainers/converse',
      },
      {
        title: 'Jordans',
        path: 'trainers/jordans',
      },
      {
        title: 'New Balance',
        path: 'trainers/newbalance',
      },
      {
        title: 'Nike',
        path: 'trainers/nike',
        // icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Puma',
        path: 'trainers/puma',
      },
      {
        title: 'Reebok',
        path: 'trainers/reebok',
      },
      {
        title: 'Vans',
        path: 'trainers/vans',
      },
    ]
  },
  {
    title: 'Apparel',
    path: '/reports',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'See all',
        path: '/apparel',
        icon: <IoIcons.IoIosPaper />
    },
  ]
  },
  {
    title: 'Sale',
    path: '/sale',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />
  },
  {
    title: 'Customer Service',
    path: '/customerservice',
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'FAQ',
        path: 'customerservice/faqs',
      },
      {
        title: 'Find a Store',
        path: 'customerservice/stores',
      },
      {
        title: 'Size Chart',
        path: 'customerservice/sizechart',
      },
  ]
  },

]

export default SidebarData