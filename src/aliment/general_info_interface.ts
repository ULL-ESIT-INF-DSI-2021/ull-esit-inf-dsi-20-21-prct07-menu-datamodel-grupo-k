/**
 * interfaz que describe el origen de un alimento.
 * @locality y @city son atributos opcionales.
 * 
 */
export interface GeneralInfo{
    locality?: string;
    city?: string;
    getLocality(): string | undefined;
    getCity(): string | undefined;
}
