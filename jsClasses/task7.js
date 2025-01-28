function areAnagrams(s, t) {
    if (s.length !== t.length) return false;
    
    s = s.toLowerCase();
    t = t.toLowerCase();
    
    const charCountS = {};
    const charCountT = {};
    
    for (let i = 0; i < s.length; i++) {
        charCountS[s[i]] = (charCountS[s[i]] || 0) + 1;
        charCountT[t[i]] = (charCountT[t[i]] || 0) + 1;
    }
    
    for (let char in charCountS) {
        if (charCountS[char] !== charCountT[char]) {
            return false;
        }
    }
    
    return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("cat", "tac"));
console.log(areAnagrams("rat","tar"));
console.log(areAnagrams("cat", "dog"));
console.log(areAnagrams("fish", "chicken"));