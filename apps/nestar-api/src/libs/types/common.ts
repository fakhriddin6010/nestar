import { ObjectId } from "mongoose"

export interface T {
    [key: string]: any
}

export interface StatisticModifier{
    _id: ObjectId;         // ixtiyori collection document Idsi 
    targetKey: string;     // bu yerda nimani ozgartirmoqchimz
    modifier: number;      // qanday qiymatga ozgartirmoqchimz
}