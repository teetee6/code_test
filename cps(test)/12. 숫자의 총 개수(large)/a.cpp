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

// �� ��� 5267
// 1~9 : 1 * (9��)   digit * k�� ǥ������. (cnt ���� �ø��� k�� ���߿� 10���ϴ� ������ ������ ����)
// 10~99 : 2 * (90��)