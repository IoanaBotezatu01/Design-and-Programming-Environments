import React, { Fragment, useState } from 'react';
import { Button, Table, Pagination, FormSelect } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Coffees from './Coffee';
import { Link, useNavigate } from 'react-router-dom';
import MyChart from './MyChart';

function Home() {
  
    const [activePage, setActivePage] = useState(1);
    const [itemsPerPage,setItemsPerPage]=useState(5);
    

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    let history = useNavigate();

    const handleEdit = (id, name, quantity) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Quantity', quantity);
        localStorage.setItem('Id', id);
    };

    const handleDelete = (id) => {
        var index = Coffees.map(function (e) {
            return e.id;
        }).indexOf(id);

        Coffees.splice(index, 1);

        history('/');
    };

    const handleView = (id, name, quantity, intensity) => {
        localStorage.setItem('Name', name);
        localStorage.setItem('Quantity', quantity);
        localStorage.setItem('Intensity', intensity);
        localStorage.setItem('Id', id);
    };

    const indexOfLastItem = activePage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Coffees.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <Fragment>
            <br/><br/><br/>
            <div style={{ width: '100%', height: '500px' }}>
                <MyChart />
            </div>
            <div style={{ margin: '5rem' }}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentItems && currentItems.length > 0 ? (
                            currentItems.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.name}</td>
                                    <td>{item.quantity}</td>
                                    <td>
                                        <Link to={'/edit'}>
                                            <Button variant="dark" onClick={() => handleEdit(item.id, item.name, item.quantity)}>
                                                Edit
                                            </Button>
                                        </Link>
                                        &nbsp;
                                        <Button variant="dark" onClick={() => handleDelete(item.id)}>
                                            Delete
                                        </Button>
                                        &nbsp;
                                        <Link to={'/view'}>
                                            <Button variant="dark" onClick={() => handleView(item.id, item.name, item.quantity, item.insensity)}>
                                                View
                                            </Button>
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3">No data available</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Pagination>
                    {Array.from({ length: Math.ceil(Coffees.length / itemsPerPage) }, (_, i) => (
                        <Pagination.Item key={i} active={i + 1 === activePage}  onClick={() => handlePageChange(i + 1)} >
                            {i + 1}
                        </Pagination.Item>
                    ))}
                </Pagination>
                <FormSelect value={itemsPerPage} onChange={(e)=>setItemsPerPage(e.target.value)}>
                        <option value="3">3</option>
                        <option value="5">5</option>
                        <option value="7">7</option>
                        <option value="10">10</option>
                </FormSelect>
                <Link className="d-grid gap-2" to="/create">
                    <Button variant="dark" size="lg">
                        Create
                    </Button>
                </Link>
            </div>
        </Fragment>
    );
}

export default Home;
