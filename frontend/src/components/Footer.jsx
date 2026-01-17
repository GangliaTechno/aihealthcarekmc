import { Typography } from 'antd';
import { EnvironmentOutlined, MailOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const Footer = ({ style }) => {
    return (
        <div style={{ 
            background: 'transparent', 
            padding: '5px 0', 
            color: '#fff', 
            textAlign: 'center', 
            width: '100%', 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            ...style 
        }}>
            <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
                <Title level={5} style={{ 
                    color: '#fff', 
                    marginBottom: '10px', 
                    fontWeight: '600', 
                    fontSize: '16px', 
                    fontFamily: "'Inter', sans-serif"
                }}>
                    Get in touch with us
                </Title>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'center', 
                    /* --- RESPONSIVE GAP --- 
                       Min: 40px (Mobile) | Preferred: 10% of screen | Max: 100px (Desktop)
                    */
                    gap: 'clamp(40px, 10vw, 100px)', 
                    alignItems: 'flex-start',
                    width: '100%' 
                }}>
                    {/* Address Section */}
                    <div style={{ display: 'flex', textAlign: 'left', gap: '15px', alignItems: 'flex-start' }}>
                        <EnvironmentOutlined style={{ fontSize: '15px', color: '#ff5722', marginTop: '6px' }} />
                        <div>
                            <Text strong style={{ 
                                display: 'block', fontSize: '15px', lineHeight: '1', 
                                color: '#fff', marginBottom: '5px', fontFamily: "'Inter', sans-serif" 
                            }}>
                                Address:
                            </Text>
                            <Text style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px', lineHeight: '1.4', display: 'block' }}>
                                Kasturba Medical College<br />
                                Tiger Circle Road, Madhav Nagar<br />
                                Manipal – 576104
                            </Text>
                        </div>
                    </div>

                    {/* Email Section */}
                    <div style={{ display: 'flex', textAlign: 'left', gap: '15px', alignItems: 'flex-start' }}>
                        <MailOutlined style={{ fontSize: '15px', color: '#ff5722', marginTop: '6px' }} />
                        <div>
                            <Text strong style={{ 
                                display: 'block', fontSize: '15px', lineHeight: '1', 
                                color: '#fff', marginBottom: '5px', fontFamily: "'Inter', sans-serif" 
                            }}>
                                Email ID:
                            </Text>
                            <Text style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '14px', marginBottom: '2px' }}>
                                dpr.mu@manipal.edu
                            </Text>
                            <Text style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                                aihealthcare.kmc@manipal.edu
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;