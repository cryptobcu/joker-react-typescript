export type Flag = {
    nsfw: boolean;
    religius: boolean;
    political: boolean;
    racist: boolean;
    sexist: boolean;
    explicit: boolean;
}

export type FlagKeys = 
    "nsfw" |
    "religius" |
    "political" |
    "racist" |
    "sexist" |
    "explicit" ;


export type Joke = {
    id: number;
    safe: boolean;
    flags: Flag ;
    lang: "cs" |"de" |"en" |"es" |"fr" |"pt" ;
    setup?: string;
    delivery?: string;
    joke?: string;
    type: "single" | "twopart";
    category: "Any" | "Misc" | "Programming" | "Dark" | "Pun" | "Spooky" | "Christmas" ; 
}