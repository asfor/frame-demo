import * as React from 'react'
import {
    Layout,
    Form,
    Row,
    Col,
    Button,
    Input,
    Select,
    DatePicker
} from 'antd'

const FormItem = Form.Item
const {Option} = Select

class Query extends React.Component<any, any> {
    render() {
        const state = {
            type: 'select',
            options: [
                {value: '0', name: '异常'},
                {value: '1', name: '正常'}
            ]
        }

        const inputs = [
            {type: 'input', placeholder: 'placeholder'},
            {type: 'input', placeholder: 'placeholder'},
            {type: 'input', placeholder: 'placeholder'}
        ]

        const timeSlot = {
            type: 'select',
            options: [
                {value: '0', name: '今天'},
                {value: '1', name: '昨天'},
                {value: '2', name: '最近一周'},
                {value: '3', name: '最近30天'},
                {value: '4', name: '这个月'},
                {value: '5', name: '上个月'}
            ]
        }

        const pages = {
            type: 'multiple',
            options: [
                {value: '0', name: '实时报警'},
                {value: '1', name: '长期跟踪'},
                {value: '2', name: '测试跟踪'},
                {value: '3', name: '业务跟踪'}
            ]
        }

        const alarmLevel = {
            type: 'multiple',
            options: [
                {value: '0', name: 'No classified'},
                {value: '1', name: 'Information'},
                {value: '2', name: 'Warning'},
                {value: '3', name: 'Average'},
                {value: '4', name: 'High'},
                {value: '5', name: 'Disaster'}
            ]
        }

        return (
            <Form
                className='search-form'
                onSubmit={this.onSubmit}
            >
                <Row gutter={40}>
                    {this.renderFormParams(state, 6, 'state')}
                    {this.renderFormParams({type: 'datepicker'}, 6, 'datepicker')}
                    {this.renderFormParams(timeSlot, 4, 'time')}
                    {this.renderFormParams(pages, 4, 'pages')}
                    {this.renderFormParams(alarmLevel, 4, 'alarm')}
                    {inputs.map((input, i) => this.renderFormParams(input, 8, `input-${i}`))}
                </Row>

                <Row>
                    <Col span={24} style={{ textAlign: 'right' }}>
                        <Button type='primary' htmlType='submit'>Search</Button>
                        <Button style={{ marginLeft: 8 }} onClick={this.onReset}>Clear</Button>
                    </Col>
                </Row>
            </Form>
        )
    }

    renderOption = (obj) => {
        switch (obj.type) {
            case 'datepicker':
                return <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />

            case 'select':
                return <Select>{obj.options.map((option, i) => <Option key={`select-${i}`} value={option.value}>{option.name}</Option>)}</Select>

            case 'multiple':
                return <Select mode='multiple'>{obj.options.map((option, i) => <Option key={`multiple-${i}`} value={option.value}>{option.name}</Option>)}</Select>

            case 'input':
            default:
                return <Input placeholder={obj.placeholder} />
        }
    }

    renderFormParams = (option, col, label) => {
        const {getFieldDecorator} = this.props.form
        const formItemLayout = {
            labelCol: { span: 5 },
            wrapperCol: { span: 19 }
        }

        return (
            <Col span={col} key={`params-${label}`}>
                <FormItem {...formItemLayout} label={`${label}`}>
                    {getFieldDecorator(`field-${label}`)(this.renderOption(option))}
                </FormItem>
            </Col>
        )
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