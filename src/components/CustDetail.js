import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';

// const CustDetail = ({customer}) => {
  class CustDetail extends Component {

componentWillUnmount() {
    this.props.onSelectCallback('detailCustomer', '');
  }

render() {
  return (
    <div >
    <h3>{this.props.customer.name}</h3>
      <p>Address:
        <br />{this.props.customer.address}
        <br />{this.props.customer.city}, {this.props.customer.state} {this.props.customer.postal_code}</p>

      <p>Phone: 
        <br />{this.props.customer.phone}</p>

      <p>Registered At:
        <br />{this.props.customer.registered_at}
      </p> 
      <p><Button variant="primary"
          onClick={() => this.props.onSelectCallback('detailCustomer', '')}
        >
        Back
        </Button>
        </p>
    </div>
  )
  }
}

export default CustDetail;
