#include<stdio.h>
#include<algorithm>
using namespace std;
int a[1001], n;
int Count(int s){
	int i, cnt=1, sum=0;
	for(i=1; i<=n; i++){
		if(sum+a[i]>s){		// �뷮�� = ���� �����ϹǷ�, ��ȣ�� �������!
			cnt++;
			sum=a[i];
		}
		else sum=sum+a[i];
	}
	return cnt;
}
int main(){
	// freopen("input.txt", "rt", stdin);
	int m, i, lt=1, rt=0, mid, res, maxx=-2147000000;
	scanf("%d %d", &n, &m);
	for(i=1; i<=n; i++){
		scanf("%d", &a[i]);
		rt=rt+a[i];     // rt = ��ü �뷡 ����
		if(a[i]>maxx) maxx=a[i];
	}
	while(lt<=rt){  // dvd�� ���� �ʿ��ߴٸ�, �뷮�� �Ǵٴ� �ŹǷ�, �뷮�� �ٿ��� �ٽ� Ž������.
		mid=(lt+rt)/2;      // mid = DVD�� �뷡����(�뷮)
		if(mid>=maxx && Count(mid)<=m){		// 1���� dvd �������� ���������� �ȵ�. ��, 1~9���̶� ġ��, DVD�� �Ѱ�� �ּҰ��� 9������ �ľ���.
			res=mid;
			rt=mid-1;
		}
		else lt=mid+1;
	}
	printf("%d\n", res);
	return 0;
}

// DVD�� �뷮(mid)�� �ּҰ� �ǰ� �ϸ鼭, �ִ밹���� DVD�� ��ġ�ؾ� �Ѵ�. 