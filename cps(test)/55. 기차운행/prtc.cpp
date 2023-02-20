#include <stdio.h>
#include <vector>
#include <stack>
using namespace std;

int main() {
    int i,j=1, n,m;
    scanf("%d", &n);
    vector<char> str;
    stack<int> s;

    for(i=1; i<=n;  i++) {
        scanf("%d", &m);
        s.push(m);
        str.push_back('P');
        
        while(1) {
            if(s.empty()) break;
            if(s.top() == j) {
                s.pop();
                j++;
                str.push_back('O');
            }
            else break;
        }
    }
    if(!s.empty()) printf("impossible");
    else {
        for(i=0; i<str.size(); i++) 
            printf("%c",str[i]);
    }
}