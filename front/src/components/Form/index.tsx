import React, { FC } from 'react';
import { Form, Button, Checkbox, Container } from 'semantic-ui-react';

const StoryForm: FC<{}> = () => {
  return (<Container style={{ marginTop: '7em' }}>
    <Form>
      <Form.Field>
        <label>First Name</label>
        <input placeholder='First Name' />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input placeholder='Last Name' />
      </Form.Field>
      <Form.Field>
        <Checkbox label='I agree to the Terms and Conditions' />
      </Form.Field>
      <Button type='submit'>Submit</Button>
    </Form>
  </Container>);
};

export default StoryForm;
