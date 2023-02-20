#include <stdio.h>

int main() {
    char str[51];
    scanf("%s", &str);

    int i, num=0, cnt=0;
    for(i=0; str[i] != '\0'; i++) {
        if(str[i] >= '0' && str[i] <= '9') {
            num = num*10 + (str[i] - '0');
        }
    }

    for(i=1; i<=num; i++) {
        if(num % i == 0)
            cnt++;
    }

    printf("%d\n%d", num, cnt);
}