import { Typography } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = ({ style }) => {
    return (
        <>
            {/* --- RESPONSIVE SINGLE LINE FOOTER STYLES --- */}
            <style>{`
                .footer-container {
                    display: flex;
                    justify-content: center;
                    /* Dynamically scale the gap between Address and Email sections */
                    gap: clamp(15px, 8vw, 100px); 
                    align-items: flex-start;
                    flex-wrap: nowrap; /* <--- FORCE SINGLE LINE */
                    width: 100%;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 10px;
                }

                .footer-section {
                    display: flex;
                    text-align: left;
                    /* Scale gap between Icon and Text */
                    gap: clamp(6px, 1.5vw, 15px);
                    align-items: flex-start;
                }

                .footer-icon {
                    color: #ff5722;
                    /* Scale Icon Size */
                    font-size: clamp(10px, 2vw, 15px);
                    margin-top: 3px;
                }

                /* Ensure text containers don't force wrap awkwardly */
                .text-content {
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                }
            `}</style>

            <div style={{ 
                background: 'transparent', 
                padding: '10px 0', 
                color: '#fff', 
                textAlign: 'center', 
                width: '100%', 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                ...style 
            }}>
                {/* Title Scales Smoothly */}
                <Title level={5} style={{ 
                    color: '#fff', 
                    marginBottom: '10px', 
                    fontWeight: '600', 
                    fontSize: 'clamp(10px, 3vw, 16px)', /* Scales down to 10px */
                    fontFamily: "'Inter', sans-serif"
                }}>
                    Get in touch with us
                </Title>

                <div className="footer-container">
                    
                    {/* --- ADDRESS SECTION --- */}
                    <div className="footer-section">
                        <EnvironmentOutlined className="footer-icon" />
                        <div className="text-content">
                            <Text strong style={{ 
                                display: 'block', 
                                lineHeight: '1', 
                                color: '#fff', 
                                marginBottom: '4px', 
                                fontFamily: "'Inter', sans-serif",
                                fontSize: 'clamp(9px, 2.5vw, 15px)' /* Responsive Label */
                            }}>
                                Address:
                            </Text>
                            <Text style={{ 
                                color: 'rgba(255,255,255,0.7)', 
                                lineHeight: '1.3', 
                                display: 'block',
                                whiteSpace: 'nowrap', /* Tries to keep address lines clean */
                                fontSize: 'clamp(8px, 2vw, 14px)' /* Responsive Text */
                            }}>
                                Kasturba Medical College<br />
                                Tiger Circle Road, Madhav Nagar<br />
                                Manipal – 576104
                            </Text>
                        </div>
                    </div>

                    {/* --- EMAIL SECTION --- */}
                    <div className="footer-section">
                        <MailOutlined className="footer-icon" />
                        <div className="text-content">
                            <Text strong style={{ 
                                display: 'block', 
                                lineHeight: '1', 
                                color: '#fff', 
                                marginBottom: '4px', 
                                fontFamily: "'Inter', sans-serif",
                                fontSize: 'clamp(9px, 2.5vw, 15px)' /* Responsive Label */
                            }}>
                                Email ID:
                            </Text>
                            <Text style={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.7)', 
                                marginBottom: '2px',
                                fontSize: 'clamp(8px, 2vw, 14px)' /* Responsive Text */
                            }}>
                                dpr.mu@manipal.edu
                            </Text>
                            <Text style={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: 'clamp(8px, 2vw, 14px)' /* Responsive Text */
                            }}>
                                aihealthcare.kmc@manipal.edu
                            </Text>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;