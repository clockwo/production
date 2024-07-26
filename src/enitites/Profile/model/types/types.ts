import { Country } from 'enitites/Country';
import { Currency } from 'enitites/Currency';

export interface IProfile {
    first?: string
    lastname?: string
    age?: number
    currency?: Currency
    country?: Country
    city?: string
    username?: string
    avatar?: string
}
