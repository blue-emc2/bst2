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
  sections: Section[];
}

// LayoutTypeは変換したい

export interface Section {
  id?: number;
  layoutType: LayoutType | string;
  body: string;
  image?: string;
}
