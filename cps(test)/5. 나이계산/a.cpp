// 1 : 90���� ����
// 2 : 90���� ����
// 3 : 2000���� ����
// 4 : 2000���� ����
// ���ش� 2019��
#include<stdio.h>
int main(){
	freopen("in1.txt","rt",stdin);
	char a[20];
	int year, age;
	scanf("%s", &a);
	if(a[7]=='1' || a[7]=='2') year=1900+((a[0]-48)*10+(a[1]-48));
	else year=2000+((a[0]-48)*10+(a[1]-48));
	age=2019-year+1;
	printf("%d ", age);
	if(a[7]=='1' || a[7]=='3') printf("M\n");
	else printf("W\n");
	return 0;
}



// #include <stdio.h>

// int main() {
//     char str[15], sex;
//     scanf("%s", &str);

//     int i, year, age;
//     if(str[7] == '1' || str[7] == '3') {
//         if(str[7] == '1') {
//             year = (str[0] - '0') * 10 + (str[1] - '0') + 1900;
//         }
//         else {
//             year = (str[0] - '0') * 10 + (str[1] - '0') + 2000;
//         }
//         age = 2019 - year + 1;
//         sex = 'M';
//     }
//     else {
//         if(str[7] == '2') {
//             year = (str[0] - '0') * 10 + (str[1] - '0') + 1900;
//         }
//         else {
//             year = (str[0] - '0') * 10 + (str[1] - '0') + 2000;
//         }
//         age = 2019 - year + 1;
//         sex = 'W';
//     }

//     printf("%d %c", age, sex);
// }