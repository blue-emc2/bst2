import { LayoutProps } from '../App';

export interface StoryProps {
  data: LayoutProps;
}

export const sampleData: StoryProps = {
  data: {
    charactername: 'アムロ・レイ',
    username: 'hoge',
    sections: [
      {
        layoutType: 'Text',
        body:
          '小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。',
      },
      {
        layoutType: 'Text',
        body:
          '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、',
      },
    ],
  },
};
