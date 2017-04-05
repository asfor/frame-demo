import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import {Layout, Menu, Icon} from 'antd'
import menu from '../apis/menu'
import Routes from './Page.routes'

const {SubMenu, Item} = Menu

const HEADER_LIST = ['nav 1', 'nav 2', 'nav 3']

export default class Page extends React.Component {
    state = {menu: []}

    render() {
        return (
            <Router history={createBrowserHistory()}>
                <Layout>
                    <Layout.Header className="header">
                        <div id="logo" />

                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['0']}
                            style={{lineHeight: 'inherit'}}
                        >
                            {HEADER_LIST.map((item, index) => (<Menu.Item key={index}>{item}</Menu.Item>))}
                        </Menu>
                    </Layout.Header>

                    <Layout id="page">
                        <Layout.Sider
                            width={200}
                            style={{background: '#fff'}}
                        >
                            <Menu
                                mode="inline"
                                style={{ height: '100%' }}
                            >{this.renderMenu()}</Menu>
                        </Layout.Sider>

                        <Layout.Content style={{ background: '#fff', padding: 24, margin: 0, minHeight: 280 }}>
                            <Routes />
                        </Layout.Content>
                    </Layout>
                </Layout>
            </Router>
        )
    }

    componentWillMount() {
        menu.get().then(data => {
            this.setState({
                ...this.state,
                menu: data.menu
            })
        })
    }

    /**
     * 渲染侧边栏菜单
     * @return {vDOM} 渲染出来的侧边栏元素
     */
    renderMenu = () => {
        return this.state.menu.map(item => {
            if (!item.submenu)
                return <Item key={item.id}><Link to={item.location}><Icon type={item.icon} />{item.name}</Link></Item>
            else
                return (
                    <SubMenu
                        title={<span><Icon type={item.icon} />{item.name}</span>}
                        key={item.id}
                    >
                        {item.submenu.map(item => <Item key={item.id}><Link to={item.location}>{item.name}</Link></Item>)}
                    </SubMenu>
                )
        })
    }
}