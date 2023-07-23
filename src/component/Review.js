import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

const Review = ({item, index}) => {
  return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{index+1}. 작성자 : {item.author}</Accordion.Header>
             <Accordion.Body>
            {item.content}
        </Accordion.Body>
      </Accordion.Item>
  )
}

export default Review;