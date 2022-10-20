import React from 'react'

const Get = (props) => {
  return (
    <div>
        <div data-testid="user">
            <p data-testid="user1-name">
                {props.dummy[0].first_name + " " + props.dummy[0].last_name}
            </p>
        </div>
        <div data-testid="user">
            <p data-testid="user2-name">
                {props.dummy[1].first_name + " " + props.dummy[1].last_name}
            </p>
        </div>
            
    </div>
  )
}

export default Get