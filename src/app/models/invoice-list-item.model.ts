import { ReferenceAndDate } from "./reference-and-date.model";
import { ClientInformation } from "./client-information.model";

/**
 * Represents a invoice listing item that will be displayed in the listing page for example
 */
export interface InvoiceListItem {
  refAndDate: ReferenceAndDate;
  clientInfo: ClientInformation;
  total: number;
  unit: string;
}
