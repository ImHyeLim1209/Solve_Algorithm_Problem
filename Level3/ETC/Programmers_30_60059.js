// https://programmers.co.kr/learn/courses/30/lessons/60059
// 자물쇠 N*N, 열쇠 M*M 열쇠로 자물쇠를 열수 있을까? 리턴. 열쇠는 회전과 이동이 가능하다.
function solution(key, lock) {
  const rotateR = (matrix) => {
    return matrix.reduce((acc, row) => {
      return row.map((col, colIdx) => {
        return [col, ...(acc[colIdx] || [])];
      });
    }, []);
  };

  const rotateL = (matrix) => {
    return matrix.reduce((acc, row) => {
      return row.map((col, colIdx) => {
        return [...(acc[colIdx] || []), col];
      });
    }, []);
  };

  const moveRight = (matrix) => {
    const result = [];
    for (let row = 0; row < matrix.length; row++) {
      const rowValues = [0];
      for (let col = 0; col < matrix.length-1; col++) {
        rowValues.push(matrix[row][col]);
      }
      result.push(rowValues);
    }
    return result;
  }

  const moveLeft = (matrix) => {
    const result = [];
    for (let row = 0; row < matrix.length; row++) {
      const rowValues = [];
      for (let col = 1; col < matrix.length; col++) {
        rowValues.push(matrix[row][col]);
      }
      result.push([...rowValues, 0]);
    }
    return result;
  }

  const moveUp = (matrix) => {
    const result = [];
    for (let row = 1; row < matrix.length; row++) {
      const rowValues = [];
      for (let col = 0; col < matrix.length; col++) {
        rowValues.push(matrix[row][col]);
      }
      result.push(rowValues);
    }
    result.push(Array(matrix.length).fill(0));
    return result;
  }

  const moveDown = (matrix) => {
    const result = [];
    result.push(Array(matrix.length).fill(0));
    for (let row = 0; row < matrix.length-1; row++) {
      const rowValues = [];
      for (let col = 0; col < matrix.length; col++) {
        rowValues.push(matrix[row][col]);
      }
      result.push(rowValues);
    }
    return result;
  }

  const getKey = (matrix) => {
    const result = [];
    for (let row = 0; row < matrix.length; row++) {
      const rowValues = [];
      for (let col = 0; col < matrix.length; col++) {
        const value = matrix[row][col] === 1 ? 0 : 1;
        rowValues.push(value);
      }
      result.push(rowValues);
    }
    return result;
  }

  const isKey = (key, target) => {
    for (let row = 0; row < key.length; row++) {
      for (let col = 0; col < key[row].length; col++) {
        if (key[row][col] !== target[row][col]) return false;
      }
    }
    return true;
  }

  const rightKey = getKey(lock);
  const aux = () => {
    // rightKey와 동일하면 return true
    // 그렇지 않으면 계속 탐색? => 탐색이 끝이 없음..!
  }
  return aux();
}

console.log(solution([[0, 0, 0], [1, 0, 0], [0, 1, 1]], [[1, 1, 1], [1, 1, 0], [1, 0, 1]]));
