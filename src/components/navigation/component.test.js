import React from 'react';
import Nav from './component';
import renderer from 'react-test-renderer';

const noOp = () => null;

describe('Navigation component', () => {
  it('main naviation', () => {
    const tree = renderer.create(<Nav />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('navigation link', () => {
    const tree = renderer.create(<Nav.Link href="/">Home</Nav.Link>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
