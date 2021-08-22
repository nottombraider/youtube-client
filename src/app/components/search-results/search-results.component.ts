import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../types/SearchResult';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  searchResults!: Array<SearchResult>;

  ngOnInit(): void {}
}
