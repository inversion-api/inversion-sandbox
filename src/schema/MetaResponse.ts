export interface Column {
    name: string;
    type: string;
    inPath?: boolean;
    required?: boolean;
}

export interface Endpoint {
    name: string;
    url: string;
    collectionName: string;
    DB: string;
    columns: Column[];
}

export interface Api {
    name: string;
    endpoints: Endpoint[];
}

export interface MetaResponse {
    api: Api[];
}

