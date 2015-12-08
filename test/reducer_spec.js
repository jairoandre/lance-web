import { List, Map, fromJS } from 'immutable';
import { expect } from 'chai';

import reducer from '../src/reducer';

describe('reducer', () => {

    it('handles SET_STATE', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: Map(
                {
                    contracts: List.of(
                    Map({id: 1, description: 'Contrato 1'}),
                    Map({id: 2, description: 'Contrato 2'})
                    )
                }
            )

        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            contracts: [
                {
                    id: 1,
                    description: 'Contrato 1'
                },
                {
                    id: 2,
                    description: 'Contrato 2'
                }]
        }));
    });

    it('handles SET_STATE with plain JS payload', () => {
        const initialState = Map();
        const action = {
            type: 'SET_STATE',
            state: {
                contracts: [
                    {
                        id: 1,
                        description: 'Contrato 1'
                    },
                    {
                        id: 2,
                        description: 'Contrato 2'
                    }]
            }
        };
        const nextState = reducer(initialState, action);

        expect(nextState).to.equal(fromJS({
            contracts: [
                {
                    id: 1,
                    description: 'Contrato 1'
                },
                {
                    id: 2,
                    description: 'Contrato 2'
                }]
        }));
    });

    it('handles SET_STATE without initial state', () => {
        const action = {
            type: 'SET_STATE',
            state: {
                contracts: [
                    {
                        id: 1,
                        description: 'Contrato 1'
                    },
                    {
                        id: 2,
                        description: 'Contrato 2'
                    }]
            }
        };
        const nextState = reducer(undefined, action);

        expect(nextState).to.equal(fromJS({
            contracts: [
                {
                    id: 1,
                    description: 'Contrato 1'
                },
                {
                    id: 2,
                    description: 'Contrato 2'
                }]
        }));
    });

});