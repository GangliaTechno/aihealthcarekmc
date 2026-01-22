import { Typography, Space } from 'antd';
// CHANGED: Imported Filled versions of the icons
import { EnvironmentFilled, MailFilled, FacebookFilled, LinkedinFilled, YoutubeFilled, InstagramFilled } from '@ant-design/icons';

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
                    gap: 400px; 
                    flex-wrap: wrap;
                  
                }

                .footer-section {
                    display: flex;
                    align-items: flex-start;
                    text-align: left;
                    gap: 15px;
                }

                /* --- ICON ANIMATION --- */
                .footer-icon {
                    color: #ff5722;
                    font-size: 20px; 
                    margin-top: 3px;
                    flex-shrink: 0;
                    transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.27);
                }
                
                .footer-section:hover .footer-icon {
                    transform: translateY(-5px);
                }

                .footer-text-group {
                    display: flex; 
                    flex-direction: column;
                }

                .social-icon {
                    font-size: 22px;
                    color: #666;
                    transition: color 0.3s;
                    cursor: pointer;
                }
                .social-icon:hover { color: #ff5722; }

                /* --- RESPONSIVE ADJUSTMENTS --- */
                @media (max-width: 992px) {
                    .footer-container { gap: 50px; }
                }

                @media (max-width: 768px) {
                    .footer-container {
                        gap: 30px;
                        /* Reverts to smaller padding on mobile */
                        padding: 0 20px; 
                        justify-content: flex-start; 
                        flex-direction: column;
                        align-items: center;
                    }

                    .footer-section {
                        gap: 10px;
                        text-align: center; 
                        align-items: center;
                        flex-direction: column;
                    }

                    .footer-icon {
                        font-size: 18px !important;
                        margin-top: 0;
                        margin-bottom: 5px;
                    }

                    .footer-title { font-size: 16px !important; }
                    .footer-label { font-size: 13px !important; }
                    .footer-content { font-size: 12px !important; line-height: 1.4 !important; }
                }
            `}</style>

            <div style={{
                background:'#D3D3D3',
                padding: '22px 0', 
                color: '#333',
                textAlign: 'center',
                width: '100%',
                borderTop: '1px solid #e0e0e0',
                ...style
            }}>
                {/* Title */}
                <Title level={5} className="footer-title" style={{ 
                    color: '#333', 
                    marginBottom: '20px',
                    fontWeight: '800', 
                    fontSize: '18px',
                    fontFamily: "'EB Garamond', serif", 
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Connect with Us 
                </Title>

                {/* Content Container */}
                <div className="footer-container">
                    
                    {/* --- ADDRESS --- */}
                    <div className="footer-section">
                        {/* CHANGED: Used EnvironmentFilled */}
                        <EnvironmentFilled className="footer-icon" />
                        <div className="footer-text-group">
                            <Text className="footer-label" style={{ display: 'block', color: '#333', fontSize: '15.5px', marginBottom: '4px',fontWeight:'600' }}>
                                Address
                            </Text>
                            <div className="footer-content" style={{ color: '#555', fontSize: '14px', lineHeight: '1.5', maxWidth: '280px' }}>
                                Dept of AI in Healthcare,<br />
                                1st Floor, Kasturba Medical College(KMC),<br />
                                Madhav Nagar, Manipal - 576104
                            </div>
                        </div>
                    </div>

                    {/* --- EMAIL --- */}
                    <div className="footer-section">
                        {/* CHANGED: Used MailFilled */}
                        <MailFilled className="footer-icon" />
                        <div className="footer-text-group">
                            <Text className="footer-label" style={{ display: 'block', color: '#333', fontSize: '15.5px', marginBottom: '4px',fontWeight:'600' }}>
                                Email
                            </Text>
                            <div className="footer-content" style={{ display: 'flex', flexDirection: 'column', gap: '3px', color: '#555', fontSize: '16px', lineHeight: '1.5' }}>
                                <a href="mailto:dpr.mu@manipal.edu" style={{ color: '#555', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='#ff5722'} onMouseOut={(e) => e.target.style.color='#555'}>
                                    dpr.mu@manipal.edu
                                </a>
                                <a href="mailto:aihealthcare.kmc@manipal.edu" style={{ color: '#555', fontSize:'16px', textDecoration: 'none', transition: 'color 0.2s' }} onMouseOver={(e) => e.target.style.color='#ff5722'} onMouseOut={(e) => e.target.style.color='#555'}>
                                    aihealthcare.kmc@manipal.edu
                                </a>
                                
                            </div>
                        </div>
                    </div>
                </div>

                {/* --- SOCIAL MEDIA ICONS --- */}
                <div style={{ 
                    marginTop: '25px', 
                    width: '90%', 
                    maxWidth: '1000px', 
                    margin: '25px auto 0 auto',
                    borderTop: '1px solid rgba(0,0,0,0.05)',
                    paddingTop: '15px'
                }}>
                    <Space size="large">
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
                    <div style={{ marginTop: '8px' }}>
                        <Text className="footer-content" style={{ fontSize: '15px', color: '#888' }}>© 2026 Manipal Academy of Higher Education</Text>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;