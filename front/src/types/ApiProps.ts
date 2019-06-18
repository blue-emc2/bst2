import { LayoutType } from '../App';
import { Section } from './LayoutProps';

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

export interface SectionForLayout {
  id?: number;
  layoutType: LayoutType | string;
  text: string;
  image?: string;
}
