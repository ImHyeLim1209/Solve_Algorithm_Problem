#include <iostream>
using namespace std;

int main() {
    int *score;
    int c;
    int avg = 0;
    int overAvgCnt = 0;

    scanf("%d", &c);

    for(int i = 0; i<c; i++){
      int N;
      scanf("%d", &N);

      score = (int*) malloc(sizeof(int)*N);
      avg = 0;
      for(int j = 0; j < N; j++){
        scanf("%d", &score[j]);
        avg += score[j];
      }
      avg = float(avg / N);
      
      overAvgCnt = 0;
      for(int j = 0; j < N; j++){
        if(score[j] > avg){
          overAvgCnt++;
        } 
      }
      printf("%.3f%%\n", float(overAvgCnt)/(N) * 100);
      free(score);
    }
}
