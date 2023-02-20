#include <stdio.h>

int main() {
    char str[32];
    int cnt=0;
    scanf("%s", &str);

    int i;
    for(i=0; str[i] != '\0'; i++) {
        if(str[i] == '(') {
            cnt++;
        } else 
            cnt--;
        
        if(cnt < 0) {
            printf("NO");
            return 0;
        }
    }

    if(cnt == 0)
        printf("YES");
    else
        printf("NO");
}