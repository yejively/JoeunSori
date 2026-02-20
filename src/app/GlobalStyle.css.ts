import { globalStyle } from "@vanilla-extract/css";

/** * 1. 전체 요소 초기화 및 박스 모델 설정
 * 모든 요소의 여백을 없애고, 테두리를 포함한 크기 계산(border-box)을 적용합니다.
 */
globalStyle("*, *:before, *:after", {
  margin: 0,
  padding: 0,
  boxSizing: "border-box",
});

/** * 2. HTML5 엘리먼트 & 레이아웃 기본값
 * 브라우저 전체 높이를 사용하기 위한 필수 설정입니다.
 */
globalStyle("html, body, #root", {
  height: "100%",
  width: "100%",
  // 폰트 매끄럽게 처리
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",

  fontFamily: '"Roboto", sans-serif',
  lineHeight: 1.5,
});

/** * 3. 리스트 스타일 및 테이블 초기화
 */
globalStyle("ol, ul", {
  listStyle: "none",
});

globalStyle("table", {
  borderCollapse: "collapse",
  borderSpacing: 0,
});

/** * 4. 링크 스타일 초기화
 */
globalStyle("a", {
  textDecoration: "none",
  color: "inherit",
});

/** * 5. 미디어 요소 초기화
 * 이미지가 박스보다 커져서 튀어나가는 것을 방지합니다.
 */
globalStyle("img, video, canvas, svg", {
  display: "block",
  maxWidth: "100%",
});

/** * 6. 폼 관련 기본 폰트 상속
 * input이나 button은 부모 폰트를 상속받지 않는 경우가 많아 명시해줍니다.
 */
globalStyle("input, button, textarea, select", {
  fontFamily: "inherit",
  fontSize: "inherit",
});
