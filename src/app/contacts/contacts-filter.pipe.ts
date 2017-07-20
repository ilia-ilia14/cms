import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contactsFilter'
})
export class ContactsFilterPipe implements PipeTransform {

  transform(value: any, filterString: String): any {
    if (value.length === 0 || filterString === '') {
      return value;
    }
    const resultArray = [];
    for (const item of value) {
      if (item.name.toLowerCase().includes(filterString.toLowerCase())) {
        resultArray.push(item);
      }
    }
    return resultArray;
  }
}

