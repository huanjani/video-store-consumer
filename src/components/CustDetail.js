import React, {Component} from 'react';
import axios from 'axios';
import './CustDetail.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

class CustDetail extends Component {
  constructor(props) {
    super();

    this.state = {
      rentals: [],
      error: '',
    };
  }

  componentDidMount() {
    axios.get(`${this.props.url}`, {
      params: {
        "customer_id": this.props.customer.id
      }})
      .then((response) => {
        this.setState({ rentals: response.data });
        console.log(this.state.rentals)
        console.log(`total rentals ${this.state.rentals.length}`)
      })
      .catch((error) => {
        console.log(error)
        this.setState({ error: error });
      });
  }

componentWillUnmount() {
    this.props.onSelectCallback('detailCustomer', '');
  }

render() {
  const today = new Date()
  const regDate = new Date(this.props.customer.registered_at).toUTCString().slice(0,16)

  const getRentals = this.state.rentals.map((rental, i) => {
    let dueClass = ''
      if ((new Date(rental.due_date)) < today) {
        dueClass='cust-detail__table-overdue'
      }

    return (
      <tr key={i}>
      <td>{i+1}</td>
      <td>{rental.title}</td>
      <td>{new Date(rental.checkout_date).toUTCString().slice(0,16)}</td>
      <td className={dueClass}>{new Date(rental.due_date).toUTCString().slice(0,16)}</td>
    </tr>
    )
  })


  return (
    <div >
      <section className="cust-detail__info">
        <h3>{this.props.customer.name}</h3>
        <p><span>Address:</span>
          <br />{this.props.customer.address}
          <br />{this.props.customer.city}, {this.props.customer.state} {this.props.customer.postal_code}</p>
        <p><span>Phone: </span>
          <br />{this.props.customer.phone}</p>

        <p><span>Registered:</span>
          <br />{regDate}
        </p> 
      </section>
      <h4>Checked-Out Movies:</h4>
      {(this.state.rentals.length > 0) ? (<section className="cust-detail__table">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie Title</th>
              <th>Checkout Date</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            {getRentals}
          </tbody>
        </Table>
      </section>) : ''}
      <section className="cust-detail__back">
        <p><Button variant="primary"
          onClick={() => this.props.onSelectCallback('detailCustomer', '')}
        >
        Back
        </Button>
        </p>
      </section>
    </div>
  )
  }
}

export default CustDetail;
