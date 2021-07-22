import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

type TableColumnDef = {
  name: string;
  render?: Function;
  onClick?: Function;
}


@Component({
  selector: 'app-bullet-table',
  templateUrl: './bullet-table.component.html',
  styleUrls: ['./bullet-table.component.scss']
})
export class BulletTableComponent implements OnInit {

  @ViewChild('search') searchElement: ElementRef | undefined;

  @Input() data: string[][];

  tableSpec: TableColumnDef[] = []
  searchText: string = '';
  focused = false;

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent): void {
    if (!this.focused && !event.ctrlKey) {

      var inp = String.fromCharCode(event.keyCode);
      if (/[a-zA-Z0-9-_ ]/.test(inp)) {
        event.preventDefault();
        this.searchText += event.key;
        this.searchElement?.nativeElement.focus();
      }

    }
  }

  constructor(private sanitizer: DomSanitizer) {
    this.data = [];
  }

  armorPen(value: string) {
    let color = 'red';

    let num = Number(value);

    switch (num) {
      case 6:
        color = '#00990080';
        break;
      case 5:
        color = '#00640080';
        break;
      case 4:
        color = '#FB9C0E80';
        break;
      case 3:
        color = '#fb9c0e80';
        break;
      case 2:
        color = '#EB6C0D80';
        break;
      case 1:
        color = '#dd333380';
        break;
      case 0:
        color = '#b3242580';
        break;
    }



    return this.sanitizer.bypassSecurityTrustStyle('background-color: ' + color);
  }


  ngOnInit(): void {
    this.tableSpec = [
      {
        name: 'Caliber',
        render: (val: string)=>{
          return this.sanitizer.bypassSecurityTrustStyle('cursor: pointer');
        },
        onClick: (row: number, col: number)=>{
          this.searchText = this.data[row][col]
        }
      },

      {
        name: 'Name',
      },
      {
        name: 'Damage',
      },
      {
        name: 'Penetration Power',
      },
      {
        name: 'Armor damage %',
      },
      {
        name: 'Accuracy %',
      },
      {
        name: 'Recoil %',
      },
      {
        name: 'Frag.chance',
      },
      {
        name: 'L. Bleed',
      },
      {
        name: 'H. Bleed',
      },
      {
        name: 'AP 1',
        render: (val: string) => {
          return this.armorPen(val)
        }
      },
      {
        name: 'AP 2',
        render: (val: string) => {
          return this.armorPen(val)
        }
      },
      {
        name: 'AP 3',
        render: (val: string) => {
          return this.armorPen(val)
        }
      },
      {
        name: 'AP 4',
        render: (val: string) => {
          return this.armorPen(val)
        }
      },
      {
        name: 'AP 5',
        render: (val: string) => {
          return this.armorPen(val)
        }
      },
      {
        name: 'AP 6',
        render: (val: string) => {
          return this.armorPen(val)
        }
      }
    ]
  }

  getStyle(value: string, i: number) {
    let columnDef = this.tableSpec[i];
    if (columnDef && columnDef.render) {
      return columnDef.render(value);
    }
    return '';
  }

  onClick(row: number, col: number){
    let columnDef = this.tableSpec[col];
    if(columnDef && columnDef.onClick){
      columnDef.onClick(row, col);
    }
  }

  clearSearch(){
    this.searchText = '';
  }
}
