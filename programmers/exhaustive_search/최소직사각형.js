function solution(sizes) {
    let max_w, max_h;
    max_w = max_h = 0;
    sizes.forEach(v => {
        if(v[0] > v[1])
            [v[0], v[1]] = [v[1], v[0]]
        max_w = Math.max(max_w, v[0]);
        max_h = Math.max(max_h, v[1]);
    })
    return (max_w * max_h);
}