import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";
import './ProductItem.css'

function ProductItem({ icon, name, updated }) {
    return (
        <div className='d-flex align-items-center justify-content-between border-bottom p-2'>
            <div className='d-flex align-items-center'>
                {icon}
                <div className='ml-2'>
                    <p className='m-0 product-name'>{name}</p>
                    <p className='m-0 text-muted product-updated-timestamp'>Updated {updated}</p>
                </div>
            </div>
            <BsThreeDotsVertical size='1.5rem' className='cursor-pointer' />
        </div>
    )
}

export default ProductItem