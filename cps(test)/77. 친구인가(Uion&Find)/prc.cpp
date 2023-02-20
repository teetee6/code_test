#include <stdio.h>

int unf[1001];

int Find(int x) {
    if(x == unf[x]) return x;
    else return unf[x] = Find(unf[x]);
}

void Union(int a, int b) {
    a = Find(a);
    b = Find(b);
    if(a != b) unf[a] = b;
}

int main() {
    int n,m, i, a,b;
    scanf("%d %d", &n, &m);
    for(i=1; i<=n; i++) {
        unf[i] = i;
    }

    for(i=1; i<=m; i++) {
        scanf("%d %d", &a, &b);
        Union(a, b);
    }

    scanf("%d %d", &a, &b);
    int fa = Find(a);
    int fb = Find(b);
    if(fa==fb) puts("YES");
    else puts("NO");
}