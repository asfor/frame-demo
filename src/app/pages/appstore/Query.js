import {Component} from 'react'
import {
    Layout,
    Form,
    Row,
    Col,
    Button,
    Input
} from 'antd'

class Query extends Component {
    render() {
        return (
            <Form
                className="search-form"
                onSubmit={this.onSubmit}
            >
                <Row gutter={40}>
                    {this.renderOption()}
                </Row>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type="primary" htmlType="submit">Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.onReset}>Clear</Button>
                    </Col>
                </Row>
            </Form>
        )
    }

    renderOption = (num) => {
        const {getFieldDecorator} = this.props.form
        const inputs = [1, 2, 3]
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }

        return inputs.map((_, i) => (
            <Col span={8} key={i}>
                <Form.Item {...formItemLayout} label={`Field ${i}`}>
                    {getFieldDecorator(`field-${i}`)(<Input placeholder="placeholder" />)}
                </Form.Item>
            </Col>
        ))
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          console.log('Received values of form: ', values);
        })
    }

    onReset = () => this.props.form.resetFields()
}

export default Form.create()(Query)