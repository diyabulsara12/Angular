import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, str:any):any {
    if(str  == "")
    return value;
  }
  // let newval=value.filter((item : {status :any})  => item.status==)
}
