import { Typography, Space } from 'antd';
import { EnvironmentOutlined, MailOutlined, FacebookFilled, LinkedinFilled, YoutubeFilled, InstagramFilled } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = ({ style }) => {
    return (
        <>
            <style>{`
                .footer-container {
                    display: flex;
                    justify-content: center;
                    align-items: flex-start;
                    width: 100%;
                    max-width: 100%;
                    margin: 0 auto;
                    gap: 660px; /* Default desktop gap */
                    flex-wrap: nowrap; /* Prevents wrapping/stacking */
                }

                .footer-section {
                    display: flex;
                    align-items: flex-start;
                    text-align: left;
                    gap: 10px;
                    white-space: nowrap; /* Tries to keep text on one line if possible */
                }

                .footer-icon {
                    color: #ff5722;
                    font-size: 18px;
                    margin-top: 3px;
                    flex-shrink: 0;
                }

                .footer-text-group {
                    display: flex; 
                    flex-direction: column;
                }

                .social-icon {
                    font-size: 20px;
                    color: #666;
                    transition: color 0.3s;
                    cursor: pointer;
                }
                .social-icon:hover { color: #ff5722; }

                /* --- RESPONSIVE ADJUSTMENTS --- */
                @media (max-width: 992px) {
                     /* Tablet: Slightly tighter */
                    .footer-container { gap: 50px; }
                }

                @media (max-width: 768px) {
                    /* Mobile: Compact mode, NO stacking */
                    .footer-container {
                        gap: 20px; /* Minimum gap */
                        padding: 0 10px;
                        justify-content: space-evenly; /* Distribute available space */
                    }

                    .footer-section {
                        gap: 5px; /* Tighter icon-text gap */
                        white-space: normal; /* Allow text wrapping strictly if needed */
                    }

                    .footer-icon {
                        font-size: 14px !important; /* Smaller icons */
                        margin-top: 2px;
                    }

                    /* Reduced Font Sizes by ~2pts for Mobile */
                    .footer-title {
                        font-size: 13px !important; /* Was 15px */
                    }
                    .footer-label {
                        font-size: 12px !important; /* Was 14px */
                    }
                    .footer-content {
                        font-size: 10px !important; /* Was 12px */
                        line-height: 1.3 !important;
                    }
                }
            `}</style>

            <div style={{ 
                background:'#D3D3D3', 
                padding: '10px 0', 
                color: '#333', 
                textAlign: 'center', 
                width: '100%', 
                borderTop: '1px solid #e0e0e0', 
                ...style 
            }}>
                {/* Title */}
                <Title level={5} className="footer-title" style={{ 
                    color: '#333', 
                    marginBottom: '8px',
                    fontWeight: '900', 
                    fontSize: '15px', /* Desktop Size */
                    fontFamily: "'Inter', sans-serif",
                    textTransform: 'uppercase'
                }}>
                    Get in touch with us
                </Title>

                {/* Content Container */}
                <div className="footer-container">
                    
                    {/* --- ADDRESS --- */}
                    <div className="footer-section">
                        <EnvironmentOutlined className="footer-icon" />
                        <div className="footer-text-group">
                            <Text strong className="footer-label" style={{ display: 'block', color: '#333', fontSize: '14px', lineHeight: '1.2' }}>
                                Address:
                            </Text>
                            <div className="footer-content" style={{ color: '#666', fontSize: '12px', lineHeight: '1.4' }}>
                                <div>Madhav Nagar, Udupi district, Manipal-576104</div> 
                                <div>Located near Tiger Circle within the Manipal Academy of </div>
                                <div>Higher Education (MAHE) campus. </div>
                            </div>
                        </div>
                    </div>

                    {/* --- EMAIL --- */}
                    <div className="footer-section">
                        <MailOutlined className="footer-icon" />
                        <div className="footer-text-group">
                            <Text strong className="footer-label" style={{ display: 'block', color: '#333', fontSize: '14px', lineHeight: '1.2' }}>
                                Email ID:
                            </Text>
                            <div className="footer-content" style={{ color: '#666', fontSize: '12px', lineHeight: '1.4' }}>
                                <div style={{ marginBottom: '1px' }}>dpr.mu@manipal.edu</div>
                                <div>aihealthcare.kmc@manipal.edu</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SOCIAL MEDIA ICONS --- */}
                <div style={{ 
                    marginTop: '10px', 
                    paddingTop: '7px', 
                    width: '90%', 
                    maxWidth: '1000px', 
                    margin: '10px auto 0 auto' 
                }}>
                    <Space size="middle">
                        <a href="https://www.facebook.com/mahemanipal/" target="_blank" rel="noopener noreferrer">
                            <FacebookFilled className="social-icon" />
                        </a>
                        <a href="https://www.instagram.com/mahe_manipal" target="_blank" rel="noopener noreferrer">
                            <InstagramFilled className="social-icon" />
                        </a>
                        <a href="https://www.linkedin.com/school/manipalacademyofhighereducation" target="_blank" rel="noopener noreferrer">
                            <LinkedinFilled className="social-icon" />
                        </a>
                        <a href="https://www.youtube.com/c/ManipalAcademyofHigherEducation" target="_blank" rel="noopener noreferrer">
                            <YoutubeFilled className="social-icon" />
                        </a>
                    </Space>
                    <div style={{ marginTop: '5px' }}>
                        <Text className="footer-content" style={{ fontSize: '10px', color: '#666' }}>© 2026 Manipal Academy of Higher Education</Text>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;