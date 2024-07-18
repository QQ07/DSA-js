#include <iostream>
#include <vector>
using namespace std;

int fibMemo(int n, vector<int> memo = {})
{
    if (memo[n])
        return memo[n];
    if (n <= 1)
        return n;

    memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
    return memo[n];
}
int main()
{
    cout <<"fibonacci of 5: "<< fibMemo(5);
    return 0;
}