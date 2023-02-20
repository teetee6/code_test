#include <stdio.h>

int a[101], b[101];
int main() {
    int n, i;
    scanf("%d", &n);

    for(i=1; i<=n; i++) {
        scanf("%d", &a[i]);
    }
    for(i=1; i<=n; i++) {
        scanf("%d", &b[i]);

        if(a[i]==b[i]) printf("D\n");
		else if(a[i]==1 && b[i]==3) printf("A\n");
		else if(a[i]==2 && b[i]==1) printf("A\n");
		else if(a[i]==3 && b[i]==2) printf("A\n");
		else printf("B\n");
        
        // if(a[i] == b[i]) printf("D\n");
        // else if(a[i] == 1) {
        //     if(b[i] == 2)
        //         printf("B\n");
        //     else if(b[i] == 3)
        //         printf("A\n");
        // }
        // else if(a[i] == 2) {
        //     if(b[i] == 1)
        //         printf("A\n");
        //     else if(b[i] == 3)
        //         printf("B\n");
        // }
        // else {
        //     if(b[i] == 1)
        //         printf("B\n");
        //     else if(b[i] == 2)
        //         printf("A\n");
        // }
    }
}