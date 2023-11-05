import React from 'react'
import { Divider, Table, Popconfirm, message, Button, Input, Image } from 'antd';
import { DeleteFilled, EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { QuestionCircleOutlined } from '@ant-design/icons';
import Loading from "../../../Component/Loading";
import { useGetAllSlideQuery } from '../../../Services/Api_Slide';
import { ISlider } from '../../../Models/interfaces';
import { useRemoveSlideMutation } from '../../../Services/Api_Slide';

const SlideList = () => {
    const [messageApi, contextHolder] = message.useMessage();
    const { data, isLoading }: any = useGetAllSlideQuery();
    const [removeSlide]: any = useRemoveSlideMutation();

    const RemoveSlide = ({_id}: any) => {
        // console.log(id);
        removeSlide(_id)
        .unwrap()
        .then(() => {
            messageApi.open({
                type: "success",
                content: "Xóa slide thành công",
            });
        })
    };

    const ApplySlide = (id: any) => {

    };

    const FindListName = (event: any) => {

    };

    const dataSlide = data?.slider?.map(({ _id, titleSlider, contentSlider, imgSlider, status }: any) => ({
        _id,
        titleSlider,
        contentSlider,
        imgSlider,
        status,
    }));

    const columns: any = [
        {
            title: 'Tiêu đề',
            dataIndex: 'titleSlider',
            align: 'center',
        },
        {
            title: 'Hình ảnh',
            dataIndex: "imgSlider",
            key: "imgSlider",
            render: (imgUrl: string) => {
                return <Image className='rounded-lg' width={100} src={imgUrl} />
            },
            align: 'center',
        },
        {
            title: 'Nội dung',
            dataIndex: 'contentSlider',
            align: 'center',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_id: any, status: any) => (
                <div className="flex space-x-4" style={{ justifyContent: 'center', alignItems: "center" }}>
                    <Popconfirm
                        title="Bạn có chắc chắn muốn xóa slide này ?"
                        icon={<QuestionCircleOutlined style={{ color: 'red' }} />}
                        onConfirm={() => RemoveSlide(_id)}
                        okText={
                            <span style={{ color: 'black' }}>có</span>
                        }
                        cancelText="không"
                    >
                        <DeleteFilled className='scale-125 hover:scale-150 text-red-600' />
                    </Popconfirm>

                    {
                        !status.status ?
                            <Popconfirm
                                title={`Bạn muốn dùng slide cho website của mình ?`}
                                onConfirm={() => ApplySlide(_id)}
                                okText={
                                    <span style={{ color: 'black' }}>có</span>
                                }
                                cancelText="không"
                            >
                                <CheckOutlined style={{ color: "green", scale: "1.4", cursor: "pointer" }} />
                            </Popconfirm>
                            :
                            <Popconfirm
                                title={`Bạn muốn ngưng dùng slide này chứ ?`}
                                onConfirm={() => ApplySlide(_id)}
                                okText={
                                    <span style={{ color: 'black' }}>có</span>
                                }
                                cancelText="không"
                            >
                                <CloseOutlined style={{ color: "red", scale: "1.4", cursor: "pointer" }} />
                            </Popconfirm>
                    }



                </div>
            ),
            align: 'center',
        },
    ];
    return (
        <div>
            <h1 className='ml-5 text-2xl mb-2'>Danh sách các Slide</h1><hr />
            {contextHolder}
            <div className='mt-3 flex justify-between'>
                <div className="">
                    <Link to={`/admin/slide/add`}><Button className='hover:scale-110' type="primary" style={{ background: "green", color: "white" }}>
                        Thêm slide mới
                    </Button></Link>
                    <Input name='nameUser' onChange={() => FindListName(event)} placeholder="tìm theo tên .." allowClear style={{ width: 350, marginLeft: 50 }} />
                </div>
            </div>
            <Divider />
            {isLoading ? <Loading /> : <Table columns={columns} dataSource={dataSlide} pagination={{ pageSize: 5 }}/>}
        </div>
    )
}

export default SlideList
