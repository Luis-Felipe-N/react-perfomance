export interface IAddProductToWishListProps {
    onAddToWishList: () => void;
    onRequestClose: () => void;
}

export function AddProductToWishList({onAddToWishList, onRequestClose}: IAddProductToWishListProps) {
    return (
        <div>
            Deseja adicionar aos favoritos?
                <button onClick={onAddToWishList}>Sim</button>
                <button onClick={onRequestClose}>Não</button>
            `
        </div>
    )
}