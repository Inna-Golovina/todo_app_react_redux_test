import React from 'react';
import { createRender } from 'react-test-render';
import App from './App'
import Header from '../containers/Header';
import MainSection from '../containers/MainSection';

const setup = _propOverrides => {
  const render = createRender();
  render.render(<App />);
  const output = render.getRenderOutput();
  return output;
}

describe('components', () => {
  describe('Header', () => {
    it('should render', () => {
      const output = setup();
      const [header] = output.props.children;
      expect(header.type).toBe(Header);
    })
  })

  describe('Mainsection', () => {
    it('should render', () => {
      const output = setup();
      const [, mainSection] = output.props.children;
      expect(mainSection.type).toBe(MainSection);
    })
  })
})