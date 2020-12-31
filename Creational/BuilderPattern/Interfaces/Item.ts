import { Packing } from './Packing';

export interface Item {
    name(): string;
    packing(): Packing;
    price(): number;	
 }