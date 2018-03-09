module.exports = function count(s, pairs) {
    var N = 1;

    for(let i = 0; i < pairs.length; i++) {
        if(pairs[i][1] > 10)
            return 0;
        N *= Math.pow(pairs[i][0], pairs[i][1]);
        if(N > 100000)
            return 0;
    }

    var arr = [];

    for(let i = 0; i < N; i++){
        arr[i] = i;
    }

    for(let j = 0; j < s.length; j++){

        var b = check(j, s, N, arr);
        arr.splice(0, arr.length);
        arr = b;
    }

    return arr.length % 1000000007;
}


function check (j, s, N, arr) {
    var a = [];
    for(let i = 0; i < arr.length; i++) {
        if ((findGCD(arr[i] + j, N) != 1 && s[j] == 0) || (findGCD(arr[i] + j, N) == 1 && s[j] == 1)) {
            a.push(arr[i]);
        }
    }
    return a;
}

function findGCD (a, b) {
    if (!b) {
        return a;
    }

    return findGCD(b, a % b);
}
