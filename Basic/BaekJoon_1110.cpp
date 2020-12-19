#include <iostream>

int main() {
  int X;
  int a,b;
  int result;
  int cnt = 0;

  scanf("%d", &X);

  a = X / 10;
  b = X % 10;

  while(result != X){
    cnt++;
    result = (b*10) + ((a+b)%10);
    a = result / 10;
    b = result % 10;
  }

  printf("%d", cnt);
}
