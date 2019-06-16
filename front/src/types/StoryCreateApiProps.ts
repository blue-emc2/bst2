import { LayoutType } from '../App';

export interface StroiesCreateAPIProps {
  characterName: string;
  userName: string;
  sections: SectionForRequest[];
}

export interface SectionForRequest {
  layoutType: LayoutType;
  text: Text;
}

interface Text {
  body: string;
}
