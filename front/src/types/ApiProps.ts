import { LayoutType } from '../App';

export interface API {
  data: Data;
  loaded: boolean;
}

export interface Data {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface Attributes {
  characterName: string;
  userName: string;
  sections: SectionForLayout[];
}

// LayoutTypeは変換したい

export interface SectionForLayout {
  id?: number;
  layoutType: LayoutType | string;
  body: string;
  image?: string;
}
