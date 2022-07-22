import { Brand } from '../models/brand';
import { Category } from '../models/category';
import { Product } from '../models/product'

export const PRODUCTS: Product[] = [
    {
        id: 1,
        name: 'Aladdin\'s lamp',
        description: 'A golden lamp that grants three wishes.',
        category: new Category(1, 'lamp'),
        brand: new Brand(1, 'Aladdin'),
        size: 'Holds 3 wishes',
        imageurl: '..\\assets\\img\\lamp.jpg'
    },
    {
        id: 2,
        name: 'Pandora\'s box',
        description: 'A strangely well secured box. Contents unknown.',
        category: new Category(2, 'box'),
        brand: new Brand(2, 'Pandora'),
        size: 'Smallish',
        imageurl: '..\\assets\\img\\pandorabox.jpg'
    }
];