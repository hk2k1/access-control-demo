import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomUIField(){
    return (
        <div>
            <Link to={'/home'}>
                Go Home
            </Link>
        </div>
    )
}