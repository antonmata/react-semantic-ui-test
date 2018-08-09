import './Example.css';

import React from 'react';
import { Container, Header, Button, Segment } from 'semantic-ui-react';

const Example = () => (
  <div className="example">
    <Container>
      <div className="example__header">
        <Header as="h1">Example</Header>
      </div>
      <div className="example__button-group">
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </div>
      <Segment>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
      </Segment>
    </Container>
  </div>
);

export default Example;
