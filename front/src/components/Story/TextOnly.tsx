import React from 'react';

const TextOnly = (props: { text: string }) => {
  const { text } = props;

  return <p style={{ color: '#FFFFFF' }}>{text}</p>;
};

export default TextOnly;
