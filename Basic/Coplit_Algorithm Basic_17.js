//문제: 수를 입력받아 제곱근 값을 소수점 두 자리까지 리턴
//범위를 좁혀가며 찾는다. if target = root(10)
//루트(3*3) < 루트10 
//루트(3.1*3.1) < 루트10 
//루트(3.16*3.16) < 루트10

function computeSquareRoot(num) {
  const diffs = [1, 0.1, 0.01, 0.001];
  let base = 1;
  
  for(let i = 0; i < diffs.length; i++){
    while(base * base < num){
      base = base + diffs[i];
    }
    if(base * base === num){
      return base;
    }else{
      base = base - diffs[i];
    }
  }
  return Number(base.toFixed(2))
}
