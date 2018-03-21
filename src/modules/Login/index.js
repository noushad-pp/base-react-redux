import React, { Component } from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as CONSTANTS from '../../data/config/constants';
import * as pageActions from '../../data/redux/page_details/actions';
import * as userActions from '../../data/redux/user_details/actions';

function mapStateToProps(state) {
    return {
        page_details: state.page_details
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(Object.assign({}, pageActions, userActions), dispatch)
    };
}

function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

const FormItem = Form.Item;
const { TextArea } = Input;

class Login extends Component {
    constructor() {
        super();
        this.validatePincode = this.validatePincode.bind(this);

        this.state = {
            pincodeValidationError: false,
            pincodeErrorMsg: "",
        };
    }

    componentWillMount() {
        this.props.actions.pageChanged(CONSTANTS.appPages.home);
    }

    componentDidMount() {
        const { form } = this.props;
        form.validateFields(); // To disabled submit button at the beginning.
    }

    validatePincode = (value) => {
        if (isNaN(value)) {
            this.setState({
                pincodeValidationError: true,
                pincodeErrorMsg: "Input should be a number"
            });
        } else if (value.toString().length !== 6) {
            this.setState({
                pincodeValidationError: true,
                pincodeErrorMsg: "pincode must have 6 digit"
            });
        } else {
            this.setState({
                pincodeValidationError: false,
                pincodeErrorMsg: ""
            });
        }
    }

    handleInputChange = (event) => {
        if (event.target.name === "pincode") {
            this.validatePincode(event.target.value);
        }
        this.props.form.setFieldsValue({
            [event.target.name]: event.target.value
        });
        let shipping_address = {
            [event.target.name]: event.target.value
        };

        this.setState({
            shipping_address
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err) => {
            if (!err) {
                console.log(this.state.shipping_address);
            } else {
                message.error('Please enter/validate all the feilds!');
            }
        });
    }

    render() {
        const { pincodeValidationError, pincodeErrorMsg } = this.state;
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
        const emailError = isFieldTouched('email') && getFieldError('email');
        const phoneError = isFieldTouched('phone') && getFieldError('phone');
        const addressError = isFieldTouched('address') && getFieldError('address');
        const pincodeError = isFieldTouched('pincode') && getFieldError('pincode');
        const cityError = isFieldTouched('city') && getFieldError('city');
        const stateError = isFieldTouched('state') && getFieldError('state');
        const countryError = isFieldTouched('country') && getFieldError('country');

        return (
            <Row className="lr-pad-15 b-mrgn-10 flex-column flex-ac CartSection Login">
                <Col xs={24} className="pad-15 sectionHeader">Shipping Address</Col>
                <Col xs={24} className="pad-15 sectionContent">
                    <div className="full-width">
                        <Form layout="vertical" onSubmit={this.handleSubmit}>
                            <FormItem validateStatus={emailError ? "error" : ""} help={emailError || ''}>
                                {
                                    getFieldDecorator('email', {
                                        rules: [{
                                            type: 'email', message: 'The input is not valid E-mail!',
                                        }, {
                                            required: true, message: 'Please input your E-mail!',
                                        }],
                                    })(
                                        <Input placeholder="Email" className="font-12 height-30 font-white" name="email" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={phoneError ? "error" : ""} help={phoneError || ''}>
                                {
                                    getFieldDecorator('phone', {
                                        rules: [
                                            { required: true, message: 'Please enter your phone number! ' },
                                            { len: 10, message: 'Phone number should be 10 digits!' },
                                        ]
                                    })(
                                        <Input addonBefore={"+91"} placeholder="Phone Number" className="font-12 height-30 font-white " type="number" name="phone" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={addressError ? "error" : ""} help={addressError || ''}>
                                {
                                    getFieldDecorator('address', {
                                        rules: [{ required: true, message: 'Please enter shipping address' }],
                                    })(
                                        <TextArea placeholder="Enter shipping address" className="font-12 font-white " rows={3} name="address" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={pincodeError ? "error" : (pincodeValidationError ? "error" : "")} help={pincodeError ? pincodeError : (pincodeValidationError ? pincodeErrorMsg : '')}>
                                {
                                    getFieldDecorator('pincode', {
                                        rules: [
                                            { required: true, message: 'Please enter pincode!' }
                                        ],
                                    })(
                                        <Input placeholder="Pincode" className="font-12 height-30 font-white " name="pincode" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={cityError ? "error" : ""} help={cityError || ''}>
                                {
                                    getFieldDecorator('city', {
                                        rules: [{ required: true, message: 'Please enter city' }],
                                    })(
                                        <Input placeholder="City" className="font-12 height-30 font-white " name="city" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={stateError ? "error" : ""} help={stateError || ''}>
                                {
                                    getFieldDecorator('state', {
                                        rules: [{ required: true, message: 'Please enter state' }],
                                    })(
                                        <Input placeholder="State" className="font-12 height-30 font-white " name="state" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem validateStatus={countryError ? "error" : ""} help={countryError || ''}>
                                {
                                    getFieldDecorator('country', {
                                        rules: [{ required: true, message: 'Please enter country' }],
                                    })(
                                        <Input placeholder="Country" className="font-12 height-30 font-white " name="country" onChange={this.handleInputChange} />
                                    )
                                }
                            </FormItem>
                            <FormItem className="is-no-b-mrgn">
                                <div className="flex-row flex-jc t-pad-5">
                                    <Button size="large" className="btn-fill-violet" htmlType="submit" disabled={hasErrors(getFieldsError())} >
                                        SAVE & CONTINUE
                                    </Button>
                                </div>
                            </FormItem>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }
}

Login.propTypes = {
    actions: PropTypes.object,
    history: PropTypes.object,
    form: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps, null)(Form.create()(Login));
