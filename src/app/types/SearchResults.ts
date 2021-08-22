import { SearchResult } from './SearchResult';

export interface SearchResults {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<SearchResult>;
}
