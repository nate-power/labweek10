import React, { useState } from 'react';
import Data from './Data';

export default function DataForm() {
    const [state, setState] = useState({});

    const submit = (event) => {
        event.preventDefault();                 
        setState({
            email: event.target.email.value,
            name: event.target.name.value,
            address: event.target.address.value,
            address2: event.target.address2.value,
            city: event.target.city.value,
            province: event.target.province.value,
            postalCode: event.target.postalCode.value,
          });
    }

    const provinces = ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland and Labrador", 
    "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", 
    "Quebec", "Saskatchewan", "Yukon"];

    return (
        <div class="container">
            <h1 class="text-center mb-4">Data Entry Form</h1>
            <form onSubmit={submit}>
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <label class="" for="email">Email: </label>
                        <input class="form-control" type="text" name="email" id="email" placeholder="Enter email" required/>
                    </div>
                    <div class="form-group col">
                        <label for="name">Name: </label>
                        <input class="form-control" type="text" name="name" id="name" placeholder="Full Name" required/>
                    </div>
                </div>
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <label for="address">Address: </label>
                        <input class="form-control" type="text" name="address" id="address" placeholder="1234 Main St" required/>
                    </div>
                </div>
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <label for="address2">Address 2: </label>
                        <input class="form-control" type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor"/>
                    </div>
                </div>
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <label for="city">City: </label>
                        <input class="form-control" type="text" name="city" id="city"/>
                    </div>
                    <div class="form-group col">
                        <label for="province">Province: </label>
                        <select class="form-select" name="province" required>
                            <option key="" value="">Select a province...</option>
                            {
                                provinces.map(x => {
                                    return (<option class="form-control" key={x}>{x}</option>)
                                })
                            }
                        </select>
                    </div>
                    <div class="form-group col">
                        <label for="postalCode">Postal Code: </label>
                        <input class="form-control" type="text" name="postalCode" id="postalCode" required/>
                    </div>
                </div>
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <input class="form-check-input" type="checkbox" name="termsandconditions" id="termsandconditions" required />
                        <label class="form-check-label" for="termsandconditions">Agree Terms &amp; Conditions?</label>
                    </div>
                </div> 
                <div class="row justify-content-between mb-3">
                    <div class="form-group col">
                        <input class="btn btn-success" type="submit" value="Submit" />
                    </div>
                </div> 
            </form> 
            <hr class="mb-4" />
            <Data 
                email={state.email}
                name={state.name}
                address={state.address}
                address2={state.address2}
                city={state.city}
                province={state.province}
                postalCode={state.postalCode} /> 
                          
        </div>            
    )
}