const orders = [
    {
        id: 1234,
        items: [
            { name: 'RedBull T-Shirt', colors: ['RED', 'BLUE']},
            { name: 'RedBull Shoes', colors: ['RED', 'BLUE']}
        ],
    },
    {
        id: 1235,
        items: [
            { name: 'Ferrari T-Shirt', colors: ['GREEN', 'RED']},
            { name: 'Ferrari Shoes', colors: ['RED', 'BLUE']}
        ],
    },
]

const items = orders.flatMap(item => item.items.map(item => item.name))