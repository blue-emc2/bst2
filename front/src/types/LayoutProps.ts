//
// フォームのレイアウトを保存するInterface群
//

export enum TextPosition {
  CENTER = 'center',
  LEFT = 'left',
  RIGHT = 'right',
}

export interface Section {
  textPosition: TextPosition;
  text: string;
  image?: File;
}

export interface LayoutProps {
  characterName: string;
  userName: string;
  sections: Section[];
}
