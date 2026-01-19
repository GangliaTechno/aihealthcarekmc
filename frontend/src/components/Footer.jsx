import { Typography } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = ({ style }) => {
    return (
        <>
            <style>{`
                /* 1. Main Footer Container */
                .footer-container {
                    display: flex;
                    justify-content: center; /* Keeps everything in the visual center */
                    align-items: flex-start; /* Aligns top of both sections */
                    width: 100%;
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 0 10px;
                    
                    /* --- GAP STRATEGY: Fixed consistency --- */
                    /* Mobile Gap: 20px, Desktop Gap: 60px */
                    gap: 20px; 
                }

                /* 2. Individual Sections (Address / Email) */
                .footer-section {
                    display: flex;
                    align-items: flex-start;
                    text-align: left;
                    gap: 8px; /* Space between Icon and Text */
                    
                    /* Ensures they share space but don't get crushed */
                    flex: 0 1 auto;
                    max-width: 50%; /* Prevents one side from dominating */
                }

                /* 3. Icons */
                .footer-icon {
                    color: #ff5722;
                    font-size: 16px;
                    margin-top: 3px; /* Visual alignment with first line of text */
                    flex-shrink: 0;
                }

                /* 4. Text Container */
                .text-content {
                    display: flex;
                    flex-direction: column;
                }

                /* 5. Desktop Tweaks (Screens wider than 768px) */
                @media (min-width: 768px) {
                    .footer-container {
                        gap: 80px; /* Wider gap on desktop for better separation */
                    }
                    
                    .footer-icon {
                        font-size: 18px;
                    }
                }
            `}</style>

            <div style={{ 
                background: 'transparent', 
                padding: '20px 0', 
                color: '#fff', 
                textAlign: 'center', 
                width: '100%', 
                borderTop: '1px solid rgba(255,255,255,0.1)', 
                ...style 
            }}>
                {/* Title */}
                <Title level={5} style={{ 
                    color: '#fff', 
                    marginBottom: '15px', 
                    fontWeight: '600', 
                    fontSize: '16px',
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
                                color: '#fff', 
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '14px', /* Readable fixed size */
                                lineHeight: '1.2',
                                marginBottom: '4px'
                            }}>
                                Address:
                            </Text>
                            <Text style={{ 
                                color: 'rgba(255,255,255,0.7)', 
                                fontSize: '12px', /* Standard readable small text */
                                lineHeight: '1.4',
                            }}>
                                Kasturba Medical College<br />
                                Tiger Circle Road<br />
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
                                color: '#fff', 
                                fontFamily: "'Inter', sans-serif",
                                fontSize: '14px',
                                lineHeight: '1.2',
                                marginBottom: '4px'
                            }}>
                                Email ID:
                            </Text>
                            <Text style={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.7)', 
                                fontSize: '12px',
                                lineHeight: '1.4',
                                wordBreak: 'break-all' /* Prevents long emails from breaking layout */
                            }}>
                                dpr.mu@manipal.edu
                            </Text>
                            <Text style={{ 
                                display: 'block', 
                                color: 'rgba(255,255,255,0.7)',
                                fontSize: '12px',
                                lineHeight: '1.4',
                                wordBreak: 'break-all'
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