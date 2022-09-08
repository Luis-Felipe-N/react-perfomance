interface IProductItemProps {
    product: {
        id: number;
        title: string;
        price: number
    }
}

export function ProductItem({product}: IProductItemProps) {
    return (
        <div>
            {product.title} - <strong>{product.price}</strong>
        </div>
    )
}