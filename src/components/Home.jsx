// import React, { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';


const Home = ({sendDataToParent}) => {
    // const [enquirFormShow, setEnquirFormShow] = useState(false);
    // useEffect(() => {
    //     sendDataToParent(enquirFormShow)
    // }, [enquirFormShow])

    return (
        <div className="d-flex flex-column justify-content-center align-items-center homeBody">
            <h2 className="homeTitle ">Explore, Inquire, and Discover Your Perfect Product</h2>
            <p className="homeMessage">Find exactly what you need by browsing our wide range of products. Have a question? Need more details? We're here to help! Simply send us your enquiry, and our team will provide all the information you need to make the best choice.</p>
            {/* <Button variant="secondary" size="lg" className="m-4 w-50 homeButton">
                Click here to discover your product
            </Button> */}
            {/* <Button variant="secondary" size="lg" className="m-4 w-50 homeButton" onClick={() => {setEnquirFormShow(true)}}>
                Click here to discover your product
            </Button> */}
        </div>

    )
}

export default Home