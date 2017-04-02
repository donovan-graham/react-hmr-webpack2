import React from 'react';
import Home from './component';
import renderer from 'react-test-renderer';

const noOp = () => null;

describe('Home component', () => {
  it('couner at 1', () => {
    const tree = renderer.create(<Home counter={1} onUp={noOp} onDown={noOp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('couner at 5', () => {
    const tree = renderer.create(<Home counter={5} onUp={noOp} onDown={noOp} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
