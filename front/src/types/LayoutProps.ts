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
  image?: File | null;
  imageUrl?: string;
}

export interface SectionListProps {
  sections: Section[];
}

export interface LayoutProps extends SectionListProps {
  characterName: string;
  userName: string;
}
