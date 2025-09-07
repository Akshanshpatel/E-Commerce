import about from './about.png';
import bin from './bin.png';
import cart from './cart.png';
import logo from './logo.png';
import search from './search.png'
import profile from './profile.png'
import menu from './menu.png'
import dropleft from './dropleft.png'
import billie from './billie.png'
import dummy1 from './dummy1.png'
import dummy2 from './dummy2.png'


export const assets={
    about,
    bin,
    profile,
    dropleft,
    billie,
    cart,
    logo,
    search,
    menu,
    dummy1,
    dummy2
}

export const products=[
    {
        _id:"aaaa",
        name:"Billie photo_1",
        description:"Dummy photograph 1",
        price:100,
        image:[dummy1],
        category:"Women",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:1716634345448,
        bestseller:true
    },{
        _id:"aaaa",
        name:"Billie photo_2",
        description:"Dummy photograph 2",
        price:100,
        image:[dummy2],
        category:"Men",
        subCategory:"Topwear",
        sizes:["S","M","L"],
        date:1716634345449,
        bestseller:true
    }
]
