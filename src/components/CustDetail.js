import React from 'react';

const CustDetail = ({customer}) => {

  return (
    <div >
    <h3>{customer.name}</h3>
      <p>Address:
        <br />{customer.address}
        <br />{customer.city}, {customer.state} {customer.postal_code}</p>

      <p>Phone: 
        <br />{customer.phone}</p>

      <p>Registered At:
        <br />{customer.registered_at}
      </p> 
    </div>
  )

}

export default CustDetail;
