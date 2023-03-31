import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, searchterm:any){
    if(!value)
    {
      return value;
    }
 return value.filter(function(search:any){
   return  search.productname.toLowerCase().indexOf(searchterm.toLowerCase()) > -1  ||
   search.price.toString().toLowerCase().indexOf(searchterm.toLowerCase()) > -1 || search.avail.toLowerCase().indexOf(searchterm.toLowerCase()) > -1 || search.id.toString().toLowerCase().indexOf(searchterm.toLowerCase()) > -1
   

 })
}

}

