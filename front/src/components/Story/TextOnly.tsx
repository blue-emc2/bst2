import React from 'react';

const TextOnly = (props: { text: string }) => {
  const { text } = props;

  return <p>{text}</p>;
};

export default TextOnly;
