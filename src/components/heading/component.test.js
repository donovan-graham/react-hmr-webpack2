import React from 'react';
import Heading from './component';
import renderer from 'react-test-renderer';

describe('Heading component', () => {
  it('renders "Snappy"', () => {
    const tree = renderer.create(<Heading>Snappy</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders "Snapper"', () => {
    const tree = renderer.create(<Heading>Snapper</Heading>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
