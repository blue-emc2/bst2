import React, { FC, useState, FormEvent } from 'react';
import App from '../App';

export const useLayoutStore = (): [
  LayoutProps,
  (form: FormEvent<HTMLFormElement>) => void
] => {
  const [layout, setLayout] = useState<LayoutProps>({ charactername: '' });

  const store = (form: FormEvent<HTMLFormElement>) => {
    // クリックイベントからくるinterfaceはFormEvent<HTMLFormElement>だけど、
    // FormDataはHTMLFormElementのみが必要なのでキャストする。これでいいのかわからないが...
    const f = new FormData(form.target as HTMLFormElement);

    setLayout({
      charactername: f.get('charactername') as string,
    });
  };

  return [layout, store];
};

export interface LayoutProps {
  charactername: string;
  // username?: string;
}
export interface LayoutStoreProps {
  layout: LayoutProps;
  store: (form: FormEvent<HTMLFormElement>) => void;
}

const AppContainer: FC = () => {
  const [layout, store] = useLayoutStore();

  return <App layout={layout} store={store} />;
};

export default AppContainer;
