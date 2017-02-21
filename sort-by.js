/*Sorts array of objects
@params:
field: field to be considered for sorting
reverse: false if array has to be sorted in ascending, true if array has to be sorted in descending
primer: sort equalizer if you want it to be in lowercase or parseint and so on
*/
sortBy (field: string, reverse: boolean, primer: any) {

    let key = primer ?
        function(x: any) {return primer(x[field]);} :
        function(x: any) {return x[field];};

    reverse = !reverse ? 1 : -1;

    return function (a: any, b: any) {
        return a = key(a), b = key(b), reverse * (((a > b)? 1 : 0) - ((b > a)? 1 : 0));
    };
};