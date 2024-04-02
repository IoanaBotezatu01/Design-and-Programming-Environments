import Coffees from "./Coffee";
import React, {useState,useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useNavigate} from 'react-router-dom'
function Edit()
{
    let history = useNavigate();

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [id, setId] = useState('');

    var index = Coffees.map(function(e){
        return e.id
    }).indexOf(id);

    const handleSubmit =(e)=>{
        e.preventDefault();

        let a = Coffees[index];
        a.name = name;
        a.quantity = quantity;
        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setQuantity(localStorage.getItem('Quantity'))
        setId(localStorage.getItem('Id'))
    }, [])

    return(
        <div>
            <Form className="d-grid gap-2" style={{margin:"15rem"}}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>

                    </Form.Control>
                </Form.Group>    
                <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Control type="text" placeholder="Enter Quantity" value={quantity} required onChange={(e) => setQuantity(e.target.value)}>

                    </Form.Control>
                
                </Form.Group>    
                <Button onClick={(e) => handleSubmit(e)} type="submit" variant="secondary">Update</Button>         
            </Form>
        </div>
    )

    




}
export default Edit;