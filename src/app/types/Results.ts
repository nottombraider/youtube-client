import { Result } from './Result';

export interface Results {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: Array<Result>;
}
