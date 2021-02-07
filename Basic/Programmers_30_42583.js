//https://programmers.co.kr/learn/courses/30/lessons/42583?language=javascript
////1. 초기풀이방법: bridge 길이만큼 0으로 채워져있는 배열 bridge를 만든 후 추가되면 0인 값을 트럭의 weight로 변경한다.
function solution(bridge_length, weight, truck_weights) {
  var second = 0;

  let bridge = Array(bridge_length).fill(0);
  let weightTrucksOnBridge; //bridge 위의 트럭들의 무게 합
  let truck;
  let numTruckOnBridge;
  let exitTrucks = [];
  let numTruck = truck_weights.length;

  while (exitTrucks.length < numTruck) {
    //기존 트럭 이동
    let exitTruck = bridge.shift();
    if (exitTruck !== 0) exitTrucks.push(exitTruck);
    bridge.push(0);
    numTruckOnBridge = bridge.filter((element) => (element !== 0)).length;
    weightTrucksOnBridge = bridge.reduce((acc, cur) => (acc + cur));

    //트럭 추가
    truck = truck_weights[0];
    if (numTruckOnBridge < bridge_length && weightTrucksOnBridge + truck <= weight) {
      bridge[bridge.length - 1] = truck;
      truck_weights.shift();
    }

    second++;
  }
  return second;
}

////2. 남은 거리를 함께 저장하는 방법
function solution(bridge_length, weight, truck_weights) {
  var second = 0;
  let total_truck_weight = 0;
  let bridge_queue = []; //[ [무게, 남은 거리], [무게, 남은 길이] ]

  do {
    //1. 이동한다.
    bridge_queue = bridge_queue.map(([truckWeight, truckDistance]) => ([truckWeight, truckDistance - 1]));
    if (bridge_queue.length > 0 && bridge_queue[0][1] === 0) {
      let [truckWeight, truckDistance] = bridge_queue.shift();
      total_truck_weight -= truckWeight;
    }

    //2. 트럭을 올린다.
    if (total_truck_weight + truck_weights[0] <= weight) {
      let truckWeight = truck_weights.shift();
      bridge_queue.push([truckWeight, bridge_length]);
      total_truck_weight += truckWeight;
    }

    second++;
  } while (bridge_queue.length != 0)

  return second;
}

////3. 트럭 올리기에 실패했을 때 첫 번째 트럭이 빠지는 시점까지 시간을 워프하는 방법
////이 방법의 경우 지난 시간을 기준으로 트럭을 지났는지 안 지났는지가 결정된다.
function solution(bridge_length, weight, truck_weights) {
  var second = 0;
  let total_truck_weight = 0;
  let bridge_queue = []; //[ [무게, 남은 거리], [무게, 남은 길이] ]

  while (bridge_queue.length !== 0 || truck_weights.length > 0) {
    //1. 항상 가장 앞에있는 트럭을 뺀다.
    if (bridge_queue.length > 0 && bridge_queue[0][1] === second) {
      let [truckWeight, truckDistance] = bridge_queue.shift();
      total_truck_weight -= truckWeight;
    }

    //2. 트럭을 올린다.
    if (total_truck_weight + truck_weights[0] <= weight) {
      let truckWeight = truck_weights.shift();
      bridge_queue.push([truckWeight, second + bridge_length]); //트럭이 나갈 시점을 계산하여 bridge_queue에 넣는다.
      total_truck_weight += truckWeight;
    } else if (bridge_queue.length > 0) { //트럭 올리기에 실패했다면 첫번째 트럭이 빠지는 시점 직전까지 시간을 워프한다.
      let leftDistance = bridge_queue[0][1];
      second = (leftDistance - 1); //아래에서 second++를 해주므로 -1만큼만 더한다.
    }
    second++;
  }

  return second;
}
