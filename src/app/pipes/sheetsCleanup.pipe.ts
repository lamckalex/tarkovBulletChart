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
@Pipe({ name: 'sheetsCleanup' })
export class SheetsCleanupPipe implements PipeTransform {
    transform(val: string): string {
        if(val && val.indexOf('=+') > -1){
            val = val.replace('=+','');
        }
        return val;
    }
}