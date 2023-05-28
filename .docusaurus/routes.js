import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ginnywiki/de/markdown-page',
    component: ComponentCreator('/ginnywiki/de/markdown-page', '9e5'),
    exact: true
  },
  {
    path: '/ginnywiki/de/',
    component: ComponentCreator('/ginnywiki/de/', '1db'),
    routes: [
      {
        path: '/ginnywiki/de/intro',
        component: ComponentCreator('/ginnywiki/de/intro', '08e'),
        exact: true,
        sidebar: "defaultSidebar"
      },
      {
        path: '/ginnywiki/de/personal/tracking',
        component: ComponentCreator('/ginnywiki/de/personal/tracking', 'b7d'),
        exact: true,
        sidebar: "defaultSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
