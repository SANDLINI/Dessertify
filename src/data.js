import image1 from '/chocolate-cupcake.jpg'
import image2 from '/chocolate-iceCream.jpg'
import image3 from '/Cooky.jpg'
import image4 from '/chocolate-tart.jpg'
import image5 from '/Cookies.jpg'
import image6 from '/crepe-wiphCream.jpg'
import image7 from '/CupCake.jpg'
import image8 from '/Icecream.jpg'
import image9 from '/mint-chocolate-cupcake.jpg'
import image10 from '/Pudding.jpg'
import image11 from '/red-velvet.jpg'
import image12 from '/strawberry-caramel-iceCream.jpg'
import image13 from '/strawberry-cupcake.jpg'
import image14 from '/Strawberry-iceCream.jpg'
import image15 from '/tart.jpg'

import chocolateCupcake2 from '/chocolate-cupcake2.jpg'
import chocolateCupcake3 from '/chocolate-cupcake3.jpg'
import chocolateCupcake4 from '/chocolate-cupcake4.jpg'

import chocolateIceCream2 from '/chocolate-icecream2.jpg'
import chocolateIceCream3 from '/chocolate-icecream3.jpg'
import chocolateIceCream4 from '/chocolate-icecream4.jpg'

import chocolatecooky2 from '/chocolate-cooky2.jpg'
import chocolatecooky3 from '/chocolate-cooky3.jpg'
import chocolatecooky4 from '/chocolate-cooky4.jpg'

import pudding2 from '/pudding2.jpg'
import pudding3 from '/pudding3.jpg'
import pudding4 from '/pudding4.jpg'


export const data = [
    {
        id: 1,
        name: "chocolate cupcake",
        image: image1,
        category: 'cupcake',
        price: 40,
        gallery: [
            { 1: image1 },
            { 2: chocolateCupcake2 },
            { 3: chocolateCupcake3 },
            { 4: chocolateCupcake4 },
        ]
    },
    {
        id: 2,
        name: "Chocolate Ice cream",
        image: image2,
        category: 'iceCream',
        price: 90,
        gallery: [
            { 1: image2 },
            { 2: chocolateIceCream2 },
            { 3: chocolateIceCream3 },
            { 4: chocolateIceCream4 },
        ]
    },
    {
        id: 3,
        name: "Chocolate Cooky",
        image: image3,
        category: 'cookies',
        price: 60,
        gallery: [
            { 1: image3 },
            { 2: chocolatecooky2 },
            { 3: chocolatecooky3 },
            { 4: chocolatecooky4 },
        ]
    },
    {
        id: 4,
        name: "Chocolate Tart",
        image: image4,
        category: 'pudding',
        price: 100,
        gallery: [
            { 1: image4 },
            { 2: pudding2 },
            { 3: pudding3 },
            { 4: pudding4 },
        ]
    },
    {
        id: 5,
        name: "Cookies",
        image: image5,
        category: 'cookies',
        price: 160,
        gallery: [
            { 1: image5 },
            { 2: chocolatecooky2 },
            { 3: chocolatecooky3 },
            { 4: chocolatecooky4 },
        ]
    },
    {
        id: 6,
        name: "Crepe Wiph Cream",
        image: image6,
        category: 'pudding',
        price: 70,
        gallery: [
            { 1: image6 },
            { 2: pudding2 },
            { 3: pudding3 },
            { 4: pudding4 },
        ]
    },
    {
        id: 7,
        name: "Cupcake",
        image: image7,
        category: 'cupcake',
        price: 40,
        gallery: [
            { 1: image7 },
            { 2: chocolateCupcake2 },
            { 3: chocolateCupcake3 },
            { 4: chocolateCupcake4 }
        ]
    },
    {
        id: 8,
        name: "Icecream",
        image: image8,
        category: 'icecream',
        price: 80,
        gallery: [
            { 1: image8 },
            { 2: chocolateIceCream2 },
            { 3: chocolateIceCream3 },
            { 4: chocolateIceCream4 },
        ]

    },
    {
        id: 9,
        name: "Mint Chocolate Cupcake",
        image: image9,
        category: "cupcake",
        price: 120,
        gallery: [
            { 1: image9 },
            { 2: chocolateCupcake2 },
            { 3: chocolateCupcake3 },
            { 4: chocolateCupcake4 }

        ]
    },
    {
        id: 10,
        name: "pudding",
        image: image10,
        category: "pudding",
        price: 160,
        gallery: [
            { 1: image10 },
            { 2: pudding2 },
            { 3: pudding3 },
            { 4: pudding4 },
        ]

    },
    {
        id: 11,
        name: "Red Velvet",
        image: image11,
        category: 'cupcake',
        price: 50,
        gallery: [
            { 1: image11 },
            { 2: chocolateCupcake2 },
            { 3: chocolateCupcake3 },
            { 4: chocolateCupcake4 }
        ]
    },
    {
        id: 12,
        name: "strawberry Caramel IceCream",
        image: image12,
        category: 'iceCream',
        price: 75,
        gallery: [
            { 1: image12 },
            { 2: chocolateIceCream2 },
            { 3: chocolateIceCream3 },
            { 4: chocolateIceCream4 },
        ]
    },
    {
        id: 13,
        name: "strawberry Cupcake",
        image: image13,
        category: 'cupcake',
        price: 190,
        gallery: [
            { 1: image13 },
            { 2: chocolateCupcake2 },
            { 3: chocolateCupcake3 },
            { 4: chocolateCupcake4 }
        ]
    },
    {
        id: 14,
        name: "Strawberry Icecream",
        image: image14,
        category: "icecream",
        price: 55,
        gallery: [
            { 1: image14 },
            { 2: chocolateIceCream2 },
            { 3: chocolateIceCream3 },
            { 4: chocolateIceCream4 },
        ]
    },
    {
        id: 15,
        name: "Tart",
        image: image15,
        category: 'pudding',
        price: 170,
        gallery: [
            { 1: image15 },
            { 2: pudding2 },
            { 3: pudding3 },
            { 4: pudding4 },
        ]
    },

]