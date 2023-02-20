#include <stdio.h>

int main() {
    int n,i;
    scanf("%d", &n);

    int question, answer;

    for(i=0; i<n; i++) {
        scanf("%d %d", &question, &answer);

        int sum = question * (question + 1) / 2;

        if(sum == answer)
            printf("YES");
        else
            printf("NO");
        puts("");
    }

}