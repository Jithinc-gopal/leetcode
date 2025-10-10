/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let a = []
    for(i=0;i<order.length;i++){
        if(friends.includes(order[i])){
           a.push(order[i])

        } 
    
    }
    return a
    
};