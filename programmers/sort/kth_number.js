//array.sort(fn) - If (fn) omitted, the array elements are converted to strings, then sorted according to each character's Unicode code point value.

function solution(array, commands) {
    var answer = [];
    for(let cmd of commands) {
        // if(cmd[0]-1 < 0 || cmd[1] > array.length || cmd[2] > array.length)
        //     continue;
        // if(cmd[0] === cmd[1] && cmd[2] === 1) {
        //     answer.push(array.at(cmd[0]-1));
        //     continue;
        // }
        answer.push(array.slice(cmd[0]-1, cmd[1]).sort((a,b) => a-b).at(cmd[2]-1));
    }
    return answer;
}