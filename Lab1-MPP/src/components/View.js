import Coffees from "./Coffee";
import React, {useState,useEffect} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link, useNavigate} from 'react-router-dom'

function View() {
    let history = useNavigate();
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [intensity, setIntensity] = useState('');
    const [id, setId] = useState('');
    
    var index = Coffees.map(function(e){
        return e.id
    }).indexOf(id);
    let a=Coffees[index];



    useEffect(() => {
        setName(localStorage.getItem('Name'));
        setQuantity(localStorage.getItem('Quantity'));
        setIntensity(localStorage.getItem('Intensity'));
        setId(localStorage.getItem('Id'));
    }, []);

    const handleReturn = () => {
        
        history("/");
    }

    return (
        <div>
            <Form className="d-grid gap-2" style={{ margin: "15rem" }}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Name" value={name} readOnly />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formQuantity">
                    <Form.Label>  Quantity:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Quantity" value={quantity} readOnly/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formIntensity">
                    <Form.Label>Intensity:</Form.Label>
                    <Form.Control type="text" placeholder="Enter Intensity" value={intensity} readOnly />
                </Form.Group>

                <Button onClick={handleReturn} variant="secondary">Return to List</Button>
            </Form>
        </div>
    )
}

export default View;