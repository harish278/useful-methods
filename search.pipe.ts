// Usage
/*
copied from https://plnkr.co/edit/WitglQDcZku4ZxHgi5yj?p=preview
-----------------------------------------------------
// in component ts file
@ViewChild('input')
input: ElementRef;
ngOnInit () {
    let eventObservable = Observable.fromEvent(this.input.nativeElement, 'keyup');
    eventObservable.subscribe();
}

// To set input value to empty when clicked outside of searchbar container (used to make input bar empty)
ngAfterViewInit () {
    let self = this;
    $(document).mouseup(function (e: any) {
        var container = $('.search-form-container');

        // if the target of the click isn't the container...
        // ... nor a descendant of the container
        if (!container.is(e.target)
            && container.has(e.target).length === 0) {
            $('#search').val('');
        }
    });
}
-----------------------------------------------------
// in html
<div class="form-inline search-form">
    <input #input id="search" name="search" class="form-control" type="text" placeholder="Search">
</div>
<div class="search-suggestions-list" [hidden]="input.value.length === 0">
    <div class="item row programs" *ngFor="let event of events | searchPipe: input.value">
        {{event | json}}
    </div>
</div>-----------------------------------------------------
*/
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchPipe',
  pure: false
})
export class SearchPipe implements PipeTransform {
  transform(data: any[], searchTerm: string): any[] {
      searchTerm = searchTerm.toUpperCase();
      return data.filter(item => {
        return item.event_title.toUpperCase().indexOf(searchTerm) !== -1;
      });
  }
}
