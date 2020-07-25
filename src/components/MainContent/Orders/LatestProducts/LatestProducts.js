import React from 'react'
import ProductItem from './ProductItem'

function LatestProducts({ latestProducts }) {
    return (
        <div className='card mx-2'>
            <div className='card-header bg-white'><p className='card-text'>Latest Products</p></div>
            <div className='card-body p-0'>
                {latestProducts.map(product => <ProductItem {...product} />)}
            </div>
        </div>
    )
}

export default LatestProducts