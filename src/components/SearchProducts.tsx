import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface ISearchProductsProps {
    results: {
        id: number;
        price: number;
        title: string;
    }[]
}

export function SearchProducts({results}: ISearchProductsProps) {
    const totalPrice = useMemo(() => {
        return results.reduce((total, product) => {
            return total + product.price
        }, 0)
    }, [results])



    return (
        <div>

        <h2>{ totalPrice }</h2>

        {results && results.map(item => (
            <li key={item.id}>
                <ProductItem product={item} />
            </li>
        ))}
        </div>
    )
}