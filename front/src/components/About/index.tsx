import React, { FC } from 'react';
import { Header, Container, Divider, Icon, List } from 'semantic-ui-react';
import { MainContainer } from '../styled';
import HeaderMenu from '../HeaderMenu';

const About: FC<{}> = () => {
  return (
    <>
      <HeaderMenu />
      <MainContainer>
        <Container text>
          <Header as="h3" style={{ fontSize: '2em' }}>
            bst2について
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            bst2は光の戦士たちが光の戦士になる前の
            生い立ちを投稿・共有ができるサイトです
          </p>
          作成者はキャラクリが出来るゲームでは、容姿を決める時にそのキャラクターの生い立ちや職業などを考えて決めます。
          もし共感してくれる人がいて、同じ様に考えている人がいたら読んでいみたいなーと思い、このサイトを作成しました。
          <Divider />
          <Header as="h3" style={{ fontSize: '2em' }}>
            利用規約
          </Header>
          この利用規約（以下，「本規約」といいます。）は，アプリ作成者（以下，「作成者」といいます。）がこのウェブサイト上で提供するサービス（以下，「本サービス」といいます。）の利用条件を定めるものです。登録ユーザーの皆さま（以下，「ユーザー」といいます。）には，本規約に従って，本サービスをご利用いただきます。
          <Header size="medium">第1条（適用）</Header>
          <List ordered>
            <List.Item>
              本規約は，ユーザーと作成者との間の本サービスの利用に関わる一切の関係に適用されるものとします。
            </List.Item>
            <List.Item>
              作成者は本サービスに関し，本規約のほか，ご利用にあたってのルール等，各種の定め（以下，「個別規定」といいます。）をすることがあります。これら個別規定はその名称のいかんに関わらず，本規約の一部を構成するものとします。
            </List.Item>
            <List.Item>
              本規約の規定が前条の個別規定の規定と矛盾する場合には，個別規定において特段の定めなき限り，個別規定の規定が優先されるものとします。
            </List.Item>
          </List>
          <Header size="medium">第2条（利用登録）</Header>
          <List ordered>
            <List.Item>
              本サービスにおいては，登録希望者が本規約に同意の上，作成者の定める方法によって利用登録を申請し，作成者がこの承認を登録希望者に通知することによって，利用登録が完了するものとします。
            </List.Item>
            <List.Item>
              作成者は，利用登録の申請者に以下の事由があると判断した場合，利用登録の申請を承認しないことがあり，その理由については一切の開示義務を負わないものとします。
              <List.List>
                <List.Item>
                  利用登録の申請に際して虚偽の事項を届け出た場合
                </List.Item>
                <List.Item>
                  本規約に違反したことがある者からの申請である場合
                </List.Item>
                <List.Item>
                  その他，作成者が利用登録を相当でないと判断した場合
                </List.Item>
              </List.List>
            </List.Item>
          </List>
          <Header size="medium">
            第3条（ユーザーIDおよびパスワードの管理）
          </Header>
          <List ordered>
            <List.Item>
              ユーザーは，自己の責任において，本サービスのユーザーIDおよびパスワードを適切に管理するものとします。
            </List.Item>
            <List.Item>
              ユーザーは，いかなる場合にも，ユーザーIDおよびパスワードを第三者に譲渡または貸与し，もしくは第三者と共用することはできません。作成者は，ユーザーIDとパスワードの組み合わせが登録情報と一致してログインされた場合には，そのユーザーIDを登録しているユーザー自身による利用とみなします。
            </List.Item>
            <List.Item>
              ユーザーID及びパスワードが第三者によって使用されたことによって生じた損害は，作成者に故意又は重大な過失がある場合を除き，作成者は一切の責任を負わないものとします。
            </List.Item>
          </List>
          <Header size="medium">第4条（利用料金および支払方法）</Header>
          本サイトの利用は無料です。
          <Header size="medium">第5条（禁止事項）</Header>
          ユーザーは，本サービスの利用にあたり，以下の行為をしてはなりません。
          <List ordered>
            <List.Item>法令または公序良俗に違反する行為</List.Item>
            <List.Item>犯罪行為に関連する行為</List.Item>
            <List.Item>
              作成者，本サービスの他のユーザー，または第三者のサーバーまたはネットワークの機能を破壊したり，妨害したりする行為
            </List.Item>
            <List.Item>
              作成者のサービスの運営を妨害するおそれのある行為
            </List.Item>
            <List.Item>
              他のユーザーに関する個人情報等を収集または蓄積する行為
            </List.Item>
            <List.Item>不正アクセスをし，またはこれを試みる行為</List.Item>
            <List.Item>他のユーザーに成りすます行為</List.Item>
            <List.Item>
              作成者のサービスに関連して，反社会的勢力に対して直接または間接に利益を供与する行為
            </List.Item>
            <List.Item>
              作成者，本サービスの他のユーザーまたは第三者の知的財産権，肖像権，プライバシー，名誉その他の権利または利益を侵害する行為
            </List.Item>
            <List.Item>
              以下の表現を含み，または含むと作成者が判断する内容を本サービス上に投稿し，または送信する行為
              <List.List>
                <List.Item>過度に暴力的な表現 </List.Item>
                <List.Item>露骨な性的表現</List.Item>
                <List.Item>
                  人種，国籍，信条，性別，社会的身分，門地等による差別につながる表現
                </List.Item>
                <List.Item>
                  自殺，自傷行為，薬物乱用を誘引または助長する表現
                </List.Item>
                <List.Item>
                  その他反社会的な内容を含み他人に不快感を与える表現
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item>
              以下を目的とし，または目的とすると作成者が判断する行為
              <List.List>
                <List.Item>
                  営業，宣伝，広告，勧誘，その他営利を目的とする行為（作成者の認めたものを除きます。）
                </List.Item>
                <List.Item>性行為やわいせつな行為を目的とする行為</List.Item>
                <List.Item>
                  面識のない異性との出会いや交際を目的とする行為
                </List.Item>
                <List.Item>
                  他のユーザーに対する嫌がらせや誹謗中傷を目的とする行為
                </List.Item>
                <List.Item>
                  作成者，本サービスの他のユーザー，または第三者に不利益，損害または不快感を与えることを目的とする行為
                </List.Item>
                <List.Item>
                  その他本サービスが予定している利用目的と異なる目的で本サービスを利用する行為
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item>宗教活動または宗教団体への勧誘行為</List.Item>
            <List.Item>その他，作成者が不適切と判断する行為</List.Item>
          </List>
          <Header size="medium">第6条（本サービスの提供の停止等）</Header>
          <List ordered>
            <List.Item>
              作成者は，以下のいずれかの事由があると判断した場合，ユーザーに事前に通知することなく本サービスの全部または一部の提供を停止または中断することができるものとします。
              <List.List>
                <List.Item>
                  本サービスにかかるコンピュータシステムの保守点検または更新を行う場合
                </List.Item>
                <List.Item>
                  地震，落雷，火災，停電または天災などの不可抗力により，本サービスの提供が困難となった場合
                </List.Item>
                <List.Item>
                  コンピュータまたは通信回線等が事故により停止した場合
                </List.Item>
                <List.Item>
                  その他，作成者が本サービスの提供が困難と判断した場合
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item>
              作成者は，本サービスの提供の停止または中断により，ユーザーまたは第三者が被ったいかなる不利益または損害についても，一切の責任を負わないものとします。
            </List.Item>
          </List>
          <Header size="medium">第7条（著作権）</Header>
          著作権については、
          <a
            href="http://support.jp.square-enix.com/rule.php?id=5381&tag=authc"
            target="_blank"
            rel="noopener noreferrer"
          >
            ファイナルファンタジーXIV 著作物利用許諾条件
          </a>{' '}
          に従います。 <br />
          詳細はリンク先をご確認ください。
          <Header size="medium">第8条（利用制限および登録抹消）</Header>
          <List ordered>
            <List.Item>
              作成者は，ユーザーが以下のいずれかに該当する場合には，事前の通知なく，投稿データを削除し，ユーザーに対して本サービスの全部もしくは一部の利用を制限しまたはユーザーとしての登録を抹消することができるものとします。
              <List.List>
                <List.Item>本規約のいずれかの条項に違反した場合</List.Item>
                <List.Item>
                  登録事項に虚偽の事実があることが判明した場合
                </List.Item>
                <List.Item>
                  決済手段として当該ユーザーが届け出たクレジットカードが利用停止となった場合
                </List.Item>
                <List.Item>料金等の支払債務の不履行があった場合</List.Item>
                <List.Item>
                  作成者からの連絡に対し，一定期間返答がない場合
                </List.Item>
                <List.Item>
                  本サービスについて，最終の利用から一定期間利用がない場合
                </List.Item>
                <List.Item>
                  その他，作成者が本サービスの利用を適当でないと判断した場合
                </List.Item>
              </List.List>
            </List.Item>
            <List.Item>
              前項各号のいずれかに該当した場合，ユーザーは，当然に作成者に対する一切の債務について期限の利益を失い，その時点において負担する一切の債務を直ちに一括して弁済しなければなりません。
            </List.Item>
            <List.Item>
              作成者は，本条に基づき作成者が行った行為によりユーザーに生じた損害について，一切の責任を負いません。
            </List.Item>
          </List>
          <Header size="medium">第9条（退会）</Header>
          ユーザーは，作成者の定める退会手続により，本サービスから退会できるものとします。
          <Header size="medium">第10条（保証の否認および免責事項）</Header>
          <List ordered>
            <List.Item>
              作成者は，本サービスに事実上または法律上の瑕疵（安全性，信頼性，正確性，完全性，有効性，特定の目的への適合性，セキュリティなどに関する欠陥，エラーやバグ，権利侵害などを含みます。）がないことを明示的にも黙示的にも保証しておりません。
            </List.Item>
            <List.Item>
              作成者は，本サービスに起因してユーザーに生じたあらゆる損害について一切の責任を負いません。ただし，本サービスに関する作成者とユーザーとの間の契約（本規約を含みます。）が消費者契約法に定める消費者契約となる場合，この免責規定は適用されません。
            </List.Item>
            <List.Item>
              前項ただし書に定める場合であっても，作成者は，作成者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害のうち特別な事情から生じた損害（作成者またはユーザーが損害発生につき予見し，または予見し得た場合を含みます。）について一切の責任を負いません。また，作成者の過失（重過失を除きます。）による債務不履行または不法行為によりユーザーに生じた損害の賠償は，ユーザーから当該損害が発生した月に受領した利用料の額を上限とします。
            </List.Item>
            <List.Item>
              作成者は，本サービスに関して，ユーザーと他のユーザーまたは第三者との間において生じた取引，連絡または紛争等について一切責任を負いません。
            </List.Item>
          </List>
          <Header size="medium">第11条（サービス内容の変更等）</Header>
          作成者は，ユーザーに通知することなく，本サービスの内容を変更しまたは本サービスの提供を中止することができるものとし，これによってユーザーに生じた損害について一切の責任を負いません。
          <Header size="medium">第12条（利用規約の変更）</Header>
          作成者は，必要と判断した場合には，ユーザーに通知することなくいつでも本規約を変更することができるものとします。なお，本規約の変更後，本サービスの利用を開始した場合には，当該ユーザーは変更後の規約に同意したものとみなします。
          <Header size="medium">第13条（個人情報の取扱い）</Header>
          作成者は，本サービスの利用によって取得する個人情報については，作成者「プライバシーポリシー」に従い適切に取り扱うものとします。
          <Header size="medium">第14条（通知または連絡）</Header>
          ユーザーと作成者との間の通知または連絡は，作成者の定める方法によって行うものとします。作成者は,ユーザーから,作成者が別途定める方式に従った変更届け出がない限り,現在登録されている連絡先が有効なものとみなして当該連絡先へ通知または連絡を行い,これらは,発信時にユーザーへ到達したものとみなします。
          <Header size="medium">第15条（権利義務の譲渡の禁止）</Header>
          ユーザーは，作成者の書面による事前の承諾なく，利用契約上の地位または本規約に基づく権利もしくは義務を第三者に譲渡し，または担保に供することはできません。
          <Header size="medium">第16条（準拠法・裁判管轄）</Header>
          本規約の解釈にあたっては，日本法を準拠法とします。
          本サービスに関して紛争が生じた場合には，作成者の本店所在地を管轄する裁判所を専属的合意管轄とします。
          <Divider />
          <Header as="h3" style={{ fontSize: '2em' }}>
            お問い合わせ
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            ご要望・ご意見・不具合に関しましては、
            <a
              href="https://twitter.com/cold_blackwell"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="twitter" /> Cold Blacwell
            </a>
            までご連絡をお願いします。
          </p>
        </Container>
      </MainContainer>
    </>
  );
};

export default About;
