#include <iostream>

int main()
{
  int hour;
  int min;
  
  scanf("%d %d", &hour, &min);
  
  min -= 45;
  
  if(min < 0){
	  hour -=1;
	  min += 60;
  }
  
  if(hour<0) 
    hour=23;
  
  printf("%d %d", hour, min);
  return 0;
}
