import { Typography } from 'antd';
import logo from '/favicon.png'; // Make sure this path matches your project

const { Title, Text } = Typography;

const Header = () => {
    return (
        <>
            <style>{`
                /* 1. Base Desktop Styles */
                .header-container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 15px 40px;
                    width: 100%;
                    max-width: 1400px;
                    margin: 0 auto;
                    /* Ensures items try to stay on one line */
                    white-space: nowrap; 
                }

                .header-left {
                    display: flex;
                    align-items: center;
                    gap: 15px;
                    text-align: left;
                }

                .header-right {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                }

                .logo-img {
                    height: 70px;
                    width: auto;
                    transition: height 0.3s ease;
                }

                /* 2. Responsive Scaling (Mobile/Tablet) */
                @media (max-width: 992px) {
                    .header-container {
                        padding: 10px 10px; /* Tight padding */
                        gap: 10px;
                    }

                    .header-left {
                        gap: 8px; 
                        /* Allow the long title to shrink/wrap internally if absolutely needed, 
                           but keep the Logo+Text block side-by-side with badges */
                        flex-shrink: 1; 
                        min-width: 0; 
                    }

                    .header-right {
                        gap: 8px;
                        flex-shrink: 0; /* Prevent badges from being crushed */
                    }

                    .logo-img {
                        height: 35px; /* Shrink logo */
                    }
                }
            `}</style>

            <div className="header-container">
                {/* --- LEFT SECTION --- */}
                <div className="header-left">
                    <img 
                        src={logo} 
                        alt="MAHE Logo" 
                        className="logo-img"
                    />
                    
                    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        {/* Using clamp() ensures the text scales smoothly 
                           from 8px (mobile) to 18px (desktop) 
                        */}
                        <Title level={4} style={{ 
                            color: '#fff', 
                            margin: 0, 
                            fontWeight: '800', 
                            textTransform: 'uppercase',
                            fontSize: 'clamp(8px, 1.6vw, 18px)', /* <--- THE KEY FIX */
                            fontFamily: "'Inter', sans-serif",
                            lineHeight: '1.2',
                            maxWidth: '400px'
                        }}>
                            Department of Artificial Intelligence in Healthcare
                        </Title>
                        
                        <Text style={{ 
                            color: 'rgba(255,255,255,0.9)', 
                            display: 'block', 
                            fontSize: 'clamp(7px, 1.2vw, 14px)', /* <--- SCALES DOWN */
                            marginTop: '2px', 
                            fontWeight: '600',
                            lineHeight: '1.1'
                        }}>
                            KASTURBA MEDICAL COLLEGE
                        </Text>
                        
                        <Text style={{ 
                            color: 'rgba(255,255,255,0.6)', 
                            display: 'block', 
                            fontSize: 'clamp(6px, 1vw, 12px)', /* <--- SCALES DOWN */
                            marginTop: '0px',
                            fontStyle: 'italic',
                            lineHeight: '1.1'
                        }}>
                            (A constituent unit of MAHE, Manipal)
                        </Text>
                    </div>
                </div>

                {/* --- RIGHT SECTION --- */}
                <div className="header-right">
                    {/* Badge 1: Institution of Eminence */}
                    <div style={{ textAlign: 'center' }}>
                        <Text style={{ 
                            display: 'block', 
                            color: '#ff5722', 
                            fontWeight: '800', 
                            fontSize: 'clamp(6px, 0.9vw, 12px)', /* Scales */
                            lineHeight: '1' 
                        }}>
                            INSTITUTION OF
                        </Text>
                        <Text style={{ 
                            display: 'block', 
                            color: '#fff', 
                            fontWeight: '700', 
                            fontSize: 'clamp(7px, 1.1vw, 14px)', /* Scales */
                            letterSpacing: '0.5px' 
                        }}>
                            EMINENCE
                        </Text>
                    </div>

                    {/* Badge 2: NAAC */}
                    <div style={{ 
                        border: '1px solid rgba(255,255,255,0.3)', 
                        padding: '2px 8px', 
                        borderRadius: '50px',
                        textAlign: 'center'
                    }}>
                        <Text style={{ 
                            color: '#fff', 
                            fontSize: 'clamp(7px, 1vw, 12px)', 
                            fontWeight: '600' 
                        }}>NAAC </Text>
                        <Text style={{ 
                            color: '#fff', 
                            fontSize: 'clamp(8px, 1.2vw, 14px)', 
                            fontWeight: '800' 
                        }}>A++</Text>
                    </div>

                    {/* Badge 3: NIRF */}
                    <div style={{ textAlign: 'right' }}>
                        <Text style={{ 
                            color: '#fff', 
                            fontSize: 'clamp(8px, 1.2vw, 14px)', 
                            fontWeight: '800', 
                            marginRight: '4px' 
                        }}>NIRF</Text>
                        <Text style={{ 
                            color: '#ff5722', 
                            fontSize: 'clamp(10px, 1.5vw, 18px)', 
                            fontWeight: '900' 
                        }}>#3</Text>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;