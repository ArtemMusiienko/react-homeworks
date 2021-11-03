import { shallow, render, mount } from 'enzyme';
import React from 'react';
import {screen} from '@testing-library/react'
import Checkout from '../components/validation-form'
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });



describe('<Checkout/> component', () => {
    it('should render',()=>{
    
        render(<Checkout validationOpen={true}/>)
    
        const el = screen.getByTestId('Checkout')
        console.log(el);
    })
   
})



