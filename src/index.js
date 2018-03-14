module.exports = function count(s, pairs) {
    var N = 1;

    for(let i = 0; i < pairs.length; i++) {
        if(pairs[i][1] > 50)
            return 0;
        N *= Math.pow(pairs[i][0], pairs[i][1]);
        if(N > 10000000)
            return 0;
    }

    var a = 0;

    for(let i = 0; i < N; i++) {
        a += check(i, s, N);
    }

    return a % 1000000007;
}

function check (i, s, N) {
    for(let j = 0; j < s.length; j++) {
        var gcd = findGCD(i + j, N);
        if (!(gcd != 1 && s[j] == 0) && !(gcd == 1 && s[j] == 1)) {
            return 0;
        }
    }
    return 1;
}

function findGCD (a, b) {
    if (!b) {
        return a;
    }
    return findGCD(b, a % b);
}
