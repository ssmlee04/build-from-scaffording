const React = require('react');
var ReactDOM = require('react-dom');
const CreateClass = require('create-react-class');
import { Form, Icon, Input, Button } from 'antd';
const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}


const FormCreateUpdateEvent = CreateClass({
  getInitialState: function() {
    return {
    };
  },
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  },
  handleCreate(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      console.log(values)
      this.props.createEvent(values);
    });
  },
  handleUpdate(e) {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
      this.props.updateEvent(values);
    });
  },
  generageImage() {
    var random = ~~(Math.random() * 100000);
    var icon = `http://www.gravatar.com/avatar/5d3b5ee75a67082${random}ba8dc89ed4?s=256&d=identicon&r=PG`;
    
    ReactDOM.findDOMNode(this.refs.icon).value = icon;
    window.a = ReactDOM.findDOMNode(this.refs.icon)
  },
  render: function() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

    // Only show error after a field is touched.
    const typeError = isFieldTouched('type') && getFieldError('type');
    const servierIdError = isFieldTouched('servierId') && getFieldError('servierId');
    const iconError = isFieldTouched('icon') && getFieldError('icon');
    const titleError = isFieldTouched('title') && getFieldError('title');
    const dataError = isFieldTouched('data') && getFieldError('data');
    const timestampError = isFieldTouched('timestamp') && getFieldError('timestamp');

    return (
      <Form onSubmit={this.handleCreate}>
        <FormItem
          validateStatus={typeError ? 'error' : ''}
          help={typeError || ''}
        >
          {getFieldDecorator('type', {
            rules: [{ required: true, message: 'Please input the event type!' }],
          })(
            <Input placeholder="Type" />
          )}
        </FormItem>
        <FormItem
          validateStatus={servierIdError ? 'error' : ''}
          help={servierIdError || ''}
        >
          {getFieldDecorator('serviceId', {
            rules: [{ required: true, message: 'Please input the event serviceId!' }],
          })(
            <Input placeholder="ServiceId" />
          )}
        </FormItem>
        <FormItem
          validateStatus={iconError ? 'error' : ''}
          help={iconError || ''}
        >
          {getFieldDecorator('icon', {
            rules: [{ required: true, message: 'Please input the event icon!' }],
          })(
            <div>
              <Input ref='icon' placeholder="Icon" style={{width: '90%'}} />
              {'  '}<Icon style={{ fontSize: 16, color: '#08c' }} type="bulb" onClick={this.generageImage}/>
            </div>
          )}
        </FormItem>
        <FormItem
          validateStatus={timestampError ? 'error' : ''}
          help={timestampError || ''}
        >
          {getFieldDecorator('timestamp', {
            rules: [{ required: true, message: 'Please input the event timestamp!' }],
          })(
            <Input placeholder="Timestamp" />
          )}
        </FormItem>
        <FormItem
          validateStatus={titleError ? 'error' : ''}
          help={titleError || ''}
        >
          {getFieldDecorator('title', {
            rules: [{ required: true, message: 'Please input the event title!' }],
          })(
            <Input placeholder="Title" />
          )}
        </FormItem>
        <FormItem
          validateStatus={dataError ? 'error' : ''}
          help={dataError || ''}
        >
          {getFieldDecorator('data', {
            rules: [{ required: true, message: 'Please input the event data!' }],
          })(
            <Input placeholder="Data" />
          )}
        </FormItem>
        <Button type="primary"
          htmlType="submit"
          disabled={hasErrors(getFieldsError())}> Create event </Button>
        <Button onClick={this.props.close}>
          Close
        </Button>
      </Form>
    );
  },
});

module.exports = FormCreateUpdateEvent;
