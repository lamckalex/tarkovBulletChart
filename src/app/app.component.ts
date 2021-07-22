import { BulletChartService } from './services/bullet-chart.service';
import { GoogleSheetsService } from './services/google-sheets.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'tarkovBulletChart';
  tableArray: string[][] | undefined;

  constructor(private bcService: BulletChartService){

  }

  ngOnInit(){
    this.bcService.getBulletChart().subscribe((val)=>{
      this.tableArray = val;
    })
  }

}
