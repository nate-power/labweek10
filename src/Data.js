import React from 'react'

export default function Data(props) {
    return (
        <div class="container">
            <h1 class="mb-4">Data from Form</h1>
            <div class="row justify-content-start">
                <div class="col">
                    <h3 class="text-primary">Email: {props.email}</h3>
                    <h3 class="text-primary">Name: {props.name}</h3>
                    <h3 class="text-primary">Address: {props.address}</h3>
                    <h3 class="text-primary">Address 2: {props.address2}</h3>
                    <h3 class="text-primary">City: {props.city}</h3>
                    <h3 class="text-primary">Province: {props.province}</h3>
                    <h3 class="text-primary">Postal Code: {props.postalCode}</h3>
                </div>               
            </div>            
        </div>
    )
}