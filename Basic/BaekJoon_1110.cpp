//ver1. while(result != X) 조건으로 풀기
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


//ver2. while(true) 조건으로 풀기
int main() {
  int X;
  int a,b;
  int result;
  int cnt = 0;

  scanf("%d", &X);
  result = X;

  while(true){
    cnt++;
    a = result / 10;
    b = result % 10;
    result = (b*10) + ((a+b)%10);
    
    if(result == X)
      break;
  }

  printf("%d", cnt);
}


//ver3. do-While로 풀기(do-while은 조건 상관없이 최소 1회 반복문을 실행한 뒤 조건을 따진다)
int main() {
  int X;
  int a,b;
  int result;
  int cnt = 0;

  scanf("%d", &X);

  result = X;

  do{
    cnt++;
    a = result / 10;
    b = result % 10;
    result = (b*10) + ((a+b)%10);
    }while(result != X);
    
  printf("%d", cnt);
}
