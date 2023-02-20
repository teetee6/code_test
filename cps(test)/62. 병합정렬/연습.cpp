#include <iostream>
#include <vector>
using namespace std;

int n;
vector<int> arr(n+1), tmp(n+1);

void divide(int lt, int rt) {
    int p1,p2,p3;
    int mid;
    if(lt < rt) {
        mid = (lt + rt) / 2;
        divide(lt, mid);
        divide(mid+1, rt);
        p1 = lt;
        p2 = mid+1;
        p3 = lt;
        while(p1 <= mid && p2 <= rt) {
            if(arr[p1] < arr[p2])
                tmp[p3++] = arr[p1++];
            else
                tmp[p3++] = arr[p2++];
        }
        while(p1 <= mid)
            tmp[p3++] = arr[p1++];
        while(p2 <= rt)
            tmp[p3++] = arr[p2++];
        for(int i=lt; i<=rt; i++)
            arr[i] = tmp[i];
    }
}

int main() {
    freopen("input.txt", "rt", stdin);
    int i;
    cin>>n;
    for(i=1; i<=n; i++) cin>>arr[i];

    divide(1, n);

    for(i=1; i<=n; i++) cout<<arr[i]<<" ";
}