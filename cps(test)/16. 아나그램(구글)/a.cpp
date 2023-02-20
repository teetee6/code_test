//알파벳 26개.
// A(65) ~ Z(90)
// a(97) ~ z(122)
#include <stdio.h>

int main() {
    char str[100];
    scanf("%s", &str);
    
    int i, n, arr[150] = {0,};
    for(i=0; str[i] != '\0'; i++) {
        // 소문자는 0 ~ 25
        if(str[i] >= 'a' && str[i] <= 'z') {
            arr[ (str[i] - 'a')]++;
        }
        // 대문자는 30~55
        else if(str[i] >= 'A' && str[i] <= 'Z') {
            arr[ (str[i] - 'A') + 30]++;
        }
    }

    scanf("%s", &str);
    for(i=0; str[i] != '\0'; i++) {
        if(str[i] >= 'a' && str[i] <= 'z') {
            arr[ (str[i] - 'a')]--;
        }
        else if(str[i] >= 'A' && str[i] <= 'Z') {
            arr[ (str[i] - 'A') + 30]--;
        }
    }

    for(i=0; i<26; i++) {
        if(arr[i] != 0) {
            printf("NO");
            return 0; 
        }
    }
    for(i=30; i<56; i++) {
        if(arr[i] != 0) {
            printf("NO");
            return 0; 
        }
    }
    printf("YES");
}