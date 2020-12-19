#include <iostream>

int main()
{
  int x;
  int y;
  
  scanf("%d", &x);
  scanf("%d", &y);
  
  
  printf("%d\n", x*(y%10));
  printf("%d\n", x*(y%100/10));
  printf("%d\n", x*(y/100));
  
  printf("%d\n", x*y);
  
  return 0;
}
