import React from 'react';
import { findDOMNode } from 'react-dom';
import {
  findRenderedComponentWithType,
  renderIntoDocument,
} from 'react-addons-test-utils';
import { Provider } from 'react-redux';

import createStore from 'amo/store';
import { getFakeI18nInst } from 'tests/client/helpers';
import Home from 'amo/containers/Home';


describe('Home', () => {
  it('renders a heading', () => {
    const initialState = { api: { clientApp: 'android', lang: 'en-GB' } };

    const root = findRenderedComponentWithType(renderIntoDocument(
      <Provider store={createStore(initialState)}>
        <Home i18n={getFakeI18nInst()} />
      </Provider>
    ), Home).getWrappedInstance();
    const rootNode = findDOMNode(root);
    const content = [
      'What do you want Firefox to do?',
      'How do you want Firefox to look?',
    ];
    Array.from(rootNode.querySelectorAll('.HomePage-subheading'))
      .map((el, index) => assert.equal(el.textContent, content[index]));
  });
});
