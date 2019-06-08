// 似てるけど微妙に異なるJSONのinterfaceはどう共通化するのがいいのかな
export interface StroyIndexAPI {
  data: Datum[];
}

interface Datum {
  id: string;
  type: string;
  attributes: Attributes;
}

interface Attributes {
  characterName: string;
  userName: string;
  body: string;
}
