// Usage
/*
<div *ngFor="let groupedEvent of oldEvents | groupBy:['start', false]">
    <div class="row date-group">
        <span>{{groupedEvent.key}}</span>
    </div>
    <div>
        <div class="row events-list" *ngFor="let event of groupedEvent.value">
            {{event | json}}
        </div>
    </div>
</div>
*/

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'groupBy'})
export class GroupByPipe implements PipeTransform {
    transform(value: Array<any>, args: any[]): Array<any> {
        let field = args[0];
        let ascending = args[1];
        const groupedObj = value.reduce((prev, cur)=> {
            if(!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            } else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).sort(function (a, b) {
            if(a.toLowerCase() < b.toLowerCase()) {
                return ascending ? -1 : 1;
            } else if(a.toLowerCase() > b.toLowerCase()) {
                return ascending ? 1 : -1;
            } else {
                return 0;
            }
        }).map(key => {
            return { key, value: groupedObj[key] };
        });
    }
}
