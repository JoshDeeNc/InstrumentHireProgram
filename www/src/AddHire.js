import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { Button, ButtonGroup, Form, FormGroup, Input, Label, Row, Col } from 'reactstrap';
function AddHire({ toDos, addToDo, deleteToDo, completeToDo }) {
  return (
    <div>
        <h2>Add Hire</h2>
        <h5><Link to="/">Home</Link></h5>
        <Form>
            <FormGroup>
              <Label for="newToDo" hidden>ToDo</Label>
              <Input type="text" name="name" id="newToDoName" placeholder="new name" />
              <Input type="text" name="code" id="newToDoCode" placeholder="new code" />
              <Input type="text" name="instrument" id="newToDoInstrument" placeholder="new instrument" />
              <Input type="text" name="brand" id="newToDoBrand" placeholder="new brand" />
              <Input type="text" name="rate" id="newToDoRate" placeholder="new rate" />
              <Input type="text" name="owner" id="newToDoOwner" placeholder="new owner" />
              <Input type="text" name="date" id="newToDoDueDate" placeholder="new date" />
            </FormGroup>
            <Button onClick={addToDo} color="primary" className="ml-1">Add</Button>
          </Form>
    </div>
  );
}

export default AddHire;