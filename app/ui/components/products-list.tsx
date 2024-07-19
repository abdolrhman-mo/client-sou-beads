import Product from '@/app/ui/components/product'
import { products } from '@/app/lib/placeholder-data'
import clsx from 'clsx'
import { hasTag } from '@/app/lib/utils'
import { useState } from 'react'
import H5 from './h5'
import H4 from './h4'

export default function ProductsList({
    styles = '',
    productStyles = '',
    tag = 'all',
    limit = 0,
    search = false,
    query,
    currentPage,
}: {
    styles?: string
    productStyles?: string
    tag?: string
    limit?: number
    search?: boolean
    query?: string
    currentPage?: number
}) {
    // Search
    let searchedProducts: any = []
    if (search) {
        if (query) {
            products.map(product => {
                if (product.name.toLowerCase().search(query) != -1) {
                    searchedProducts.push(product)
                }
            })
        }
    } else {
        searchedProducts = products
    }

    // Limt Number & Tags
    if (limit === 0) {
        limit = products.length
    }

    let filteredProducts: any = []
    let i = 0
    searchedProducts.map((product: any) => {
        if (hasTag(product.tags, tag) || tag === 'all') {
            if (i < limit) {
                filteredProducts.push(product)
                i++
            }
        }
    })
    i = 0

    return (
        <div 
            className={clsx(
                // Sizing
                'w-11/12',
                // Spacing
                'mx-auto',
                // Grid
                'grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-4',
                // Effects
                'opacity-100',
            ) + ` ${styles}`}
        >
            {query ? <H4 text={query} />: <p>empty</p>}
            {filteredProducts.map((product: any) =>
                <Product 
                    product={product}
                    styles={productStyles} 
                />
                // <p>{product}</p>
            )}
        </div>
    )
}