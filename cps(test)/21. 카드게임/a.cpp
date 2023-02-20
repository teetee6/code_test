#include <stdio.h>

int a[11], b[11];
int main() {
    int i,j, a_score=0, b_score=0, last_win=-1;

    for(i=1; i<=10; i++) {
        scanf("%d", &a[i]);
    }
    for(i=1; i<=10; i++) {
        scanf("%d", &b[i]);
    }

    for(i=1; i<=10; i++) {
        if(a[i] > b[i]) {
            a_score += 3;
            last_win = 1;
        }
        else if(a[i] < b[i]) {
            b_score += 3;
            last_win = 2;
        } else {
            a_score += 1;
            b_score += 1;
        }
    }

    printf("%d %d\n", a_score, b_score);
    if(a_score == b_score) {
        if(last_win == -1) printf("D");
        else if(last_win == 1) printf("A");
        else printf("B");
    }
    else if(a_score > b_score)
        printf("A");
    else
        printf("B");
}