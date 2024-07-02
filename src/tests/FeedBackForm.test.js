import {render,screen,fireEvent} from '@testing-library/react'
import FeedBackForm from '../components/FeedBackForm'

describe('Tests related to Feedback Form',()=>{
    test('On load condition of form',()=>{
        render(<FeedBackForm/>)
        const textBox = screen.getByRole('textbox')
        expect(textBox).toBeInTheDocument()
    
        const checkBox = screen.getByLabelText("I accept the terms and conditions",{exact:false})
        expect(checkBox).toBeInTheDocument()
    
        const btn = screen.getByRole('button',{name:'',exact:false})
        expect(btn).toBeInTheDocument()
        expect(btn).toBeDisabled()
    })
    
    test('Button enabled only if input and checkbox has values',()=>{
        render(<FeedBackForm/>)
        const textBox = screen.getAllByPlaceholderText('Enter your feedback here')
        const checkBox = screen.getByLabelText("I accept the terms and conditions",{exact:false})
        const btn = screen.getByRole('button',{name:'Add Feedback',exact:false})

        fireEvent.change(textBox,{target:{value:'Food was too spicy'}})
        fireEvent.click(checkBox)

        expect(btn).toBeEnabled()

        fireEvent.click(checkBox)
        expect(btn).toBeDisabled()
    
    })
})