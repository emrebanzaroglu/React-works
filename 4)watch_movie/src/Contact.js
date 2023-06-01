import React from 'react'
import { Form, Label, Input, FormGroup } from 'reactstrap'

export default function Contact({contacts}) {
  return (
    <div>
        <h3 className='text-center'>Bize Ulaşın</h3>
    <Form>
        {contacts.map((contact,index)=>(
            <FormGroup>
                <Label for="Email" key={index}>{contact.label}</Label>
                <Input type="email" name="Email" id="Email" placeholder={contact.placeholder}/>
            </FormGroup>
            )
        )}
    </Form>
    </div>
  )
}
