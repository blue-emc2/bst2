import React from 'react';
import { Pre } from '../styled';

const TextOnly = (props: { text: string }) => {
  const { text } = props;

  return <Pre>{text}</Pre>;
};

export default TextOnly;
