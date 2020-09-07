import React, {useRef} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {v4 as uuidv4} from 'uuid'

const Login = ({ onIdSubmit }) => {
    const idRef = useRef()

    const handleSubmitForm = (event) => {
        event.preventDefault()

        onIdSubmit(idRef.current.value)
    }

    const createNewId = () => {
        onIdSubmit(uuidv4())
    }

    return (
      <div>
          <Container className='align-items-center d-flex' style={{height: '100vh'}}>
              <Form className='w-100' onSubmit={handleSubmitForm}>
                  <Form.Group>
                      <Form.Label>Enter Your Id</Form.Label>
                      <Form.Control type='text' ref={idRef} required />
                  </Form.Group>
                  <Button type='submit' className='mr-2'>Login</Button>
                  <Button onClick={createNewId} variant='secondary'>Create A New Id</Button>
              </Form>
          </Container>
      </div>
    );
};

export default Login;

