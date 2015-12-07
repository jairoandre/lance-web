import React from 'react/addons';
import Contract from '../../src/components/Contract/Contract';
import {expect} from 'chai';

const {renderIntoDocument, scryRenderedDOMComponentsWithTag} = React.addons.TestUtils;

describe('Contract', () => {

  it('Render h1 and p elements.', () => {
    const component = renderIntoDocument(
      <Contract contract={{id: '2', description: 'Teste'}}/>
      );
    const h1Component = scryRenderedDOMComponentsWithTag(component, 'h1');
    const pComponent = scryRenderedDOMComponentsWithTag(component, 'p');

    expect(h1Component.length).to.equal(1);
    expect(pComponent.length).to.equal(1);
    expect(h1Component[0].textContent).to.equal('2');
    expect(pComponent[0].textContent).to.equal('Teste');

  });

  

});