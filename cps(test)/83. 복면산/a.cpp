#include<stdio.h>
using namespace std;
int a[10], ch[10];
int send() {
	return a[6]*1000+a[1]*100+a[3]*10+a[0];
}
int more() {
	return a[2]*1000+a[4]*100+a[5]*10+a[1];
}
int money() {
	return a[2]*10000+a[4]*1000+a[3]*100+a[1]*10+a[7];
}
void P(int L) {
	if(L==8) {
		if(send()+more()==money()){
			if(a[2] == 0 || a[6] == 0) return;  // s와 e 값이 0이면 안됨.
			printf("  %d %d %d %d\n", a[6], a[1], a[3], a[0]);
			printf("+ %d %d %d %d\n", a[2], a[4], a[5], a[1]);
			printf("---------\n");
			printf("%d %d %d %d %d\n", a[2], a[4], a[3], a[1], a[7]);
		}
	}
	else {
		//복면산도 순열처럼 푸는거다
		for(int i=0; i<10; i++) {
			if(ch[i]==0) {
				a[L]=i;
				ch[i]=1;
				P(L+1);
				ch[i]=0;
			}
		}
	}
}
int main() {
	P(0);
	return 0;
}