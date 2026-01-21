import { useState, useRef, useEffect } from 'react';
import { Form, Input, Select, Button, Typography, Modal, message, ConfigProvider, Carousel } from 'antd';
import { MailOutlined, HomeOutlined, TeamOutlined, MessageOutlined } from '@ant-design/icons';
import Header from './Header';
import Footer from './Footer';
import bgVideo from '../assets/video.mov'; 
import img1 from '../assets/img2.jpg';
import img2 from '../assets/img1.png';
import img3 from '../assets/img3.webp';
import img4 from '../assets/img4.png';
import './LandingPage.css';

const { Title, Text } = Typography;
const { Option } = Select;

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [form] = Form.useForm();
    const videoRef = useRef(null);

    // Force autoplay for Safari/iOS
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true; 
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
        }
    }, []);

    // Reset form when modal closes
    useEffect(() => {
        if (!isModalOpen) {
            form.resetFields();
        }
    }, [isModalOpen, form]);

    const showModal = () => setIsModalOpen(true);
    const handleCancel = () => setIsModalOpen(false);

    const onFinish = (values) => {
        const subject = `New Inquiry: ${values.collaborationType} - ${values.company}`;
        const body = `New Inquiry Received:\n\nEmail: ${values.email}\nPhone: +91 ${values.phone}\nCompany/Organization: ${values.company}\nCollaboration Type: ${values.collaborationType}\n\nMessage:\n${values.comments}`;
        const mailtoLink = `mailto:aihealthcare.kmc@manipal.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        const link = document.createElement('a');
        link.href = mailtoLink;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        message.success('Opening your email client...');
        setIsModalOpen(false);
    };

    const prefixSelector = (
        <span style={{ fontSize: '15px', fontWeight: '600', color: '#1a1a1a', padding: '0 4px', fontFamily: "'Inter', sans-serif" }}>+91</span>
    );

    const collaborationOptions = [
        { value: 'academic', label: 'Academic' },
        { value: 'research', label: 'Research' },
        { value: 'innovation', label: 'Innovation' },
        { value: 'project', label: 'Project' },
    ];

    return (
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>
            
            {/* --- RESPONSIVE CSS --- */}
            <style>{`
                /* 1. SLIDER STYLES */
                .custom-carousel .slick-slide {
                    /* Desktop Height */
                    height: 750px; 
                    overflow: hidden;
                    position: relative;
                    background: #000;
                   
                    align-items: center;
                    justify-content: center;
                }

                .custom-carousel img {
                    width: 100% !important;
                    height: 100% !important;
                    /* CHANGED: 'cover' fills the space, removing black borders */
                    object-fit: cover !important; 
                }

                .slider-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 70%;
                    background: linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%);
                    pointer-events: none;
                }
                    /* Top Overlay (New) */
                .slider-overlay-top {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 70%;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 100%);
                    pointer-events: none;
                    z-index: 2;
                }

                /* 2. HERO / VIDEO SECTION */
                .bg-video {
                    transform: scale(1.35); /* Zoom effect for desktop */
                    transform-origin: center center;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                /* 3. FORM STYLES */
                .ant-input-affix-wrapper:focus, 
                .ant-input-affix-wrapper-focused,
                .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
                .ant-input:focus,
                .ant-input:hover,
                .ant-select-selector:focus,
                .ant-select-focused .ant-select-selector,
                .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
                    box-shadow: none !important; 
                    border-color: #ff5722 !important; 
                }

                .ant-input::placeholder, 
                .ant-input textarea::placeholder {
                    font-weight: 600 !important; 
                    color: #888 !important; 
                    opacity: 1; 
                }
                .ant-select-selection-placeholder {
                    font-weight: 600 !important;
                    color: #888 !important;
                }

                /* --- MOBILE RESPONSIVENESS --- */
                @media (max-width: 768px) {
                    /* Smaller slider height on mobile */
                    .custom-carousel .slick-slide { height: 350px; }
                    
                    /* Reset video zoom on mobile so it fits better */
                    .bg-video { transform: scale(1.0); }
                }
            `}</style> 
            

            {/* Header */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <Header />
            </div>

            {/* VIDEO SECTION */}
            <div style={{ position: 'relative', height: '91vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
                    <video
                        ref={videoRef}
                        className="bg-video"
                        autoPlay muted loop playsInline
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    >
                        <source src={bgVideo} type="video/mp4" />
                    </video>
                    {/* Dark Overlay */}
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.5)' }}></div>
                </div>

                <div style={{ position: 'relative', zIndex: 2, padding: '20px', color: '#fff' }}>
                    <h1 style={{ fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: '800', margin: '0 0 20px 0', fontFamily: "'Inter', sans-serif" }}>
                        <div>OFFICIAL WEBSITE </div>
                        <div>LAUNCHING SOON</div>
                    </h1>
                    <p style={{ fontSize: '18px', maxWidth: '700px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
                        The AI in Healthcare department at KMC Manipal was inaugurated in August 2025 to integrate AI with clinical practice and education.
                    </p>
                    <button
                        onClick={showModal}
                        style={{
                            padding: '14px 35px', backgroundColor: '#ff5722', color: '#fff', border: 'none',
                            borderRadius: '50px', fontSize: '15px', fontWeight: '700', cursor: 'pointer',
                        }}
                    >
                        CONTACT US
                    </button>
                </div>

                {/* --- ADDED: Gradient Fade Transition --- */}
                <div style={{ 
                    position: 'absolute', 
                    bottom: 0, 
                    left: 0, 
                    width: '100%', 
                    height: '150px', 
                    background: 'linear-gradient(to bottom, transparent, #000)', 
                    zIndex: 5,
                    pointerEvents: 'none' 
                }}></div>

            </div>

            {/* SLIDER SECTION */}
            <div style={{ width: '100%', background: '#000' }}>
                <Carousel autoplay autoplaySpeed={2000} effect="fade" className="custom-carousel">
                   <div>
                        <div className="slider-overlay-top"></div> {/* New Top Overlay */}
                        <div className="slider-overlay"></div>     {/* Existing Bottom Overlay */}
                        <img src={img2} alt="Campus 2" />
                    </div>
                    <div>
                        <div className="slider-overlay-top"></div> {/* New Top Overlay */}
                        <div className="slider-overlay"></div>     {/* Existing Bottom Overlay */}
                        <img src={img4} alt="Campus 4" />
                    </div>
                </Carousel>
            </div>
            
            {/* Footer */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Footer />
            </div>

            {/* --- MODAL --- */}
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={600} centered destroyOnClose>
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                    <Title level={3} style={{ margin: 0, color: '#1a1a1a', fontWeight: '700', fontFamily: "'Inter', sans-serif" }}>Welcome!</Title>
                    <Text style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>Kindly provide your details for further communication</Text>
                </div>
                
                <Form form={form} onFinish={onFinish} layout="vertical" size="large" preserve={false}>
                    
                    {/* Email */}
                    <Form.Item name="email" rules={[{ type: 'email', message: 'Invalid E-mail!' }, { required: true, message: 'Please input your E-mail!' }]}>
                        <Input prefix={<MailOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Email address*" />
                    </Form.Item>

                    {/* Phone */}
                    <Form.Item 
                        name="phone" 
                        rules={[
                            { required: true, message: 'Please input phone number!' }, 
                            { pattern: /^\d{10}$/, message: 'Please enter a valid phone number' }
                        ]}
                    >
                        <Input addonBefore={prefixSelector} placeholder="Phone number*" maxLength={10} />
                    </Form.Item>

                    {/* Company */}
                    <Form.Item name="company" rules={[{ required: true, message: 'Please input Company name!' }]}>
                        <Input prefix={<HomeOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Company / Organization name*" />
                    </Form.Item>

                    {/* Collaboration Type */}
                    <Form.Item name="collaborationType" rules={[{ required: true, message: 'Select collaboration type!' }]}>
                        <ConfigProvider theme={{ token: { colorPrimary: '#ff5722' } }}>
                            <Select 
                                placeholder="Collaboration type*"
                                suffixIcon={<TeamOutlined style={{ color: '#999' }} />}
                                getPopupContainer={(trigger) => trigger.parentNode}
                            >
                                {collaborationOptions.map(option => (
                                    <Option key={option.value} value={option.value}>
                                        {option.label}
                                    </Option>
                                ))}
                            </Select>
                        </ConfigProvider>
                    </Form.Item>

                    {/* Comments */}
                    <Form.Item name="comments" rules={[{ required: true, message: 'Please enter your comments!' }]}>
                        <Input.TextArea 
                            prefix={<MessageOutlined style={{ color: '#999', marginRight: '10px' }} />} 
                            placeholder="Comments / message*" 
                            rows={3} 
                        />
                    </Form.Item>

                    <Form.Item style={{ marginBottom: 0 }}>
                        <Button type="primary" htmlType="submit" block style={{ backgroundColor: '#ff5722', height: '46px', fontSize: '16px' }}>Submit Inquiry</Button>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    );
};

export default LandingPage;