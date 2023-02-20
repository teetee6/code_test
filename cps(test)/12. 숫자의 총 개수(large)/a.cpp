#include <stdio.h>

int main() {
    // freopen("in2.txt", "rt", stdin);
    int n;
    scanf("%d", &n);
    int digit=0, k=9, cnt=0, tmp;

    tmp = n;

    while(tmp / 10 != 0) {
        digit++;
        cnt += digit * k;
        k *= 10;
        tmp /= 10;
    }
    digit++;
    k = (n - k/9 + 1);
    cnt += digit * k;

    printf("%d", cnt);
}

// 내 사랑 5267
// 1~9 : 1 * (9개)   digit * k로 표현했음. (cnt 먼저 올리고 k는 나중에 10곱하는 식으로 순서를 제어)
// 10~99 : 2 * (90개)