export interface GeneralInfo{
    locality?: string;
    city?: string;
    getLocality(): string | undefined;
    getCity(): string | undefined;
}
