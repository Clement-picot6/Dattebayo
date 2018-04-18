import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(listings: any, pouet: any): any {
    if (pouet === undefined) return listings;
    	return listings.filter(function(listing){
    		return listing.genre.toLowerCase().includes(pouet.toLowerCase());
    	});
  }
}
