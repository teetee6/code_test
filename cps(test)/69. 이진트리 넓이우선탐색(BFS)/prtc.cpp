#include <stdio.h>
#include <vector>
using namespace std;
int ch[10], Q[100], front=-1, back=-1;

vector<int> map[10];
int main() {
    freopen("input.txt", "rt", stdin);
    int i, a,b;
    for(i=0; i<6; i++) {
        scanf("%d %d", &a, &b);
        map[a].push_back(b);
        map[b].push_back(a);
    }

    Q[++back] = 1;
    ch[1] = 1;
    while(front < back) {
        int x = Q[++front];
        printf("%d ", x);
        for(i=0; i<map[x].size(); i++) {
            if( ch[map[x][i]] == 0 ) {
                ch[map[x][i]] = 1;
                Q[++back] = map[x][i];
            }
        }
    }
}