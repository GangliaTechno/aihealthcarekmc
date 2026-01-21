import { useState } from 'react';
import { Typography, Dropdown, Button, theme } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import logo from '/favicon.png'; 

const { Title, Text } = Typography;
const { useToken } = theme;

const Header = () => {
    const { token } = useToken();
    const [open, setOpen] = useState(false);

    // --- BADGES CONTENT (Mobile - Column Layout) ---
    const mobileDropdownContent = (
        <div style={{ 
            padding: '20px', 
            background: '#D3D3D3', 
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column', // Columnwise as requested
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            minWidth: '200px'
        }}>
             {/* Badge 1 */}
             <div style={{ textAlign: 'center' }}>
                <Text style={{ display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '15px', fontFamily: "'Inter', sans-serif", lineHeight: '1' }}>
                    INSTITUTION OF
                </Text>
                <Text style={{ display: 'block', color: '#000', fontWeight: '800', fontSize: '15px', fontFamily: "'Inter', sans-serif", lineHeight: '1' }}>
                    EMINENCE
                </Text>
            </div>
            
            <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
            
            {/* Badge 2 */}
            <div style={{ textAlign: 'center' }}>
                <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>NAAC </Text>
                <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>A++</Text>
            </div>
            
            <div style={{ width: '40px', height: '1px', background: 'rgba(0,0,0,0.1)' }}></div>
            
            {/* Badge 3 */}
            <div style={{ textAlign: 'center' }}>
                <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', marginRight: '4px', fontFamily: "'Inter', sans-serif" }}>NIRF</Text>
                <Text style={{ color: '#ff5722', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>#3</Text>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                /* 1. Base Styles */
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 5px 20px; 
                    width: 100%;
                    max-width: 1800;
                    margin: 0 auto;
                    flex-wrap: nowrap; /* <--- CRITICAL: Prevents stacking */
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    text-align: left;
                    flex: 1;
                    min-width: 0; /* Allows text to shrink below implicit width */
                }

                .header-right-desktop {
                    display: flex;
                    align-items: center;
                    height: 100%;
                    gap: 40px;
                    flex-shrink: 0;
                }

                .mobile-menu-btn { 
                    display: none; 
                    flex-shrink: 0;
                    margin-left: 10px;
                }

                .logo-img {
                    height: 65px; 
                    width: auto;
                    flex-shrink: 0; /* Prevents logo from squishing */
                }

                /* TEXT STYLES */
                .main-title {
                    white-space: nowrap; /* Keeps title on one line */
                    color: #333 !important;
                    margin: 0 !important;
                    line-height: 1.2;
                }
                
                .sub-text {
                    white-space: nowrap; /* Keeps subtitle on one line */
                }

                /* 2. Responsive Styles */
                @media (max-width: 992px) {
                    .header-container {
                        padding: 5px 15px; /* Tighter padding on mobile */
                    }

                    /* Hide Desktop Badges */
                    .header-right-desktop { display: none; }
                    
                    /* Show Menu Button */
                    .mobile-menu-btn { display: block; }

                    .header-left {
                        gap: 8px; /* Reduce gap between logo and text */
                    }

                    /* ZOOM OUT EFFECT: Scales down Logo */
                    .logo-img { 
                        height: 48px; 
                    }

                    /* ZOOM OUT EFFECT: Fluid Typography for Text 
                       clamp(min, preferred, max) scales text smoothly based on viewport width (vw)
                    */
                    .main-title {
                        font-size: clamp(11px, 3.5vw, 16px) !important;
                    }

                    .sub-text {
                        font-size: clamp(9px, 3vw, 12px) !important;
                    }
                }
            `}</style>

            <div style={{ width: '100%', background: '#D3D3D3', borderBottom: '1px solid #e0e0e0' }}>
                <div className="header-container">
                    {/* --- LEFT SECTION --- */}
                    <div className="header-left">
                        <img src={logo} alt="MAHE Logo" className="logo-img" />
                        
                        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <Title className="main-title" level={4} style={{ 
                                color: '#1a1a1a', 
                                fontWeight: '800', 
                                textTransform: 'uppercase',
                                fontFamily: "'Inter', sans-serif",
                            }}>
                                Department of AI in Healthcare
                            </Title>
                            
                            <Text className="sub-text" style={{ 
                                color: '#1a1a1a', 
                                display: 'block', 
                                fontWeight: '500',
                                fontFamily: "'Inter', sans-serif",
                            }}>
                                KASTURBA MEDICAL COLLEGE
                            </Text>
                            
                            <Text className="sub-text" style={{ 
                                color: '#666', 
                                display: 'block', 
                                fontStyle: 'italic',
                            }}>
                                (A constituent unit of MAHE, Manipal)
                            </Text>
                        </div>
                    </div>

                    {/* --- RIGHT SECTION (DESKTOP) --- */}
                    <div className="header-right-desktop">
                        <div style={{ textAlign: 'center' }}>
                            <Text style={{ display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '15px', lineHeight: '1', fontFamily: "'Inter', sans-serif" }}>INSTITUTION OF</Text>
                            <Text style={{ display: 'block', color: '#000', fontWeight: '800', fontSize: '15px', lineHeight: '1', fontFamily: "'Inter', sans-serif" }}>EMINENCE</Text>
                        </div>
                        <div style={{ textAlign: 'center' }}>
                            <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>NAAC </Text>
                            <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>A++</Text>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                            <Text style={{ color: '#000', fontSize: '15px', fontWeight: '800', marginRight: '4px', fontFamily: "'Inter', sans-serif" }}>NIRF</Text>
                            <Text style={{ color: '#ff5722', fontSize: '15px', fontWeight: '800', fontFamily: "'Inter', sans-serif" }}>#3</Text>
                        </div>
                    </div>

                    {/* --- RIGHT SECTION (MOBILE MENU) --- */}
                    <div className="mobile-menu-btn">
                        <Dropdown 
                            dropdownRender={() => mobileDropdownContent} 
                            trigger={['click']}
                            placement="bottomRight"
                            onOpenChange={(flag) => setOpen(flag)}
                        >
                            <Button 
                                type="text" 
                                icon={<MoreOutlined style={{ fontSize: '24px', color: '#333' }} />} 
                            />
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;