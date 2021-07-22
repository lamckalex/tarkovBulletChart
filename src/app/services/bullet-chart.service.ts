import { GoogleSheetsService, GoogleSheetsJSON, Entry } from './google-sheets.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BulletChartService {

  constructor(private googleSheetsService: GoogleSheetsService) { }

  getBulletChart(): Observable<string[][]>{
    return new Observable((observer) => {
      this.googleSheetsService.getData().subscribe((data: GoogleSheetsJSON) => {
        // console.log(data);

        let tableArray: string[][] = [];

        let lastRow = '';
        data.feed.entry.forEach((entry: Entry) => {
          let row = Number(entry.gs$cell.row) - 1;
          let col = Number(entry.gs$cell.col) - 1;
          let val = entry.gs$cell.inputValue;

          if (tableArray[row] === undefined) {
            tableArray[row] = []; 
            
            if (col === 0) {
              lastRow = val;
            }
          } 

          if(col === 1 && tableArray[row][0] === undefined){
            tableArray[row][0] = lastRow;
          }

          tableArray[row][col] = val;

        })

        observer.next(tableArray);
      })
    })
  }
}
