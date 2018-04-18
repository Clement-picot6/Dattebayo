import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(listings: any, term: any): any {
    if (term === undefined) return listings;
    	return listings.filter(function(listing){
    		return listing.title.toLowerCase().includes(term.toLowerCase());
    	});
}
} 