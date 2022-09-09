import { memo, useState } from "react";
import dynamic from 'next/dynamic'
import { IAddProductToWishListProps } from "./AddProductToWishList";

// import { AddProductToWishList } from "./AddProductToWishList";

const AddProductToWishList = dynamic<IAddProductToWishListProps>(() => {
    return import('./AddProductToWishList').then(mod => mod.AddProductToWishList)
})

interface IProductItemProps {
    product: {
        id: number;
        title: string;
        price: number
    }

    addItemInCart: (id: number) => void
}

function ProductComponent({product, addItemInCart}: IProductItemProps) {
    const [requestAddItem, setRequestAddItem] = useState(false)

    return (
        <div
            
        >
            {product.title} - <strong>{product.price}</strong>

            <button onClick={() => setRequestAddItem(true)}>Adicionar aos favoritos</button>

            {requestAddItem && (
                <AddProductToWishList
                onAddToWishList={() => addItemInCart(product.id)}
                onRequestClose={() => setRequestAddItem(false)}
            />
            )}
        </div>
    )
}

/**
 * O memo via fazer uma comparação rasa entre os dois para evitar uma nova renderização
 * Usa apenas em components que será renderizado mais de uma vez na aplicação
 * Em components limpos
 * e components que irão não vai mudar a propriedade constantemente
 */

export const ProductItem = memo(ProductComponent, (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product)
})

// export const ProductItem = ProductComponent