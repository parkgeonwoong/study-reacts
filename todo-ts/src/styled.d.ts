/**
 * @desc : theme 테마 타입 지정
 */

import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    textColor: string;
  }
}
