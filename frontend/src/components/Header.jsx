import { useState } from 'react';
import { Typography, Dropdown, Button, theme } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
// ** IMPORTANT: Replace this import with your new image file path **
import newLogoImg from '/favicon.png'; // <-- PLACEHOLDER path

const { Text } = Typography;
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
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center',
            gap: '15px', 
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            minWidth: '200px'
        }}>
             {/* Badge 1 */}
             <div style={{ textAlign: 'center' }}>
                <Text style={{ display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '15px', fontFamily: "'EB Garamond', serif", lineHeight: '1' }}>
                    INSTITUTION OF
                </Text>
                <Text style={{ display: 'block', color: '#000', fontWeight: '800', fontSize: '15px', fontFamily: "'EB Garamond', serif", lineHeight: '1' }}>
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
            {/* IMPORT EB GARAMOND FONT */}
            <style>
                @import url('https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;500;600&display=swap');
            </style>

            <style>{`
                /* 1. Base Styles */
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    /* CHANGED: Increased vertical padding to 14px (+2pts) */
                    padding: 14px 80px; 
                    width: 100%;
                    max-width: 1800px;
                    margin: 0 auto;
                    flex-wrap: nowrap; 
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 0; 
                    text-align: left;
                    flex: 1;
                    min-width: 0; 
                }

                /* NEW LEFT SECTION STYLES */
                .new-logo-img {
                    /* CHANGED: Increased height to 75px so internal text is visible */
                    height: 75px; 
                    width: auto;
                    flex-shrink: 0;
                }

                .header-separator {
                    /* CHANGED: Matched height to new logo size */
                    height: 65px; 
                    width: 1px;
                    background-color: rgba(0,0,0,0.2); 
                    margin: 0 25px; 
                    flex-shrink: 0;
                }

                .header-title-container {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                }

                /* EB Garamond Typography Styles */
                .garamond-title-primary {
                    font-family: 'EB Garamond', serif;
                    font-size: 22px;
                    font-weight: 500; 
                    color: #000;
                    line-height: 1.1;
                    margin-bottom: 2px; 
                }
                
                .garamond-title-secondary {
                    font-family: 'EB Garamond', serif;
                    font-size: 16px;
                    font-weight: 400; 
                    color: #333;
                    line-height: 1.1;
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


                /* 2. Responsive Styles */
                @media (max-width: 992px) {
                    .header-container {
                        /* Maintain increased vertical padding on mobile */
                        padding: 14px 20px; 
                    }

                    .header-right-desktop { display: none; }
                    .mobile-menu-btn { display: block; }
                    
                    /* Reduce sizes for mobile */
                    .new-logo-img { height: 50px; }
                    .header-separator { height: 45px; margin: 0 15px; }
                    
                    /* Fluid typography for mobile */
                    .garamond-title-primary { font-size: clamp(16px, 4vw, 20px) !important; }
                    .garamond-title-secondary { font-size: clamp(12px, 3vw, 15px) !important; }
                }
            `}</style>

            <div style={{ width: '100%', background: '#D3D3D3', borderBottom: '1px solid #c0c0c0' }}>
                <div className="header-container">
                    {/* --- NEW LEFT SECTION --- */}
                    <div className="header-left">
                        {/* 1. The Image */}
                        <img src={newLogoImg} alt="KMC Logo" className="new-logo-img" />
                        
                        {/* 2. The Separator */}
                        <div className="header-separator"></div>
                        
                        {/* 3. The Stacked Text (EB Garamond) */}
                        <div className="header-title-container">
                            <Text strong className="garamond-title-primary">
                                Dept of AI in Healthcare
                            </Text>
                            <Text className="garamond-title-secondary">
                                Kasturba Medical College, Manipal
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