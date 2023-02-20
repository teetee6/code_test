#include <iostream>
#include <vector>
#include <algorithm>
#include <queue>
using namespace std;

struct Data {
    int day;
    int money;
    Data(int a, int b) {
        money = a;
        day = b;
    }
    bool operator<(const Data &b) const {
        return day > b.day;
    }
};

int main() {
    int i,n, a,b, last_day=-2147;
    cin>>n;
    vector<Data> T;
    for(i=1; i<=n; i++) {
        cin>>a>>b;
        T.push_back(Data(a,b));
        if(b> last_day) last_day = b;
    }
    sort(T.begin(), T.end());

    int j=0, res=0;
    priority_queue<int> Q;

    for(i=last_day; i >= 1; i--) {
        for(; j<n; j++) {
            if(T[j].day < i) break;
            Q.push(T[j].money);
        }
        if(!Q.empty()) {
            res += Q.top();
            Q.pop();
        }
    }
    cout<<res;

}