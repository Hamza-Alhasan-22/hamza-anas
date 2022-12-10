export const navBar = [
    {
        id: 1,
        title: 'SHOP',
        options: globalData
    },
    {
        id: 2,
        title: 'FABRIC',
        options: globalData
    },
    {
        id: 3,
        title: 'JOURNAL',
        options: globalData
    },
    {
        id: 4,
        title: 'ABOUT',
        options: globalData
    }
];

const globalData = [
    {
        title: 'Apparels',
        options: [
            {
                label: 'PANTS', types: ['Sideswept Dhoti', 'Lounge longhi', 'Side longhi', 'modern mope', 'easy dhoti', 'classic wideleg']
            },
            {
                label: 'JUMPSUTIS', types: ['Sideswept Dhoti', 'Lounge longhi', 'Side longhi', 'modern mope', 'easy dhoti', 'classic wideleg']
            },
            {
                label: 'SHORTS', types: ['Sideswept Dhoti', 'Lounge longhi', 'Side longhi', 'modern mope', 'easy dhoti', 'classic wideleg']
            },
            {
                label: 'TOPS', types: ['Sideswept Dhoti', 'Lounge longhi', 'Side longhi', 'modern mope', 'easy dhoti', 'classic wideleg']
            },
        ],
    },
    {
        title: 'Accessories',
        options: [
            {
                label: 'Necklaces', types: []
            },
            {
                label: 'Scarfs', types: []
            }
        ],
    },
    {
        title: 'Others',
        options: [
            {
                label: 'Houseware', types: []
            },
            {
                label: 'Gift Card', types: []
            }
        ]
    },
    {
        title: 'Shop by collection',
        options: [
        {
            label: 'Sale/Last Call', types: []
        },
        {
            label: 'Essentials', types: []
        }
        ]
    },
    {
        title: 'Shop by techniques',
        options: [
            {
                label: 'Block Printing', types: []
            },
            {
                label: 'Ikat', types: []
            },
            {
                label: 'Jamdani', types: []
            },
            {
                label: 'Handloom', types: []
            }
        ]
    },
];

export default globalData;