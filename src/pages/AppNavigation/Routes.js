import React from 'react';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';

import DrawerContent from '../../components/DrawerContent'
import Main from './Main'
import List from './List'

const Routes = createAppContainer(
    createDrawerNavigator({
        Main: {
            screen:Main
        },
        List: {
            screen:List
        }
        },
        {
            contentComponent: DrawerContent,
            drawerWidth:250,
            drawerType:'slide'
        })
);

export default Routes