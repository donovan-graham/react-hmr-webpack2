import React from 'react';
import Button from './component';
import renderer from 'react-test-renderer';

describe('Button component', () => {
  it('default', () => {
    const tree = renderer.create(<Button>default</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default large', () => {
    const tree = renderer.create(<Button large>default large</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('primary', () => {
    const tree = renderer.create(<Button>primary</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('primary large', () => {
    const tree = renderer.create(<Button primary large>primary large</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
