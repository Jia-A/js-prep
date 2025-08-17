console.log("Is anagram or not");

class IsAnagram {

    isAnagram(s1, s2){
       if(s1.length !== s2.length) return false;

       const s1Obj = {}, s2Obj = {}

       for (let i =0; i<s1.length; i++){
        s1Obj[s1[i]] = (s1Obj[s1[i]] || 0) + 1;
        s2Obj[s2[i]] = (s2Obj[s2[i]] || 0) + 1;
       }

       for(const key in s1Obj){
        if(s1Obj[key] !== s2Obj[key])
            return false;
       }
       return true;
    }   

    isAnagram2(s1, s2){
        if(s1.length !== s2.length) return false;

        const s1Sorted = s1.split("").sort().join("");
        const s2Sorted = s2.split("").sort().join("");

        return s1Sorted === s2Sorted;

    }
}

const anagram = new IsAnagram();
console.log(anagram.isAnagram("listen", "silent"));
console.log(anagram.isAnagram2("listen", "silenkt"));

console.log("--------------------------");