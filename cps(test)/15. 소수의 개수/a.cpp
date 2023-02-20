#include <stdio.h>
#include <math.h>

bool is_prime(int n) {
    for(int j = 2; j <= sqrt(n); j++) {
        if (n % j == 0) {
            return false;
        }
    }
    return true;
}

int main() {
    int n, cnt = 0;
    scanf("%d", &n);

    for(int i=2; i<=n; i++) {
        if(is_prime(i))
            cnt++;
    }
    printf("%d", cnt);
}

// int main() {
//     int n, i,j, cnt=0, chk=-1;
//     scanf("%d", &n);

//     for(i=2; i<=n; i++) {
//         chk = -1;
//         for(j=2; j<=sqrt(i); j++) {
//             if(i % j == 0) {
//                 chk = 1;
                
//                 break;
//             }
//         }

//         if(chk == -1) {
//             // printf("[%d]\n", i);
//             cnt++;
//         }
//     }

//     printf("%d", cnt);
// }