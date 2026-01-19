import { useState } from 'react';
import { Form, Input, Select, Button, Typography, Modal, message, ConfigProvider } from 'antd';
import { MailOutlined, HomeOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';
import Header from './Header';
import Footer from './Footer';
import bgVideo from '../assets/video.mp4'; 
import videoCover from '../assets/vidcover.png';
import './LandingPage.css';

const { Title, Text } = Typography;
const { Option } = Select;

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        form.resetFields();
    };

    const onFinish = (values) => {
        const subject = `New Inquiry: ${values.collaborationType} - ${values.company}`;
        const body = `New Inquiry Received:\n\nEmail: ${values.email}\nPhone: +91 ${values.phone}\nCompany/Organization: ${values.company}\nCollaboration Type: ${values.collaborationType}\n\nMessage:\n${values.comments || 'No comments provided.'}`;
        const mailtoLink = `mailto:aihealthcare.kmc@manipal.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        message.success('Opening your email client...');
        setIsModalOpen(false);
        form.resetFields();
    };

    const prefixSelector = (
        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', padding: '0 4px', fontFamily: "'Inter', sans-serif" }}>+91</span>
    );

    return (
        <div style={{
            position: 'relative',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            backgroundColor: '#000',
            color: '#fff'
        }}>
            {/* --- RESPONSIVE CSS OVERRIDES --- */}
            <style>{`
                /* 1. INPUT STYLING (Glow & Bold) */
                .ant-input-affix-wrapper:focus, .ant-input-affix-wrapper-focused,
                .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
                .ant-select-selector:focus, .ant-select-focused .ant-select-selector,
                .ant-select:not(.ant-select-disabled):hover .ant-select-selector,
                textarea.ant-input:focus, textarea.ant-input:hover {
                    border-color: #ff5722 !important;
                    box-shadow: 0 0 0 2px rgba(255, 87, 34, 0.2) !important;
                }

                .ant-input-affix-wrapper > input.ant-input,
                .ant-input-affix-wrapper > input.ant-input:focus {
                    box-shadow: none !important;
                    border: none !important;
                }

                .ant-input, .ant-input-affix-wrapper input, .ant-select-selection-item {
                    font-weight: 600 !important;
                    font-family: 'Inter', sans-serif !important;
                    color: #1a1a1a !important;
                }

                .ant-input::placeholder, .ant-input-affix-wrapper input::placeholder,
                textarea.ant-input::placeholder, .ant-select-selection-placeholder {
                    font-weight: 600 !important;
                    opacity: 0.8 !important;
                    color: #666 !important;
                    font-family: 'Inter', sans-serif !important;
                }

                /* 2. RESPONSIVE VIDEO SCALING */
                /* On Desktop: Scale up to hide bars */
                .bg-video {
                    transform: scale(1.35);
                    transform-origin: center center;
                }
                /* On Mobile (Screens narrower than 768px): Reset scale */
                /* Mobile screens are usually tall, so 'cover' naturally hides side bars without zoom */
                @media (max-width: 768px) {
                    .bg-video {
                        transform: scale(1.0); 
                    }
                }

                /* 3. RESPONSIVE MODAL */
                /* Forces modal to not exceed screen width on mobile */
                .responsive-modal .ant-modal {
                    max-width: 95vw !important;
                    margin: 10px auto;
                    padding-bottom: 20px;
                }
                .responsive-modal .ant-modal-content {
                    padding: 20px !important;
                }
            `}</style>

            {/* Background Video Layer */}
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden',backgroundColor: '#000', 
                backgroundImage: `url(${videoCover})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center' }}>
                <video
                    className="bg-video" // Added class for responsive scaling
                    autoPlay loop muted playsInline poster={videoCover}
                    preload="auto" // Helps buffer the video
                    onTimeUpdate={(e) => {
                        const buffer = 0.25; // 0.25 seconds before end
                        if (e.target.currentTime > e.target.duration - buffer) {
                            e.target.currentTime = 0;
                            e.target.play();
                        }
                    }}
                    style={{
                        width: '100%', height: '100%', objectFit: 'cover', opacity: 0.5,
                        transform: 'scale(1.35)', 
                        transformOrigin: 'center center',
                        /* Hardware acceleration to prevent rendering glitches */
                        backfaceVisibility: 'hidden',
                        WebkitBackfaceVisibility: 'hidden'
                    }}
                >
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>

            {/* Gradient Overlay */}
            <div style={{
                position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 1, 
                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 75%, #000000 100%)',
                pointerEvents: 'none'
            }}></div>

            {/* Header */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Header />
            </div>

            {/* Main Content */}
            <div style={{
                flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                textAlign: 'center', position: 'relative', zIndex: 2, padding: '20px',
            }}>
                {/* Responsive Title using Clamp */}
                <h1 className="animate-entry" style={{
                    fontSize: 'clamp(2.5rem, 6vw, 5rem)', // Scales between 2.5rem (mobile) and 5rem (desktop)
                    fontWeight: '800', letterSpacing: '2px', margin: '0 0 20px 0', fontFamily: "'Inter', sans-serif"
                }}>
                    LAUNCHING SOON
                </h1>

                <p className="animate-entry" style={{
                    fontSize: '14px', maxWidth: '800px', lineHeight: '1.6', margin: '0 0 40px 0', opacity: 0.9, animationDelay: '0.2s' 
                }}>
                    The AI in Healthcare department at KMC Manipal was inaugurated in August 2025 to integrate AI with clinical practice and education.
                    It advances AI-driven diagnostics, decision-making, and responsible healthcare innovation.
                </p>

                <button
                    onClick={showModal} className="animate-entry"
                    style={{
                        padding: '16px 40px', backgroundColor: '#ff5722', color: '#fff', border: 'none',
                        borderRadius: '50px', fontSize: '16px', fontWeight: '600', cursor: 'pointer',
                        transition: 'transform 0.2s ease, background 0.2s ease', boxShadow: '0 4px 15px rgba(255, 87, 34, 0.4)',
                        animationDelay: '0.4s'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                >
                    CONTACT US
                </button>
            </div>

            {/* Footer */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Footer />
            </div>

            {/* --- INQUIRY MODAL --- */}
            <Modal
                title={null} footer={null} open={isModalOpen} onCancel={handleCancel}
                width={600} 
                className="responsive-modal" // Enables the mobile width override
                centered destroyOnClose
                bodyStyle={{ padding: '30px 40px', background: '#fff', borderRadius: '8px' }}
            >
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <Title level={3} style={{ margin: 0, color: '#1a1a1a', fontWeight: '700', fontFamily: "'Inter', sans-serif" }}>Welcome!</Title>
                    <Text style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>Kindly provide your details for further communication</Text>
                </div>
                
                <Form form={form} name="inquiry_form" onFinish={onFinish} layout="vertical" size="large">
                    <Form.Item name="email" rules={[{ type: 'email', message: 'The input is not valid E-mail!' }, { required: true, message: 'Please input your E-mail!' }]} style={{ marginBottom: '20px' }}>
                        <Input className="bold-placeholder" prefix={<MailOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Email address*" style={{ borderRadius: '6px', fontSize: '15px', fontWeight: '600' }} />
                    </Form.Item>

                    <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone number!' }, { pattern: /^\d{10}$/, message: 'not a valid number' }]} style={{ marginBottom: '20px' }}>
                        <Input className="bold-placeholder" addonBefore={prefixSelector} placeholder="Phone number*" maxLength={10} style={{ borderRadius: '6px', fontSize: '15px', fontWeight: '600' }} />
                    </Form.Item>

                    <Form.Item name="company" rules={[{ required: true, message: 'Please input your Company name!' }]} style={{ marginBottom: '20px' }}>
                        <Input className="bold-placeholder" prefix={<HomeOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Company / Organization name*" style={{ borderRadius: '6px', fontSize: '15px', fontWeight: '600' }} />
                    </Form.Item>

                    <Form.Item name="collaborationType" rules={[{ required: true, message: 'Please select collaboration type!' }]} style={{ marginBottom: '20px' }}>
                        <ConfigProvider theme={{ token: { colorPrimary: '#ff5722' } }}>
                            <Select getPopupContainer={(trigger) => trigger.parentNode} className="bold-placeholder" placeholder="Collaboration type*" suffixIcon={<TeamOutlined style={{ color: '#999' }} />} style={{ borderRadius: '6px', fontWeight: '600' }}>
                                <Option value="academic">Academic</Option>
                                <Option value="research">Research</Option>
                                <Option value="innovation">Innovation</Option>
                                <Option value="project">Project</Option>
                            </Select>
                        </ConfigProvider>
                    </Form.Item>

                    <Form.Item name="comments" style={{ marginBottom: '24px' }}>
                        <Input.TextArea className="bold-placeholder" prefix={<MessageOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Comments / message" rows={3} style={{ borderRadius: '6px', fontSize: '15px', fontWeight: '600' }} />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button type="primary" htmlType="submit" block style={{ backgroundColor: '#ff5722', borderColor: '#ff5722', height: '46px', borderRadius: '6px', fontWeight: '700', fontSize: '16px', fontFamily: "'Inter', sans-serif" }}>Submit Inquiry</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default LandingPage;