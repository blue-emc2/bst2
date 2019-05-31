import React, { FC } from 'react';
import { Container, Header } from 'semantic-ui-react';
import { LayoutProps, SectionProps, LayoutType } from '../../App';
import SectionList from '../../containers/SectionList';

const Preview: FC<LayoutProps> = ({ charactername, username, sections }) => {
  const d: SectionProps[] = [
    {
      id: 1,
      type: LayoutType.Text,
      text: [
        '親譲りの無鉄砲で小供の時から損ばかりして居る。',
        '小学校に居る時分学校の二階から飛び降りて一週間程腰を抜かした事がある。なぜそんな無闇をしたと聞く人があるかも知れぬ。別段深い理由でもない。',
        '新築の二階から首を出して居たら、同級生の一人が冗談に、いくら威張つても、そこから飛び降りる事は出来まい。弱虫やーい。と囃したからである。',
        '小使に負ぷさつて帰つて来た時、おやぢが大きな眼をして二階位から飛び降りて腰を抜かす奴があるかと云つたから、此次は抜かさずに飛んで見せますと答へた。',
      ].join(''),
    },
    {
      id: 2,
      type: LayoutType.RightText,
      text: [
        '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、',
        '一人が光る事は光るが切れさうもないと云つた。切れぬ事があるか、何でも切つて見せると受け合つた。',
        'そんなら君の指を切つて見ろと注文したから、何だ指位此通だと右の手の親指の甲をはすに切り込んだ。',
        '幸ナイフが小さいのと、親指の骨が堅かつたので、今だに親指は手に付いて居る。然し創痕は死ぬ迄消えぬ。',
      ].join(''),
    },
    {
      id: 3,
      type: LayoutType.LeftText,
      text: [
        '庭を東へ二十歩に行き盡すと、南上がりに聊か許りの菜園があつて、真中に栗の木が一本立つて居る。是は命より大事な栗だ。',
        '実の熟する時分は起き抜けに背戸を出て落ちた奴を拾つてきて、学校で食ふ。菜園の西側が山城屋と云ふ質屋の庭続きで、此質屋に勘太郎といふ十三四の忰が居た。',
        '勘太郎は無論弱虫である。弱虫の癖に四っ目垣を乗りこえて、栗を盗みにくる。ある日の夕方折戸の[一文字分空欄]に隠れて、とう＼／勘太郎を捕まへてやつた。',
        '其時勘太郎は逃げ路を失つて、一生懸命に飛びかヽつて来た。向ふは二っ許り年上である。弱虫だが力は強い。',
        '鉢の開いた頭を、こつちの胸へ宛てヽぐい＼／押した拍子に、勘太郎の頭がすべつて、おれの袷の袖の中に這入つた。',
        '邪魔になつて手が使へぬから、無暗に手を振つたら、袖の中にある勘太郎の頭が、左右へぐら＼／ 靡いた。仕舞に苦しがつて袖の中から、おれの二の腕へ食ひ付いた。',
        '痛かつたから勘太郎を垣根へ押しつけて置いて、足搦（あしがら）をかけて向へ斃してやつた。山城屋の地面は菜園より六尺がた低い。',
        '勘太郎は四っ目垣を半分崩して、自分の領分へ真逆様に落ちて、ぐうと云つた。勘太郎が落ちるときに、俺の袷の片袖がもげて、急に手が自由になつた。',
        '其晩母が山城屋に詫びに行つた序でに袷の片袖も取り返して来た。',
      ].join(''),
    },
  ];

  return (
    <>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1" data-test="charactername">
          {charactername}
        </Header>
      </Container>

      <Container text>
        <Header as="h1" data-test="username">
          {username}
        </Header>
      </Container>

      <SectionList sections={sections} />
    </>
  );
};

export default Preview;
