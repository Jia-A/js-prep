console.log("Encode Decode")

class EncodeDecode{

    encode(arr){
        for(let i = 0; i < arr.length; i++){
            arr[i] = arr[i].length + "#" + arr[i];  
        }
        
        return arr.join("");
    }
    // 5#hello5#world4#this2#is3#jam
    decode(str){
        const arr = [];
        let i = 0
        while(i < str.length){
            let j = i;

            while(str[j] !== "#"){
                j++;
            }
            let strLength = parseInt(str.slice(i, j));
            i = j+1
            j = i+strLength
            let word = str.slice(i,j)
            arr.push(word);
            i = j;
            j = i+1
        }
        return arr;
    }
}


const encodeDecode = new EncodeDecode();
console.log(encodeDecode.encode(["hello", "world", "this", "is", "jam"]));
console.log(encodeDecode.decode("5#hello5#world4#this2#is3#jam"));

console.log("--------------------------");