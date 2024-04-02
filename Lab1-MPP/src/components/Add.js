import Coffees from "./Coffee";
import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {v4 as uuid} from "uuid";
import {useNavigate} from 'react-router-dom'

function Add(){
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [insensity,setIntensity]=useState('');

    let history = useNavigate();

    const handleSubmit =(e)=>{
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0, 8);

        let a = name,
        b = quantity,
        c =insensity;

        Coffees.push({id: uniqueId, name: a, quantity: b, insensity: c});

        history("/");
    }
    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Control type="text" placeholder="Enter Quantity" required onChange={(e) => setQuantity(e.target.value)}>

                    </Form.Control>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formIntensity">
                    <Form.Control type="text" placeholder="Enter Intensity" required onChange={(e) => setIntensity(e.target.value)}>

                    </Form.Control>
                </Form.Group>    
                <Button variant="secondary" onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>         
            </Form>
        </div>
    )

}
export default Add;