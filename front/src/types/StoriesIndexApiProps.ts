// 似てるけど微妙に異なるJSONのinterfaceはどう共通化するのがいいのかな
export interface StroiesIndexAPIProps {
  data: Datum[];
}

export interface Datum {
  id: string;
  type: string;
  attributes: Attributes;
}

interface Attributes {
  characterName: string;
  userName: string;
  body: Body;
}

interface Body {
  description: string;
  imageUrl?: string | undefined;
}
