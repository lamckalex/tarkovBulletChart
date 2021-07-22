import { Pipe, PipeTransform } from '@angular/core';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 | exponentialStrength:10 }}
 *   formats to: 1024
*/
@Pipe({ name: 'searchFilter' })
export class SearchFilterPipe implements PipeTransform {
    transform(rows: string[][], filterText: string, indexes: number[]): string[][] {
        if(filterText.length > 0){
            filterText = filterText.toLowerCase();
            rows = rows.filter((val) => {
                let found = false;

                for (let index of indexes) {
                    let rowText = val[index].toLowerCase()
                    if (rowText.indexOf(filterText) > -1) {
                        found = true;
                        break;
                    }
                }

                return found;
            })

        }
        
        return rows;
    }
}