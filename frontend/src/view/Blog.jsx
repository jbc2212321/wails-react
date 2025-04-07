import React from 'react';
import {Card, Col, Row, Avatar} from 'antd';

const {Meta} = Card;
import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {BrowserRouter, Navigate, useNavigate, NavLink, Route, Routes} from "react-router-dom"
import {Greet} from '../../wailsjs/go/main/App'
import {FloatButton} from 'antd';


export function AddBlogButton() {
    const navigate = useNavigate()

    const pushDocument = () => {
        navigate(`/document`)
    }

    return (
        <FloatButton onClick={() => pushDocument()} tooltip={<div>新建Blog</div>}
                     style={{
                         width: 70,
                         height: 70,
                         // "margin-bottom": 70,
                         "marginBottom": 70,
                         "marginRight": 70,

                     }}
        />
    );
}

export function BlogCard({ cover, title, description}) {
    // let cover = "https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
    // const title = "Card title"
    // const description = "This is the description"
    return (
        <Col span={6}>
            <Card
                style={{
                    width: 300,
                }}
                cover={
                    <img
                        alt="example"
                        src={cover}
                    />
                }
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Meta
                    // avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                    title={title}
                    description={description}
                />
            </Card>

        </Col>
    );
}


export default function Blog() {


    return (
        <div style={{
            padding: 24,
        }}>

            <Row gutter={[32, 32]} style={{
                "margin-left":32,
            }}>
                <Col span={6}>
                    <Card
                        style={{
                            width: 300,
                        }}
                        cover={
                            <img
                                alt="example"
                                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                            />
                        }
                        actions={[
                            <SettingOutlined key="setting"/>,
                            <EditOutlined key="edit"/>,
                            <EllipsisOutlined key="ellipsis"/>,
                        ]}
                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8"/>}
                            title="Card title"
                            description="This is the description"
                        />
                    </Card>
                </Col>
                <BlogCard title={"Card title"}></BlogCard>
                <BlogCard></BlogCard>
                <BlogCard></BlogCard>

            </Row>
            <AddBlogButton></AddBlogButton>
        </div>
    )
}

