import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { motion } from "motion/react"
const { Header, Content, Footer } = Layout;
const items = Array.from({ length: 5 }).map((_, index) => ({
    key: index + 1,
    label: `nav ${index + 1}`,
}));

function Home() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '48px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        marginBottom: 20,
                        borderRadius: borderRadiusLG,
                    }}
                >
                     <motion.div animate={{ x: 100 }} />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                Ant Design ©{new Date().getFullYear()} Created by Ant UED
            </Footer>
        </Layout>
    );
}

export default Home
