import React from 'react/addons';
import AddContract from '../../../src/components/contract/AddContract';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('AddContract', () => {

  it('Add a new contract on contracts', () => {
    const contractsBefore = [];
    const component = renderIntoDocument(
      <AddContract contracts={contractsBefore}/>
      );

    const textInputs = scryRenderedDOMComponentsWithTag(component, 'input');
    const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

    expect(textInputs.length).to.equal(2);
    expect(buttons.length).to.equal(1);

  });

});