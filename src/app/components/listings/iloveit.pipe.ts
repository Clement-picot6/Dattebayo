import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iloveit'
})
export class IloveitPipe implements PipeTransform {

  transform(listings: any, jbzz: any): any {
    if (jbzz === undefined) return listings;
    	return listings.filter(function(listing){
    		return listing.type.toLowerCase().includes(jbzz.toLowerCase());
    	});
  }

}
