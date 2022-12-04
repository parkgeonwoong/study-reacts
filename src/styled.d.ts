/**
 * @desc: Theme을 타입스크립트에서 사용하기 위해서 재정의하는 파일
 */

import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}
