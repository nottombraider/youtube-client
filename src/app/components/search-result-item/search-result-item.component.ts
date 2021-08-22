import { Component, OnInit } from '@angular/core';
import { SearchResult } from '../../types/SearchResult';

@Component({
  selector: 'app-search-result-item',
  templateUrl: './search-result-item.component.html',
  styleUrls: ['./search-result-item.component.scss'],
})
export class SearchResultItemComponent implements OnInit {
  searchResult!: SearchResult;

  ngOnInit(): void {}
}
