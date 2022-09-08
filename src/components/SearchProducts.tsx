import { ProductItem } from "./ProductItem";

interface ISearchProductsProps {
    results: {
        id: number;
        price: number;
        title: string;
    }[]
}

export function SearchProducts({results}: ISearchProductsProps) {
    return (
        <div>
        {results && results.map(item => (
            <li key={item.id}>
                <ProductItem product={item} />
            </li>
        ))}
        </div>
    )
}