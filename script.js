 function majorityElementChecker(arr)
    {
        let map = new Map();
 
        for(let i = 0; i < arr.length; i++) {
            if (map.has(arr[i])) {
                    let count = map.get(arr[i]) +1;
                    if (count > arr.length /2) {
                      //  document.write("Majority found :- " + arr[i]);
                        return arr[i];
                    } else
                        map.set(arr[i], count);
 
            }
            else
                map.set(arr[i],1);
            }
            return 1;
            //document.write(" No Majority element");
    }

module.exports = majorityElementChecker;