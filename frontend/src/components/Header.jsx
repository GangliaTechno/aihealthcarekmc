import { useState } from 'react';
import { Typography, Dropdown, Button, theme } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import logo from '/favicon.png'; // Verify path

const { Title, Text } = Typography;
const { useToken } = theme;

const Header = () => {
    const { token } = useToken();
    const [open, setOpen] = useState(false);

    // --- BADGES CONTENT (Reused in Dropdown) ---
    // We render these in a vertical column for the mobile dropdown
    const mobileDropdownContent = (
        <div style={{ 
            padding: '15px', 
            background: '#001529', // Dark background to match theme
            borderRadius: '8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '15px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            minWidth: '200px'
        }}>
            {/* Badge 1 */}
            <div style={{ textAlign: 'center' }}>
                <Text style={{ display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '12px', lineHeight: '1' }}>
                    INSTITUTION OF
                </Text>
                <Text style={{ display: 'block', color: '#fff', fontWeight: '800', fontSize: '12px' }}>
                    EMINENCE
                </Text>
            </div>

            {/* Badge 2 */}
            <div style={{ 
                
                padding: '4px 8px', 
                textAlign: 'center'
            }}>
                <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800' }}>NAAC </Text>
                <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800' }}>A++</Text>
            </div>

            {/* Badge 3 */}
            <div style={{ textAlign: 'center' }}>
                <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800', marginRight: '4px' }}>NIRF</Text>
                <Text style={{ color: '#ff5722', fontSize: '12px', fontWeight: '800' }}>#3</Text>
            </div>
        </div>
    );

    return (
        <>
            <style>{`
                /* 1. Base Styles (Desktop) */
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 40px;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-align: left;
                    flex: 1; /* Allows text to take available space */
                }

                .header-right-desktop {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .mobile-menu-btn {
                    display: none; /* Hidden on Desktop */
                }

                .logo-img {
                    height: 70px;
                    width: auto;
                    flex-shrink: 0;
                }

                /* TEXT STYLES */
                .main-title {
                    font-size: 18px;
                    white-space: nowrap; /* Desktop: keep on one line */
                }

                /* 2. Mobile / Tablet Responsive Styles */
                @media (max-width: 992px) {
                    .header-container {
                        padding: 15px 15px;
                        align-items: flex-start; /* Align top so logo doesn't float weirdly if text wraps */
                    }

                    /* Hide Desktop Badges */
                    .header-right-desktop {
                        display: none;
                    }

                    /* Show Mobile Button */
                    .mobile-menu-btn {
                        display: block;
                        margin-top: 5px; /* Align with logo */
                    }

                    .header-left {
                        gap: 12px;
                        align-items: flex-start; /* Align logo with top line of text */
                    }

                    .logo-img {
                        height: 50px; /* Readable size, not too small */
                    }

                    /* KEY CHANGE: Text Flow */
                    .main-title {
                        font-size: 15px !important; /* Readable fixed size */
                        white-space: normal; /* <--- ALLOW WRAPPING */
                        line-height: 1.3;
                        margin-bottom: 4px !important;
                    }
                    
                    .sub-text {
                        font-size: 11px !important;
                        white-space: normal;
                        line-height: 1.3;
                    }
                }
            `}</style>

            <div className="header-container">
                {/* --- LEFT SECTION --- */}
                <div className="header-left">
                    <img src={logo} alt="MAHE Logo" className="logo-img" />
                    
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <Title className="main-title" level={4} style={{ 
                            color: '#fff', 
                            margin: 0, 
                            fontWeight: '800', 
                            textTransform: 'uppercase',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            Department of Artificial Intelligence in Healthcare
                        </Title>
                        
                        <Text className="sub-text" style={{ 
                            color: 'rgba(255,255,255,0.9)', 
                            display: 'block', 
                            fontSize: '14px', 
                            fontWeight: '600',
                        }}>
                            KASTURBA MEDICAL COLLEGE
                        </Text>
                        
                        <Text className="sub-text" style={{ 
                            color: 'rgba(255,255,255,0.6)', 
                            display: 'block', 
                            fontSize: '12px', 
                            fontStyle: 'italic',
                        }}>
                            (A constituent unit of MAHE, Manipal)
                        </Text>
                    </div>
                </div>

                {/* --- RIGHT SECTION (DESKTOP) --- */}
                <div className="header-right-desktop">
                    {/* Badge 1 */}
                    <div style={{ textAlign: 'center' }}>
                        <Text style={{ display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '12px', lineHeight: '1' }}>
                            INSTITUTION OF
                        </Text>
                        <Text style={{ display: 'block', color: '#fff', fontWeight: '800', fontSize: '12px', letterSpacing: '0.5px' }}>
                            EMINENCE
                        </Text>
                    </div>

                    {/* Badge 2 */}
                    <div style={{ 
                        
                        padding: '2px 8px',
                        textAlign: 'center'
                    }}>
                        <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800' }}>NAAC </Text>
                        <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800' }}>A++</Text>
                    </div>

                    {/* Badge 3 */}
                    <div style={{ textAlign: 'right' }}>
                        <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '800', marginRight: '4px' }}>NIRF</Text>
                        <Text style={{ color: '#ff5722', fontSize: '12px', fontWeight: '800' }}>#3</Text>
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
                            icon={<MoreOutlined style={{ fontSize: '24px', color: '#fff' }} />} 
                        />
                    </Dropdown>
                </div>
            </div>
        </>
    );
};

export default Header;