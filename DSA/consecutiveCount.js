console.log("Consecutive Count");

class ConsecutiveCounter {
  consecutiveCount(arr) {
    const set = new Set(arr);
    let longest = 0;
    for (let num of set) {
      if (!set.has(num - 1)) {
        let streak = 1;
       
        while(set.has(num + streak)) {
          streak++;
        }
        longest = Math.max(longest, streak);
      }
      
    }
    return longest;
  }
}

const consecutiveCounter = new ConsecutiveCounter();
console.log(
  consecutiveCounter.consecutiveCount([
    100, 300, 301, 302, 303, 304, 900, 548, 1, 2, 3, 4, 9, 2, 5, 6,
  ])
);
console.log("--------------------------");
