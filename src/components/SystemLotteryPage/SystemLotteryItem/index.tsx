import {
  Button,
  Carousel,
  Col,
  Drawer,
  Modal,
  Popover,
  Row,
  Space,
  Statistic,
} from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';
import { faCaretLeft, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function SystemLotteryItem() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  const contentStyle: React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return (
    <div className={clsx('w-[1000px] rounded-lg overflow-hidden')}>
      <div className={clsx('bg-teal-500')}>
        <span>Giai nam</span>
        <span>2024</span>
      </div>
      <div className={clsx('w-full relative')}>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <Popover title="Xem lich su">
          <FontAwesomeIcon
            onClick={showDrawer}
            className={clsx('absolute top-1/2 text-3xl right-0')}
            style={{ color: 'white', fontSize: '50px' }}
            icon={faCaretLeft}
          />
        </Popover>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={onClose}
          open={openDrawer}
          getContainer={false}
          style={{
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
          }}
          // closeIcon={<FontAwesomeIcon icon={faCircleXmark} />}
          extra={
            <Space>
              <FontAwesomeIcon onClick={onClose} icon={faCircleXmark} />
            </Space>
          }
        >
          <p>Some contents...</p>
        </Drawer>
      </div>
      <div className={clsx('w-full h-[200px] flex')}>
        <div className={clsx('w-1/4 flex flex-col bg-teal-200')}>
          <span className={clsx('text-2xl')}>Prize</span>
          <span>100$</span>
        </div>
        <div className={clsx('w-9/12 bg-teal-500')}>
          <Row gutter={16}>
            <Col span={12}>
              <Statistic title="Active Users" value={112893} />
            </Col>
            <Col span={8}>
              <Statistic.Countdown title="Active Users" value={deadline} />
            </Col>
            <Col>
              <Button onClick={()=>setOpenModal(!openModal)}>Show</Button>
              <Modal title="Basic Modal" open={openModal} onCancel={()=>setOpenModal(false)} footer={[]}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
              </Modal>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
