import {
  Button,
  Carousel,
  Col,
  ConfigProvider,
  Drawer,
  Modal,
  Popover,
  Row,
  Space,
  Statistic,
  Steps,
} from 'antd';
import clsx from 'clsx';
import React, { useState } from 'react';
import VerificationInput from 'react-verification-input';
import {
  faBitcoinSign,
  faCaretLeft,
  faCircleXmark,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HistoryItem from './HistoryItem';

export default function SystemLotteryItem() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openInfoModal, setOpenInfoModal] = useState(false);
  const [openBuyModal, setOpenBuyModal] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };
  const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const contentStyle: React.CSSProperties = {
    height: '500px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
  return (
    <div
      data-aos="fade-up"
      className={clsx('w-[1000px] mt-28 rounded-lg overflow-hidden')}
    >
      <div className={clsx('relative')}>
        <div
          data-aos="fade-in"
          className={clsx('text-cyan-50 py-3 font-serif text-3xl font-medium')}
        >
          Giai nam
        </div>
        <div
          data-aos="fade-in"
          className={clsx(
            'absolute translate-x-[-50%] text-violet-50 font-serif text-5xl drop-shadow-2xl font-bold bottom-[-10px] z-[1031] left-1/2'
          )}
        >
          2024
        </div>
      </div>
      <ConfigProvider
        theme={{
          token: {
            colorTextDescription: 'red',
          },
          components: {
            Statistic: {
              titleFontSize: 18,
            },
            Popover: {
              minWidth: 10,
            },
          },
        }}
      >
        <div className={clsx('w-full rounded overflow-hidden relative')}>
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
          <Popover style={{ width: 'fit-content' }} title="Xem lich su">
            <FontAwesomeIcon
              onClick={showDrawer}
              className={clsx('absolute top-1/2 text-3xl right-0')}
              style={{ color: 'white', fontSize: '50px' }}
              icon={faCaretLeft}
            />
          </Popover>
          <Drawer
            title="History"
            placement="right"
            closable={false}
            onClose={onClose}
            open={openDrawer}
            getContainer={false}
            headerStyle={{ background:'linear-gradient(180deg, rgba(54, 83, 184, 0.93) 0%, rgba(66, 83, 144, 0.75) 100%)' }}
            bodyStyle={{
              background:'linear-gradient(180deg, rgba(54, 83, 184, 0.93) 0%, rgba(66, 83, 144, 0.75) 100%)'
            }}
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
            <div>
              <HistoryItem/>
              <HistoryItem/>
              <HistoryItem/>
              <HistoryItem/>
              <HistoryItem/>
              <VerificationInput
                placeholder='?'
                validChars={'0-9'}
                classNames={{
                  container: clsx(''),
                  character: clsx('rounded'),
                  characterInactive: clsx(''),
                  characterSelected: clsx(''),
                }}
              />
            </div>
          </Drawer>
        </div>
        <div
          data-aos="fade-up"
          className={clsx(
            'w-full subpixel-antialiased relative h-[200px] flex'
          )}
        >
          <div
            className={clsx(
              'w-1/4 flex justify-center items-center flex-col bg-teal-200'
            )}
          >
            <Statistic
              title="Prize"
              prefix={
                <FontAwesomeIcon
                  icon={faBitcoinSign}
                  style={{ color: '#dbd400' }}
                />
              }
              suffix="BNB"
              value={'1000'}
              valueStyle={{ fontWeight: 'bold' }}
            />
          </div>
          <div className={clsx('w-9/12 p-5 bg-teal-500')}>
            <Row gutter={16}>
              <Col span={12}>
                <Statistic
                  valueStyle={{ fontWeight: 'bold' }}
                  title="Active Users"
                  value={112893}
                />
              </Col>
              <Col span={8}>
                <Statistic.Countdown
                  valueStyle={{ fontWeight: 'bold' }}
                  title="End"
                  value={deadline}
                />
              </Col>
              <Col>
                <Button onClick={() => setOpenInfoModal(!openInfoModal)}>
                  Show
                </Button>
                <Modal
                  title="Basic Modal"
                  open={openInfoModal}
                  onCancel={() => setOpenInfoModal(false)}
                  footer={[]}
                >
                  <div>abc</div>
                </Modal>
              </Col>
            </Row>
          </div>
          <Modal
            title="Basic Modal"
            open={openBuyModal}
            onCancel={() => setOpenBuyModal(false)}
            footer={[]}
          >
            <Steps current={currentStep} items={items} />
            <div style={contentStyle}>{steps[currentStep].content}</div>
          </Modal>
          <Button
            onClick={() => setOpenBuyModal(!openBuyModal)}
            className={clsx('absolute bottom-0 left-1/2')}
          >
            AAAA
          </Button>
        </div>
      </ConfigProvider>
    </div>
  );
}
