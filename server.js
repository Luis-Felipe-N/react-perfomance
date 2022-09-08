function numRandom10to100() {
    min = Math.ceil(10);
    max = Math.floor(100);
    return Math.floor(Math.random() * (max - min) + min);
}

module.exports = () => {
    const data = {
        products: []
    }

    for (let i = 0; i < 1000; i++) {
        data.products.push({
            id: (1 + i),
            price: 80,
            title: 'Camisa nº ' + (i + 1)
        })
    }

    return data
}