import React from 'react'
import Fragment from './Fragment';

function Contact(props) {
    return (
        <>
            My name is {props.name}. My age is {props.age}.
        </>
    )
}

export default Contact

//Fragment shortcut <></>