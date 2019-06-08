/**
 * [WIP] Specifies each invoice item with some properties
 */
export interface InvoiceItem {
    date: Date;
    hoursCount: number;
    description: string;
    unitPrice: number;
    vat: number;
    price: number;
}