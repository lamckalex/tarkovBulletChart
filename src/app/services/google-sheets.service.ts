import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

// https://www.freecodecamp.org/news/cjn-google-sheets-as-json-endpoint/
const URL = 'https://spreadsheets.google.com/feeds/cells/1zAA8iJjTrRVcb3zM47XvbxSlm95Ll-ZbeK_7UGw887I/1/public/full?alt=json';

// {
//   row: "80",
//   col: "12",
//   inputValue: "6",
//   numericValue: "6.0",
//   $t: "6"
// }
export type Cell = {
  row: string;
  col: string;
  inputValue: string;
  numericValue: string;
  $t: string;
}

export type Entry = {
  category: any;
  content: any;
  'gs$cell': Cell;
  id: any;
  link: any;
  title: any;
  updated: any;
}

export type GoogleSheetsJSON = {
  version: string,
  encoding: string,
  feed: {
    entry: Entry[]
  }
}

@Injectable({
  providedIn: 'root'
})
export class GoogleSheetsService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get<GoogleSheetsJSON>(URL);
  }

}
