import { LayoutProps } from '../App';

export interface StoryProps {
  [id: string]: {
    layout: LayoutProps;
  };
}

export const sampleData: StoryProps = {
  '1': {
    layout: {
      charactername: 'アムロ・レイ',
      username: 'hoge',
      sections: [
        {
          type: 'Text',
          text:
            '小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。',
        },
        {
          type: 'Text',
          text:
            '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、',
        },
      ],
    },
  },
  '2': {
    layout: {
      charactername: 'カイ・シデン',
      username: 'huga',
      sections: [
        {
          type: 'RightText',
          text:
            '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、',
        },
      ],
    },
  },
  '3': {
    layout: {
      charactername: '小林隼人',
      username: 'foobar',
      sections: [
        {
          type: 'LeftText',
          text:
            '庭を東へ二十歩に行き盡すと、南上がりに聊か許りの菜園があつて、真中に栗の木が一本立つて居る。是は命より大事な栗だ。',
        },
      ],
    },
  },
};
