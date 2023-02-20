#include <stdio.h>

int main() {
    // freopen("in3.txt","rt",stdin);
    char str[101];
    int arr[10] = {0,}, max=-2147, pos;
    scanf("%s", &str);

    for(int i=0; str[i] !='\0'; i++) {
        arr[ str[i] - '0' ]++;
    }

    for(int i=0; i<10; i++) {
        if(arr[i] >= max) {
            max = arr[i];
            pos = i;
        }
    }
    printf("%d", pos);
}