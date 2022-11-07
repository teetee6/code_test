// 굳이 Queue를 사용하지 않아도 되는 문제라서, 여기선 shift()같은 연산량이 많은건 지양해야 한다.

function solution(numbers, target) {
    var answer = 0;
    let Queue = [];
    let v;

    Queue.push(0);
    let tmp_Queue;
    for(let num of numbers) {
        tmp_Queue = [];
        // while(Queue.length) {
        //     v = Queue.shift();
        for(let v of Queue) {
            tmp_Queue.push(v + num);
            tmp_Queue.push(v - num);
        }
        Queue = tmp_Queue;
    }
    for(let num of Queue) {
        if(num === target) ++answer;
    }
    
    return answer;
}