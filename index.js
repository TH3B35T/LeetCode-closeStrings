/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {

       function counter(str) {
        let counter = {};
        for (let char of str) {
            counter[char] = (counter[char] || 0) + 1;
        }
        return counter;
    }


    function arraysEqual(a, b) {
        
        if (a.length !== b.length) return false;
        a.sort()
        b.sort()
        for (let i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    let word1_counter = counter(word1);
    let word2_counter = counter(word2);

    if (!arraysEqual(Object.keys(word1_counter), Object.keys(word2_counter))) {
        return false;
    }

    return arraysEqual(Object.values(word1_counter), 
    Object.values(word2_counter));
};
