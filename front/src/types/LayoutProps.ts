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
  body: string;
  image?: File | undefined;
  imageUrl?: string | undefined;
}

export interface SectionListProps {
  sections: Section[];
}

export interface LayoutProps extends SectionListProps {
  characterName: string;
  userName: string;
  theme?: {};
}
