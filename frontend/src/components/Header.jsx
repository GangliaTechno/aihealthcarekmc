import { Typography } from 'antd';
// Make sure to import your actual logo image here
import logo from '/favicon.png'; // Example path, replace with yours if different

const { Title, Text } = Typography;

const Header = () => {
    return (
        <>
            {/* --- RESPONSIVE HEADER STYLES --- */}
            <style>{`
                /* Default Desktop Styles */
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 50px;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    text-align: left;
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 30px;
                }

                .logo-img {
                    height: 80px; /* Adjust based on your logo aspect ratio */
                    width: auto;
                }

                /* Mobile/Tablet Styles (Triggered when screen is smaller than 992px) */
                @media (max-width: 992px) {
                    .header-container {
                        flex-direction: column; /* Stack items vertically */
                        gap: 25px;
                        padding: 20px;
                    }

                    .header-left {
                        flex-direction: column; /* Stack Logo and Text */
                        text-align: center;
                        gap: 15px;
                    }

                    .header-right {
                        justify-content: center;
                        flex-wrap: wrap; /* Allow badges to wrap on very small screens */
                        gap: 20px;
                    }

                    .logo-img {
                        height: 70px; /* Slightly smaller logo on mobile */
                    }
                }
            `}</style>

            <div className="header-container">
                {/* --- LEFT SECTION: Logo & Department Name --- */}
                <div className="header-left">
                    {/* Replace src with your actual logo import */}
                    <img 
                        src={logo} 
                        alt="MAHE Logo" 
                        className="logo-img"
                    />
                    
                    <div>
                        <Title level={4} style={{ 
                            color: '#fff', 
                            margin: 0, 
                            fontWeight: '800', 
                            textTransform: 'uppercase',
                            fontSize: 'clamp(14px, 2vw, 18px)', // Responsive Font Size
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: '1.2'
                        }}>
                            Department of Artificial Intelligence in Healthcare
                        </Title>
                        
                        <Text style={{ 
                            color: 'rgba(255,255,255,0.9)', 
                            display: 'block', 
                            fontSize: 'clamp(12px, 1.5vw, 14px)', 
                            marginTop: '4px', 
                            fontWeight: '600' 
                        }}>
                            KASTURBA MEDICAL COLLEGE
                        </Text>
                        
                        <Text style={{ 
                            color: 'rgba(255,255,255,0.6)', 
                            display: 'block', 
                            fontSize: '12px', 
                            marginTop: '2px',
                            fontStyle: 'italic'
                        }}>
                            (A constituent unit of MAHE, Manipal)
                        </Text>
                    </div>
                </div>

                {/* --- RIGHT SECTION: Badges (NIRF, NAAC, Eminence) --- */}
                <div className="header-right">
                    {/* Badge 1: Institution of Eminence */}
                    <div style={{ textAlign: 'center' }}>
                        <Text style={{ 
                            display: 'block', color: '#ff5722', fontWeight: '800', fontSize: '12px', lineHeight: '1' 
                        }}>
                            INSTITUTION OF
                        </Text>
                        <Text style={{ 
                            display: 'block', color: '#fff', fontWeight: '700', fontSize: '14px', letterSpacing: '1px' 
                        }}>
                            EMINENCE
                        </Text>
                    </div>

                    {/* Badge 2: NAAC */}
                    <div style={{ 
                        border: '1px solid rgba(255,255,255,0.3)', 
                        padding: '5px 10px', 
                        borderRadius: '50px',
                        textAlign: 'center'
                    }}>
                        <Text style={{ color: '#fff', fontSize: '12px', fontWeight: '600' }}>NAAC </Text>
                        <Text style={{ color: '#fff', fontSize: '14px', fontWeight: '800' }}>A++</Text>
                    </div>

                    {/* Badge 3: NIRF */}
                    <div style={{ textAlign: 'right' }}>
                        <Text style={{ color: '#fff', fontSize: '14px', fontWeight: '800', marginRight: '5px' }}>NIRF</Text>
                        <Text style={{ color: '#ff5722', fontSize: '18px', fontWeight: '900' }}>#3</Text>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;