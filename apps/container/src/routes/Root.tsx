import React from 'react';
import { Outlet } from 'react-router-dom';
import { GridItem, GridLayout, StackLayout } from '@salt-ds/core';
//Custom Components
import Header from '../components/header/Header';
import NavigationBar from '../components/navigation/NavigationBar';

const NAV_ROUTES: Array<{ label: string; link: string }> = [
    { label: 'Home', link: '/' },
    { label: 'Legacy React', link: '/legacy' },
    { label: 'Vue Quote', link: '/quote' },
    { label: 'Lab Remote', link: '/lab' }
];

export const Root: React.FC = () => {
    return (
        <StackLayout dir='column' gap={0} className='flex-grow'>
            <Header />
            <GridLayout columns={{ xs: 6, sm: 6, md: 9, lg: 12, xl: 12 }} className='flex-grow' gap={0}>
                <GridItem
                    colSpan={{ xs: 2, sm: 2, md: 3, lg: 2, xl: 2 }}
                    style={{ borderRight: 'solid', borderRightColor: 'gainsboro' }}
                    className='bg-gray-50'
                >
                    <NavigationBar linkRoutes={NAV_ROUTES} />
                </GridItem>
                <GridItem colSpan={{ xs: 4, sm: 4, md: 6, lg: 10, xl: 10 }}>
                    <Outlet />
                </GridItem>
            </GridLayout>
        </StackLayout>
    );
};

export default Root;
