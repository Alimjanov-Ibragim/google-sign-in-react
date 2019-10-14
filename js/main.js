function shortestWay(source, target) {
    //Put your code here.
    let res = 0,
        mysource = source.split(''),
        mytarget = target.split('');
        

    for (let i=0; i<mytarget.length; i++) {
        let existEl = false;
        for (let j=0; j< mysource.length; j++) {
            if (mysource[j] == mytarget[i]) {
                existEl = true;
                i++;
            }
        }
        if (!existEl) {
            return -1;
        }
        res++;
    }
    return res;
}

var source = 'abc';
var target = 'abcbc';
shortestWay(source, target);