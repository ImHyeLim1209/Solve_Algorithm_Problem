//방법1: 수열을 받으면서 x보다 작으면 문자열로 추가
#include <iostream>
#include <string>
using namespace std; //namespace 안 부르고 일일히 std::붙이면 더 오래 걸린다.

int main() {
  int n, x;
  string str;
  scanf("%d %d", &n, &x);
  
  for(int i=0; i<n; i++){
    int temp;
    scanf("%d", &temp);

    if(temp < x){ 
      str = str + to_string(temp) + " ";
    }
  }

  str = str.substr(0, str.length()-1); //마지막 공백 제거

  cout << str;
}


//그러나 이 문제의 경우 마지막에 공백을 꼭 제거하지 않아도 되므로 + 입력이 공백을 기준으로 한 줄로 오기 때문에 단순하게 다음과 같이 풀 수 있다.
//방법2: scanf해서 작은 경우 바로 "숫자 " 출력
#include <cstdio> 
#include <algorithm>
using namespace std;

int main(void)
{
	int N,X,a;
    scanf("%d %d",&N,&X);
    for(int i=0;i<N;i++){
        scanf("%d",&a);
        if (a<X)
          printf("%d ",a);
    }
}
