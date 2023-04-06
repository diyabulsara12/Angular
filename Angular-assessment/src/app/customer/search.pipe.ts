import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(value:any, searchterm:any){
    if(!value)
    {
      return value;
    }
 return value.filter(function(search:any){
   return  search.customername.toLowerCase().indexOf(searchterm.toLowerCase()) > -1  ||  search.description.toLowerCase().indexOf(searchterm.toLowerCase()) > -1 ||  search.status.toLowerCase().indexOf(searchterm.toLowerCase()) > -1 ||
    search.rate.toString().toLowerCase().indexOf() > -1 || search.id.toString().toLowerCase().indexOf(searchterm.toLowerCase()) > -1
   

 })
}
}
