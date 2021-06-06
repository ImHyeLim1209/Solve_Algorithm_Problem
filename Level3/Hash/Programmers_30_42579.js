//https://programmers.co.kr/learn/courses/30/lessons/42579
//제출답안: 장르별 sort가 아직 구현이 안되었음
function solution(genres, plays) {
  //1. 장르 별로 노래의 총 재생횟수 구하기
  //2. 장르 내에서 재생 순으로 수록
  //3. 재생 횟수가 같다면 번호순으로 수록
  const hash = {};
  const N = genres.length;

  const swap = (a, b) => {
    [a, b] = [b, a];
  }

  const getHighestTwoSongs = (songIdxs, newOne, plays) => {
    if (songIdxs.length < 2) {
      const songIdx = songIdxs[0];
      return plays[songIdx] < plays[newOne] ? [newOne, songIdx] : [songIdx, newOne];
    }
    return [...songIdxs, newOne].sort((a, b) => plays[b] - plays[a]).slice(0, 2);
  };

  for (let i = 0; i < N; i++) {
    const genre = genres[i];
    if (!hash[genre]) {
      hash[genre] = [plays[i], [i]];
    } else {
      hash[genre][0] += plays[i];
      hash[genre][1] = getHighestTwoSongs(hash[genre][1], i, plays);
    }
  }

  return Object.values(hash).reduce((acc, cur) => { return [...acc, ...cur[1]] }, []);
}
