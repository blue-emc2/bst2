describe('/preview', () => {
  const baseUrl = Cypress.env('baseUrl');

  const username = 'Yoshi';
  const charactername = "Yoshi'p Sampo";
  const text0 = '親譲りの無鉄砲で小供の時から損ばかりして居る。';
  const text1 =
    '親類のものから西洋製のナイフを貰つて奇麗な刃を日に翳して、友達に見せて居たら、';

  beforeEach(() => {
    cy.visit(`${baseUrl}/new`);
    cy.get('input[name=characterName]').type(charactername);
    cy.get('input[name=userName]').type(username);
    cy.get('[data-cy=section1]').type(text0);
    cy.get('.fluid > .right > .ui').click();
    cy.get('[data-cy=section2]').type(text1);
  });

  describe('入力画面でストーリーを入力したとき', () => {
    beforeEach(() => {
      cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it('作者が表示されている', () => {
      cy.get('[data-test=username]').should('have.text', username);
    });

    it('ストーリーが表示されている', () => {
      cy.contains(text0);
      cy.contains(text1);
    });
  });

  describe('レイアウト選択を文章と画像を選択する', () => {
    beforeEach(() => {
      cy.get('[data-cy=left]:first').click();
      cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it('ストーリーが表示されている', () => {
      cy.get('[data-cy=previewLeftText]').should('have.text', text0);
    });
  });

  describe('レイアウト選択を画像と文章を選択する', () => {
    beforeEach(() => {
      cy.get('[data-cy=right]:first').click();
      cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it('ストーリーが表示されている', () => {
      cy.get('[data-cy=previewRightText]').should('have.text', text0);
    });
  });

  describe('プレビューから入力に戻った時に情報が復元されている', () => {
    beforeEach(() => {
      cy.contains('プレビュー').click();
      cy.get('.ui.left').click();
    });

    it('入力画面に戻っている', () => {
      cy.url().should('include', '/new');
    });

    it('各種情報が復元されている', () => {
      // キャラ名
      cy.get('[data-cy=inputCharacterName] > input').should(
        'have.value',
        charactername,
      );

      // ユーザー名
      cy.get('[data-cy=inputUserName] > input').should('have.value', username);

      // セクション数
      cy.get('[data-cy=inputSection1]').should('be.visible');
      cy.get('[data-cy=inputSection2]').should('be.visible');

      // 文章が復帰されている
      cy.get('[data-cy=section1]').should('have.value', text0);
      cy.get('[data-cy=section2]').should('have.value', text1);
    });

    it('編集ができる', () => {
      cy.get('input[name=characterName]').type('hoge');
      cy.get('[data-cy=inputCharacterName] > input').should(
        'have.value',
        `${charactername}hoge`,
      );

      // ユーザー名
      cy.get('input[name=userName]').type('キャバレー');
      cy.get('[data-cy=inputUserName] > input').should(
        'have.value',
        `${username}キャバレー`,
      );

      // 本文
      cy.get('[data-cy=section1]').type('アマノビル');
      cy.get('[data-cy=section1]').should('have.value', `${text0}アマノビル`);

      cy.get('[data-cy=section2]').type('謎の刺客');
      cy.get('[data-cy=section2]').should('have.value', `${text1}謎の刺客`);
    });
  });

  // ファイルアップロードのテストコードを書いているができない
  describe.skip('文章入力と画像を添付したとき', () => {
    beforeEach(() => {
      cy.get('input[name=characterName]').type(charactername);
      cy.get('input[name=userName]').type(username);

      cy.get('.column > .ui > :nth-child(3)').click();
      cy.get('[data-cy=section1] > input').type(text0);

      cy.fixture('sample.png').as('logo');
      cy.get('[data-cy=file-section1] > input').then($input => {
        // convert the logo base64 string to a blob
        return Cypress.Blob.base64StringToBlob('logo', 'image/png').then(
          blob => {
            // pass the blob to the fileupload jQuery plugin
            // used in your application's code
            // which initiates a programmatic upload
            // $input.fileupload('add', { files: blob });
          },
        );
      });

      // cy.get('.form > .right > .ui').click();
      // cy.get('[data-cy=section2] > input').type(text1);
      // cy.contains('プレビュー').click();
    });

    it('キャラクター名が表示されている', () => {
      cy.get('[data-test=charactername]').should('have.text', charactername);
    });

    it.skip('作者が表示されている', () => {
      cy.get('[data-test=username]').should('have.text', username);
    });

    it.skip('ストーリーが表示されている', () => {
      cy.get('[data-cy=preview0]').should('have.text', text0);
      cy.get('[data-cy=preview1]').should('have.text', text1);
    });
  });
});
