#include <iostream>
#include <stdio.h>
#include <vector>
using namespace std;

vector<int> arr(10), ch(10);

int send() {
    return (arr[0] * 1000) + (arr[1] * 100) + (arr[2] * 10) + (arr[3] * 1);
}

int more() {
    return (arr[4] * 1000) + (arr[5] * 100) + (arr[6] * 10) + (arr[1] * 1);
}

int money() {
    return (arr[4] * 10000) + (arr[5] * 1000) + (arr[2] * 100) + (arr[1] * 10) + (arr[7] * 1);
}

void dfs(int L) {
    if(L == 8) {
        if(send() + more() == money()) {
            if(arr[4] == 0 || arr[0] == 0) return;
            else {
                printf("  %d %d %d %d\n", arr[0], arr[1], arr[2], arr[3]);
                printf("+ %d %d %d %d\n", arr[4], arr[5], arr[6], arr[1]);
                printf("---------------\n");
                printf("%d %d %d %d %d\n\n", arr[4], arr[5], arr[2], arr[1], arr[7]);
            }
        }
    }
    else {
        for(int i = 0; i<10; i++) {
            if(ch[i] == 0) {
                ch[i] = 1;
                arr[L] = i;
                dfs(L+1);
                ch[i] = 0;
            }
        }
    }
}

int main() {
    dfs(0);
}