import React, { FC, useState, SyntheticEvent } from 'react';
import { Input, Form, Image, HtmlImageProps } from 'semantic-ui-react';
import { BoxProps } from './Box';

const InputImage: FC<BoxProps> = ({ name }) => {
  const [image, setImage] = useState('');
  const handleChangeImage = (
    e: SyntheticEvent<HTMLFormElement, HtmlImageProps>,
  ) => {
    const { files } = e.currentTarget;
    const imageUrl = URL.createObjectURL(files[0]);
    setImage(imageUrl);
  };

  return (
    <>
      <Form.Field
        control={Input}
        type="file"
        name={name}
        data-cy={`file-${name}`}
        onChange={handleChangeImage}
      />
      {image === '' ? null : <Image src={image} />}
    </>
  );
};

export default InputImage;
