/* 첫번째 callback 사용법 */
// words = ['jungwoo', 'taeyong', 'jaehyun', 'mark', 'taeil', 'yuta', 'johnny', 'doyoung', 'haechan'];
// function callback(element){
//     if(element.length > 6){
//         return true;
//     } else {
//         return false;
//     }
// }
// love = words.filter(callback);
// console.log(love);

/* 두번째 callback 사용법 */
// words = ['jungwoo', 'taeyong', 'jaehyun', 'mark', 'taeil', 'yuta', 'johnny', 'doyoung', 'haechan'];

// love = words.filter(function(element){
//     return element.length > 6
// });
// console.log(love);

/* 세번째 callback 사용법 */
// words = ['jungwoo', 'taeyong', 'jaehyun', 'mark', 'taeil', 'yuta', 'johnny', 'doyoung', 'haechan'];

// love = words.filter((element)=>{
//     return element.length > 6;
// });
// console.log(love);

/* 최종(가장 간편한) callback 사용법 */
words = ['jungwoo', 'taeyong', 'jaehyun', 'mark', 'taeil', 'yuta', 'johnny', 'doyoung', 'haechan'];

love = words.filter(element => element.length > 6);
console.log(love);

/* 직접 함수를 정의해서 callback 사용 */
function my_filter(origin, callback){
    var result = [];
    for (var i=0; i<origin.length; i++){
        var current = origin[i];
        if (callback(current)){
            result.push(current);
        }
    }
    return result;
}
new_love = my_filter(words, element => element.length > 6);
console.log(new_love);
