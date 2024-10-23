import React, {useState, useEffect} from 'react'
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {
    const [key, setKey] = useState("link-1")
    // useEffect(() => {
    //     setKey(eventKey)
    // }, [key])
    // const handleSelect = (eventKey) => setKey(eventKey);

  return (
    <Nav variant="tabs" activeKey={key} onSelect={(eventKey) => setKey(eventKey)}>
      <Nav.Item>
        <Nav.Link eventKey="link-1" href="/#/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2" href="/#/product-enquiry">Product Enquiry</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}

export default Navigation