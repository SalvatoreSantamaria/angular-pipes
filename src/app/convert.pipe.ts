import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    
    if(value) {


      switch(targetUnits) {
        case 'km':
          return(value * 1.60934);
        case 'miles':
          return(value/1.60934);
        default: 
          // return(value);
          throw new Error('Target unit not supported')
      }


    }
    return null;
  }

}
