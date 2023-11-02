import React from 'react';
import { Link } from 'react-router-dom';
import { useDocumentInfo } from 'payload/components/utilities'

export default function AddViolationButton(){
    const { id } = useDocumentInfo()
    console.log(id)
    return (
        <div>
            <Link to={'/admin/collections/violations/create?project='+id}>
                Go Home
            </Link>
        </div>
    )
}