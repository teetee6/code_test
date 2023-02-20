#include <stdio.h>
#include <vector>
using namespace std;
int stack[100] , top=-1;

void push(int x) {
    stack[++top] = x;
}

int pop() {
    return stack[top--];
}

int main() {
    int n, k;
    char str[20] = "0123456789ABCDEF";
    scanf("%d %d", &n, &k);
    while(n > 0) {
        push(n % k);
        n /= k;
    }

    while(top != -1) {
        printf("%c", str[pop()]);
    }
    return 0;
}