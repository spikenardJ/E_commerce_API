// Controlled Components
import { Component } from "react";
import axios from "axios";
import { func, number } from "prop-types";
import { Form, Button, Alert, Container } from "react-bootstrap";

class CustomerForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            email: "",
            phone: "",
            errors: {},
            selectedCustomerId: null,
            isLoading: false
        };
    }

    componentDidMount() {
        const { id } = this.props.params;
        console.log(id);
        if (id) {
            this.fetchCustomerData(id);
        }
    }

    fetchCustomerData = (id) => {
        axios.get(`http://127.0.0.1:5000/customers/${id}`)
            .then(response => {
                const customerData = response.data;
                this.setState({
                    name: customerData.name,
                    email: customerData.email,
                    phone: customerData.phone,
                    selectedCustomerId: id
                });
            })
            .catch(error => {
                console.error("Error fetching customer data:", error);
            });
    };

    componentDidUpdate(prevProps) {
        if (prevProps.customerId !== this.props.customerId) {
            this.setState({ selectedCustomerId: this.props.customerId });

            if (this.props.customerId) {
                axios.get(`http://127.0.0.1:5000/customers/${this.props.customerId}`)
                    .then(response => {
                        const customerData = response.data;
                        this.setState({
                            name: customerData.name,
                            email: customerData.email,
                            phone: customerData.phone
                        });
                    })
                    .catch(error => {
                        console.error("Error fetching customer data:", error);
                    });
            } else {
                this.setState({
                    name: "",
                    email: "",
                    phone: ""
                });
            }
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value  });
    };

    validateForm = () => {
        const { name, email, phone } = this.state;
        const errors = {};

        if (!name) errors.name = "Name is required";
        if (!email) errors.email = "Email is required";
        if (!phone) errors.phone = "Phone is required";
        return errors;
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const errors = this.validateForm();
        if (Object.keys(errors).length === 0) {
            this.setState({ isLoading: true, error: null })
            const customerData = {
                name: this.state.name.trim(),
                email: this.state.email.trim(),
                phone: this.state.phone.trim()
            };
            
            const apiUrl = this.state.selectedCustomerId
                ? `http://127.0.0.1:5000/customers/${this.state.selectedCustomerId}`
                : "http://127.0.0.1:5000/customers";
            
            const httpMethod = this.state.selectedCustomerId ? axios.put : axios.post;

            httpMethod(apiUrl, customerData)
                .then(() => {
                    
                    this.setState({
                        name: "",
                        email: "",
                        phone: "",
                        errors: {},
                        selectedCustomerId: null,
                        isLoading: false
                    });
                    this.props.navigate("/customers")
                    this.setState({ isLoading: false})
                })
                .catch(error => {
                    this.setState({ error: error.toString(), isLoading: false });
                });
        } else {
            this.setState({ errors });
        }
    };

    render() {
        const { name, email, phone, errors, error, isLoading } = this.state;

        return (
            <Container>
                {isLoading && <Alert variant="info" >Submitting customer data...</Alert>}
                {error && <Alert variant="danger" >Error submitting customer data: {error}</Alert>}

                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formGroupName" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" value={name} onChange={this.handleChange} />
                        {errors.name && <div style={{color: "red"}}>{errors.name}</div>}
                    </Form.Group>
                    <Form.Group controlId="formGroupEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={email} onChange={this.handleChange} />
                        {errors.email && <div style={{color: "red"}}>{errors.email}</div>}
                    </Form.Group>
                    <Form.Group controlId="formGroupPhone" >
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="tel" name="phone" value={phone} onChange={this.handleChange} />
                        {errors.phone && <div style={{color: "red"}}>{errors.phone}</div>}
                    </Form.Group>

                    <Button variant="primary" type="submit" >Submit</Button>
                </Form>
            </Container>
            // <form onSubmit={this.handleSubmit}>
            //     <h3>Add/Edit Customer</h3>
            //     <label>
            //         Name:
            //         <input
            //             type="text"
            //             name="name"
            //             value={name}
            //             onChange={this.handleChange}
            //         />
            //         {errors.name && <div style={{ color: "red" }}>{errors.name}</div>}
            //     </label>
            //     <br />
            //     <label>
            //         Email:
            //         <input
            //             type="email"
            //             name="email"
            //             value={email}
            //             onChange={this.handleChange}
            //         />
            //         {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            //     </label>
            //     <br />
            //     <label>
            //         Phone:
            //         <input
            //             type="tel"
            //             name="phone"
            //             value={phone}
            //             onChange={this.handleChange}
            //         />
            //     </label>
            //     <br />
            //     <button type="submit">Submit</button>
            // </form>
        );
    }
}

CustomerForm.propTypes = {
    customerId: number,
    onUpdateCustomerList: func
};

export default CustomerForm;