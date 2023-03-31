import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

     transform(value:any, searchterm:any){
    return value.filter(function(search:any){
      return  search.name.toLowerCase().indexOf(searchterm.toLowerCase()) > -1 || search.email.toLowerCase().indexOf(searchterm.toLowerCase()) > -1 ||
      search.phno.toString().toLowerCase().indexOf(searchterm.toLowerCase()) > -1  || search.id.toString().toLowerCase().indexOf(searchterm.toLowerCase()) > -1 

      

    })
  }

}


