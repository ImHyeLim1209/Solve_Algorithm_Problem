#include <iostream>
#include <string>

int main() {
  int X;
  int a,b;
  int result;
  int cnt = 1;

  scanf("%d", &X);

  a = X / 10;
  b = X % 10;
  result = (b*10) + ((a+b)%10);

  while(result != X){
    cnt++;
    a = result / 10;
    b = result % 10;
    result = (b*10) + ((a+b)%10);
  }

  printf("%d", cnt);
}
