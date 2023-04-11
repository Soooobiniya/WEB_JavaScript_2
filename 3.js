function timer(time){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve(time)
        }, time);
    }); // promise를 직접 구현한 것..? 여기선 몰라도 되는 코드임..
}
/*
    console.log('start');
    timer(1000).then(function(time){
        console.log('time: '+time);
        return timer(time+1000);
    }).then(function(time){
        console.log('time: '+time);
        return timer(time+1000);
    }).then(function(time){
        console.log('time: '+time);
        console.log('end');
    });
*/

/* 코드 깔끔하게 다듬기 */
async function run(){
    console.log('start');
    var time = await timer(1000)
    console.log('time: '+time);
    time = await timer(time+1000);
    console.log('time: '+time);
    time = await timer(time+1000);
    console.log('time: '+time);
    console.log('end');
    // return time;
}
async function run2(){
    console.log('parent start');
    await run();
    // var time = await run();
    // console.log('time: '+time);
    console.log('parent end');
}
run2().then(function(){
    console.log('parent parent end');
})
