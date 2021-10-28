export interface DrzavaModel {
    cca3: string;
    cca2: string;
    area: number;
    capital: string[];
    flags: Flag;
    name: Name;
    population: number;
    region: string;
    subregion: string;
    coatOfArms: CoatOfArms;
    continents: string[];
}

export interface Name {
    common: string;
}

export interface Flag {
    png: string;
    svg: string;
}

export interface CoatOfArms {
    png: string;
    svg: string;
}

