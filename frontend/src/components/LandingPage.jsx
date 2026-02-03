import { useState, useRef, useEffect } from 'react';
import { Form, Input, Select, Button, Typography, Modal, message, ConfigProvider, Carousel, Image } from 'antd';
import { MailOutlined, HomeOutlined, TeamOutlined, MessageOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import Header from './Header';
import Footer from './Footer';
import bgVideo from '../assets/video.mov';
import img2 from '../assets/img1.jpg';
import img5 from '../assets/img5.jpg';
import img6 from '../assets/img6.jpg';
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img9 from '../assets/img9.jpg';
import img10 from '../assets/img10.jpg';
import img11 from '../assets/img11.jpg';
import img12 from '../assets/img12.jpg';
import img13 from '../assets/img13.jpg';

// import './LandingPage.css'; 

const { Title, Text } = Typography;
const { Option } = Select;

const LandingPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    // Track mobile state explicitly to force correct settings
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    const [form] = Form.useForm();
    const videoRef = useRef(null);
    const carouselRef = useRef(null);

    // Update isMobile on resize
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Force autoplay for Safari/iOS
    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.defaultMuted = true;
            videoRef.current.muted = true;
            videoRef.current.play().catch(error => console.log("Autoplay prevented:", error));
        }
    }, []);

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

    // Gallery Data
    const galleryItems = [
        { src: img2, alt: 'Inauguration', style: { objectPosition: 'center center' } },
        { src: img5, alt: ' Inaugration 1', style: { objectPosition: 'center center' } },
        { src: img10, alt: 'Gallery 2', style: { objectPosition: 'center center' } },
        { src: img6, alt: 'Inauguration 2', style: { objectPosition: 'center center' } },
        { src: img8, alt: 'Briefing', style: { objectPosition: 'center center' } },
        { src: img9, alt: 'Gallery 1', style: { objectPosition: 'center center' } },
        { src: img11, alt: 'Gallery 3', style: { objectPosition: 'center center' } },
        { src: img12, alt: 'Gallery 4', style: { objectPosition: 'center center' } },
        { src: img13, alt: 'Gallery 5', style: { objectPosition: 'center center' } },
    ];

    // --- CAROUSEL SETTINGS (SPLIT LOGIC) ---
    // We strictly separate settings to guarantee Mobile is Single View
    const desktopSettings = {
        dots: false,
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerPadding: '0px',
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const mobileSettings = {
        dots: false,
        infinite: true,
        centerMode: false, // FORCE OFF: No peeking
        variableWidth: false,
        speed: 300,        // Faster transition
        slidesToShow: 1,   // Strictly 1 slide
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // Choose settings based on state
    const currentSettings = isMobile ? mobileSettings : desktopSettings;

    // Custom Arrow Button Styles
    const arrowButtonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 30,
        backgroundColor: 'rgba(255, 87, 34, 0.9)',
        color: 'white',
        border: '2px solid #fff',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '20px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.5)',
        transition: 'all 0.3s ease'
    };

    return (
        <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: '#fff' }}>

            {/* --- INTERNAL CSS --- */}
            <style>{`
                /* 1. GALLERY STYLES (Desktop Defaults) */
                .gallery-wrapper {
                    background: #000;
                    padding: 0px 60px 60px 60px;
                    display: flex;
                    justify-content: center;
                    position: relative;
                    overflow: visible; 
                }

                .gallery-container-carousel {
                    max-width: 1200px; 
                    width: 100%;
                    padding: 0 10px;
                    position: relative; 
                }

                .ant-carousel .slick-slide {
                    padding: 25px 10px;
                    transition: all 0.5s ease;
                }

                /* --- DESKTOP CARD STYLES --- */
                .image-card {
                    height: 240px; 
                    position: relative;
                    border-radius: 25px; 
                    overflow: hidden;
                    box-shadow: 0 10px 20px rgba(0,0,0,0.5);
                    transform: scale(0.9); 
                    opacity: 0.7;
                    transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
                }

                /* Desktop Scale Effect */
                .ant-carousel .slick-center .image-card {
                    transform: scale(1.15); 
                    opacity: 1 !important;
                    z-index: 10;
                    box-shadow: 0 25px 50px rgba(255, 87, 34, 0.5) !important;
                    border: 2px solid rgba(255, 87, 34, 0.3);
                }

                .image-card:hover { opacity: 1; }
                .image-card .ant-image { width: 100%; height: 100%; }
                .image-card img {
                    width: 100%; height: 100%; object-fit: cover; display: block;
                }

                /* 2. VIDEO HERO */
                .bg-video {
                    transform: scale(1); width: 100%; height: 100%;
                    object-fit: cover; object-position: center 15%;
                }

                /* 3. FORM OVERRIDES */
                .ant-input-affix-wrapper:focus, 
                .ant-input-affix-wrapper-focused,
                .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover,
                .ant-input:focus, .ant-input:hover,
                .ant-select-selector:focus, .ant-select-focused .ant-select-selector,
                .ant-select:not(.ant-select-disabled):hover .ant-select-selector {
                    box-shadow: none !important; 
                    border-color: #ff5722 !important; 
                }
                .ant-input::placeholder, .ant-input textarea::placeholder {
                    font-weight: 600 !important; color: #888 !important; opacity: 1; 
                }

                /* --- MOBILE RESPONSIVENESS (FORCE SINGLE RECTANGULAR VIEW) --- */
                @media (max-width: 768px) {
                    .bg-video { transform: scale(1.0); }
                    
                    /* Clean wrapper: No side padding = Wider Image */
                    .gallery-wrapper { 
                        padding: 0 10px 40px 10px !important; 
                        background: #000;
                    }
                    .gallery-container-carousel { padding: 0; } 
                    
                    /* Remove slide padding gaps */
                    .ant-carousel .slick-slide {
                        padding: 0 5px !important; 
                    }

                    /* MOBILE CARD: Rectangular & Wide */
                    .image-card { 
                        height: 220px !important; /* Fixed landscape height */
                        width: 100% !important;   /* Fill the width */
                        margin: 0 auto !important;
                        border-radius: 12px; 
                        opacity: 1 !important;
                        box-shadow: none !important;
                        transform: none !important; /* No scaling */
                    }

                    /* Ensure Center Card is Normal (No zoom effect on mobile) */
                    .ant-carousel .slick-center .image-card { 
                        transform: none !important; 
                        box-shadow: none !important;
                        border: none !important;
                    }

                    /* Compacting the Hero Section */
                    .hero-section {
                        height: auto !important; 
                        min-height: auto !important;
                        padding-bottom: 20px !important;
                    }
                    .hero-content-wrapper {
                        padding-top: 20px !important;
                        padding-left: 15px !important;
                        padding-right: 15px !important;
                    }
                    .hero-subtitle {
                        font-size: 14px !important;
                        letter-spacing: 0.3em !important;
                        margin-bottom: 5px !important;
                        margin-top: 70px !important;
                    }
                    .hero-title { font-size: 2.5rem !important; }
                    .hero-description-container { margin-bottom: 20px !important; }
                    .hero-desc-text {
                        font-size: 14px !important; 
                        line-height: 1.5 !important;
                        margin-bottom: 10px !important;
                    }
                    .hero-sub-text { font-size: 13px !important; }
                    .hero-btn {
                        padding: 10px 24px !important;
                        font-size: 12px !important;
                    }
                    .hero-gradient { height: 50px !important; }
                }
            `}</style>


            {/* --- HEADER --- */}
            <div style={{ position: 'relative', zIndex: 10 }}>
                <Header />
            </div>

            {/* --- HERO SECTION --- */}
            <div className="hero-section" style={{ position: 'relative', height: '70vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
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
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)' }}></div>
                </div>

                <div className="hero-content-wrapper" style={{ position: 'relative', zIndex: 10, padding: '20px', color: '#fff', paddingTop: '38px' }}>

                    {/* TYPOGRAPHIC LOCKUP */}
                    <div style={{ marginBottom: '30px' }}>
                        <div className="hero-subtitle" style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(16px, 2vw, 26px)',
                            fontWeight: '700',
                            letterSpacing: '0.6em',
                            marginRight: '-0.6em',
                            marginBottom: '10px',
                            color: 'rgba(255,255,255,0.9)'
                        }}>
                            OFFICIAL WEBSITE
                        </div>

                        <h1 className="hero-title" style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: 'clamp(2.5rem, 6vw, 5.5rem)',
                            fontWeight: '800',
                            margin: 0,
                            lineHeight: '1',
                            letterSpacing: '-0.02em',
                            textTransform: 'uppercase'
                        }}>
                            LAUNCHING SOON
                        </h1>
                    </div>

                    {/* DESCRIPTION TEXT */}
                    <div className="hero-description-container" style={{ maxWidth: '800px', margin: '0 auto 35px auto' }}>
                        <p className="hero-desc-text" style={{
                            fontSize: '19px',
                            lineHeight: '1.8',
                            fontWeight: '400',
                            color: '#d1d1d1',
                            marginBottom: '20px',
                            fontFamily: "'Inter', sans-serif"
                        }}>
                            The <span style={{ fontWeight: '700', color: '#fff' }}>Department of AI in Healthcare at KMC, Manipal</span> is shaping the future of medicine by uniting clinical expertise, data, and artificial intelligence. It serves as a space where healthcare challenges meet intelligent solutions—driving innovation in patient care, research, education, and healthcare operations through responsible, real-world AI.
                        </p>

                        <p className="hero-sub-text" style={{
                            fontSize: '17px',
                            fontWeight: '500',
                            color: '#fff',
                            marginBottom: '0',
                            fontStyle: 'italic',
                            fontFamily: "'Inter', sans-serif",
                            opacity: 0.9
                        }}>
                            Curious what’s next in healthcare?
                        </p>
                    </div>

                    <button
                        className="hero-btn"
                        onClick={showModal}
                        style={{
                            padding: '12px 32px',
                            backgroundColor: '#ff5722',
                            color: '#fff',
                            border: 'none',
                            borderRadius: '50px',
                            fontSize: '14px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 15px rgba(255, 87, 34, 0.3)',
                            letterSpacing: '0.5px'
                        }}
                        onMouseOver={(e) => {
                            e.target.style.transform = 'translateY(-2px)';
                            e.target.style.boxShadow = '0 6px 20px rgba(255, 87, 34, 0.5)';
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = 'translateY(0)';
                            e.target.style.boxShadow = '0 4px 15px rgba(255, 87, 34, 0.3)';
                        }}
                    >
                        CONNECT WITH US
                    </button>
                </div>

                {/* Gradient Fade */}
                <div className="hero-gradient" style={{
                    position: 'absolute', bottom: 0, left: 0, width: '100%', height: '150px',
                    background: 'linear-gradient(to bottom, transparent, #000)', zIndex: 5, pointerEvents: 'none'
                }}></div>
            </div>

            {/* --- GALLERY SECTION (CAROUSEL WITH POPUP) --- */}
            <div className="gallery-wrapper">

                <div className="gallery-container-carousel">

                    {/* Left Arrow */}
                    <button
                        style={{ ...arrowButtonStyle, left: isMobile ? '-15px' : '-60px' }}
                        onClick={() => carouselRef.current.prev()}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 87, 34, 0.9)'}
                    >
                        <LeftOutlined />
                    </button>

                    <Image.PreviewGroup>
                        <Carousel ref={carouselRef} {...currentSettings}>
                            {galleryItems.map((item, index) => (
                                <div key={index}>
                                    <div className="image-card">
                                        <Image
                                            src={item.src}
                                            alt={item.alt}
                                            style={{ ...item.style, width: '100%', height: '100%', objectFit: 'cover' }}
                                            height="100%"
                                            width="100%"
                                            preview={{ mask: false }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </Image.PreviewGroup>

                    {/* Right Arrow */}
                    <button
                        style={{ ...arrowButtonStyle, right: isMobile ? '-15px' : '-60px' }}
                        onClick={() => carouselRef.current.next()}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#ff5722'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 87, 34, 0.9)'}
                    >
                        <RightOutlined />
                    </button>

                </div>
            </div>

            {/* --- FOOTER --- */}
            <div style={{ position: 'relative', zIndex: 2 }}>
                <Footer />
            </div>

            {/* --- INQUIRY MODAL --- */}
            <Modal open={isModalOpen} onCancel={handleCancel} footer={null} width={600} centered destroyOnClose>
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                    <Title level={3} style={{ margin: 0, color: '#1a1a1a', fontWeight: '700', fontFamily: "'Inter', sans-serif" }}>Welcome!</Title>
                    <Text style={{ color: '#666', fontSize: '14px', fontWeight: '500' }}>Kindly provide your details for further communication</Text>
                </div>

                <Form form={form} onFinish={onFinish} layout="vertical" size="large" preserve={false}>
                    <Form.Item name="email" rules={[{ type: 'email', message: 'Invalid E-mail!' }, { required: true, message: 'Please input your E-mail!' }]}>
                        <Input prefix={<MailOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Email address*" />
                    </Form.Item>
                    <Form.Item name="phone" rules={[{ message: 'Please input phone number!' }, { pattern: /^\d{10}$/, message: 'Please enter a valid phone number' }]}>
                        <Input addonBefore={prefixSelector} placeholder="Phone number" maxLength={10} />
                    </Form.Item>
                    <Form.Item name="company" rules={[{ required: true, message: 'Please input Company name!' }]}>
                        <Input prefix={<HomeOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Company / Organization name*" />
                    </Form.Item>
                    <Form.Item name="collaborationType" rules={[{ required: true, message: 'Select collaboration type!' }]}>
                        <ConfigProvider theme={{ token: { colorPrimary: '#ff5722' } }}>
                            <Select placeholder="Collaboration type*" suffixIcon={<TeamOutlined style={{ color: '#999' }} />} getPopupContainer={(trigger) => trigger.parentNode}>
                                {collaborationOptions.map(option => (
                                    <Option key={option.value} value={option.value}>{option.label}</Option>
                                ))}
                            </Select>
                        </ConfigProvider>
                    </Form.Item>
                    <Form.Item name="comments" rules={[{ required: true, message: 'Please enter your comments!' }]}>
                        <Input.TextArea prefix={<MessageOutlined style={{ color: '#999', marginRight: '10px' }} />} placeholder="Comments / message*" rows={3} />
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