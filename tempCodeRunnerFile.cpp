#include <iostream>

int main() {
     int N;
     cin>>N;
     int a[30];
       int i=0;
        while(N>=2)
        {
            a[i]=N%2;
            N=N/2;
            i++;
        }
    int s=sizeof(a)/sizeof(a[0]);
   string str="";
        for(int j=0;j<30-s;j++)
        {
            str.push_back('0');
        }
        str.push_back('1');
        for(int k=i;k>=0;k--)
        {
            str.push_back(a[i]);
        }
        cout<<str;

    return 0;
}