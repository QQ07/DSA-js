#include <iostream>
#include <vector>
using namespace std;

void rev(vector<int> arr)
{
    
}

int main()
{
    vector<int> arr = {1, 2, 4, 5};
    int n = arr.size();
    for (int i = 0; i < n / 2; i++)
        swap(arr[i], arr[n - i - 1]);
    // cout << "hello";
    for (int i = 0; i < n; i++)
        cout << arr[i];
    return 0;
}