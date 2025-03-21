import { SearchResultItems } from "./search-result.model";

export interface SearchResultsCacheEntry {
  items: SearchResultItems;
  ttl: Date;
}
