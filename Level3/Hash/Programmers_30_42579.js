//https://programmers.co.kr/learn/courses/30/lessons/42579
//제출답안: 
//1. 장르 별로 노래의 총 재생횟수 구하기
//2. 장르 내에서 재생 순으로 수록
//3. 재생 횟수가 같다면 번호순으로 수록
function solution(genres, plays) {
  const hash = {};
  const N = genres.length;

  //항상 2개씩만 남길 것
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
  //마지막에 장르별 노래 갯수 순으로 출력해야하므로 별개의 배열 priorities를 만듦([['pop', 3100], ['classic', 1450]])
  const priorities = Object.entries(hash).map(([key, value]) => [key, value[0]]).sort((a, b) => b[1] - a[1]);
  return priorities.reduce((acc, cur) => {
    const [genre, _] = cur;
    return [...acc, ...hash[genre][1]];
  }, []);
}
