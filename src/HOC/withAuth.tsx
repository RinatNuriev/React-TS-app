import React, { ComponentType, useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const withAuth = (Component: ComponentType) => (props: any) => {

    const { user } = useContext(AuthContext)

    if (!user) return <p>You are not authorized to view this page</p>

    return <Component {...props} />;
};

export default withAuth;