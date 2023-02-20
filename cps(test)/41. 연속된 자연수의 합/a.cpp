#include<stdio.h>
int main(){
	// freopen("input.txt", "rt", stdin);
	// freopen("output.txt", "wt", stdout);
	int a, b=1, cnt=0, tmp, i;
	scanf("%d", &a);
	tmp=a;
	a--;
	while(a>0){
		b++;
		a=a-b;
		if(a%b==0){
			for(i=1; i<b; i++){
				printf("%d + ", (a/b)+i);
			}
			printf("%d = %d\n", (a/b)+i, tmp);
			cnt++;
		}
	}
	printf("%d\n", cnt);
	return 0;
}

// 15 - (1+2) = (6*2)
// 15 - (1+2+3) = (3*3)
// a = (a/b) * b

// 좌항을 a로, 
// 우항의 6을 a/b로, 2,3을 b로.