import i1 from "../img/i1.png";
import f1 from "../img/f1.png";
import c3 from "../img/c3.png";
import fi1 from "../img/fi1.png";
import clock from "../assets/icons/clock.svg";
import marker from "../assets/icons/marker.svg";
import phone from "../assets/icons/phone.svg";


export const heroData = [
    {
        id: 1,
        name: 'Icecream',
        decp : 'chocolate & vanilla',
        price : '110',
        imgSrc : i1
    },
    {
        id: 2,
        name: 'Strawberries',
        decp : 'Fresh Strawberries',
        price : '180',
        imgSrc : f1
    },
    {
        id: 3,
        name: 'Chicken Kebab',
        decp : 'Mixed Kebab Plate',
        price : '220',
        imgSrc : c3
    },
    {
        id: 4,
        name: 'Fish Kebab',
        decp : 'Mixed Fish Kebab',
        price : '200',
        imgSrc : fi1
    },
]


export const infoData = [
    {
        id: 1,
        title: 'Opening Hours',
        description: '24 Hours',
        bg: 'bg-slate-600',
        img : clock,
    },
    {
        id: 2,
        title: 'Visit Our Location',
        description: 'Dhaka-1206, Bangladesh',
        bg: 'bg-rose-600',
        img : marker
    },
    {
        id: 3,
        title: 'Contact Us Now',
        description: '+8801861341902',
        bg: 'bg-slate-600',
        img : phone
    },
]


export const categories = [
    {
        id: 1,
        name: 'Chicken',
        urlParamName : 'chicken',
    },
    {
        id: 2,
        name: 'Curry',
        urlParamName : 'curry'
    },
    {
        id: 3,
        name: 'Rice',
        urlParamName : 'rice',
    },
    {
        id: 4,
        name: 'Fish',
        urlParamName : 'fish',
    },
    {
        id: 5,
        name: 'Fruits',
        urlParamName : 'fruits',
    },
    {
        id: 6,
        name: 'Icecreams',
        urlParamName : 'icecreams',
    },
    {
        id: 7,
        name: 'Soft Drinks',
        urlParamName : 'drinks',
    },
]