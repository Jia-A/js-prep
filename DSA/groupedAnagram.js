console.log("Grouped anagram")

class GroupedAnagram{
    groupedAnagram(arr){
        const map = {}
        for (let str of arr){
            const sortedStr = str.split("").sort().join("");
            if(!map[sortedStr]){
                map[sortedStr] = [];
            }
            map[sortedStr].push(str);
        }
        return Object.values(map);
    }

    groupedAnagram2(arr){

        const map = {};
        for(let str of arr){
                    
            const charArr = new Array(26).fill(0)
            for (let char of str){
                const idx = char.charCodeAt(0) - 'a'.charCodeAt(0)
                charArr[idx]++;
            }
            const keyString = charArr.join(",");
            if(!map[keyString]){
                map[keyString] = [];
            }
            map[keyString].push(str)  
        }
        return Object.values(map)
    }
}

const groupedAnagram = new GroupedAnagram();
console.log(groupedAnagram.groupedAnagram(["eat", "tea", "tan", "ate", "nat", "bat"])); 
console.log(groupedAnagram.groupedAnagram2(["eat", "tea", "tan", "ate", "nat", "bat"])); 

console.log("--------------------------");