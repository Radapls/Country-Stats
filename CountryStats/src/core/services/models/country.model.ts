export interface Countries
{
    name: Array<Name>,
    tdl: string,
    cca2: string,
    cnn3: string,
    cca3: string,
    cioc: string,
    independent: boolean,
    status: string,
    unMember: boolean,
    currencies: Array<string>,
    idd: Array<string>,
    capital: Array<string>,
    altSpellings: Array<string>,
    region: string,
    subregion: string,
    translate: Array<string>,
    latLng: Array<string>,
    landlocked: boolean,
    borders: Array<string>,
    area: number,
    demonyms: Array<string>,
    iconFlag: string,
    maps: Array<string>,
    gini: Array<string>,
    fifa: string,
    car: Array<string>,
    timeZone: Array<string>,
    continent: Array<string>,
    flags: Array<string>,
    coatOfArms: Array<string>,
    startOfWeek: string,
    capitalInfo: Array<string>,
    postalCode: Array<string>
}

export interface CountriesResponse
{
    name: string;
    currency: string;
    region: string;
    location: LatLng;
    icon: string;
    area: number;
    flag: string;
    escudo: string;
}

export interface LatLng
{
    lat: string;
    lng: string;
}

export interface Name
{
    common: string,
    official: string,
    nativeName: {
        fin: {
            official: string,
            common: string
        },
        swe: {
            official: string,
            common: string
        }
    }
}