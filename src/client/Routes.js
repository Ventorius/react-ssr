import React from 'react'
import HomePage from './pages/HomePage'
import UsersListPage, {loadData} from './pages/UsersListPage'
import NotFoundPage from './pages/NotFoundPage'
import AdminsListPage from './pages/AdminsListPage'
import App from './App'

export default [
   {...App,
    routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...UsersListPage,
                path: '/users',
            
            },
            {
                ...AdminsListPage,
                path: '/admins'
            },
            {
                ...NotFoundPage
            }
        ]
    }
]