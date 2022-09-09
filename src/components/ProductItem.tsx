import { memo } from "react";

interface IProductItemProps {
    product: {
        id: number;
        title: string;
        price: number
    }
}

function ProductComponent({product}: IProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
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