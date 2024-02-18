/**
 *  @desc : 영화 API에서 이미지 경로를 가져오는 함수
 *  @컴포넌트 : Home.tsx
 */
export function makeImagePath(id: string, format?: string) {
  return `https://image.tmdb.org/t/p/${format ? format : "original"}/${id}`;
}
