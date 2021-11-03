import { shallow, render, mount } from 'enzyme';
import React from 'react';
import {screen} from '@testing-library/react'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
import ConfirmModal from '../components/confirm-modal'

import App from '../App'

describe('<ConfirmModal/> component', () => {
    it('should render',()=>{
    
        render(<ConfirmModal modalIsOpen={true}/>)
    
        const el = screen.getByTestId('ConfirmModal')
        console.log(el);
    })
   
})


