import React from 'react';
import { useAuth } from '../../hooks/useAuth';

const NewHeader = () => {
    const { user, setUser } = useAuth()
    return user ? (
        <>
            <h2>Welcome</h2>
            <button className='btn' onClick={() => setUser(null)}>Logout</button>
        </>) : (<button className='btn' onClick={() => setUser({ name: 'Max' })}>Login</button>)

};

export default NewHeader;