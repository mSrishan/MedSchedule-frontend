import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import aboutImg1 from '../assets/aboutImg1.jpg';
import aboutImg2 from '../assets/aboutImg2.jpg';
import aboutImg3 from '../assets/aboutImg3.jpg';
import aboutImg4 from '../assets/aboutImg4.jpg';
import aboutImg5 from '../assets/aboutImg5.jpg';
import Navbar from './Navbar';
import Footer from './Footer';

const primaryColor = "#ffffff"; // White
const accentColor = "#1976d2"; // Blue-400
const darkAccentColor = "#0d47a1"; // Blue-900

function About() {
    return (
        <>
            <Navbar />
            <Box sx={{ backgroundColor: primaryColor, color: darkAccentColor, py: 8, px: { xs: 2, sm: 8 } }}>
            
                {/* Header Section */}
                <Typography variant="h4" align="center" fontWeight="bold" sx={{ mb: 2, color: darkAccentColor }}>
                    About MedSchedule
                </Typography>
                <Typography variant="body1" align="center" sx={{ mb: 6, maxWidth: '700px', mx: 'auto', color: accentColor }}>
                    MedSchedule is dedicated to transforming healthcare by empowering medical professionals to streamline appointments and improve patient care.
                </Typography>

                {/* Image Section */}
                <Grid container spacing={2} sx={{ mb: 6 }}>
                    {[aboutImg1, aboutImg2, aboutImg3, aboutImg4].map((img, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <Card elevation={0}>
                                <CardMedia component="img" height="140" image={img} alt={`About Image ${index + 1}`} />
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {/* Main Text Section */}
                <Box textAlign="center" sx={{ maxWidth: '800px', mx: 'auto', mb: 6 }}>
                    <Typography variant="h5" fontWeight="bold" sx={{ mb: 3, color: darkAccentColor }}>
                        Enhancing Healthcare Through Innovation
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3, color: accentColor }}>
                        At MedSchedule, we believe in leveraging technology to ease the workload of healthcare providers and create seamless experiences for patients. Our platform is designed to support healthcare professionals in managing schedules effectively.
                    </Typography>
                    <Typography variant="body1" sx={{ color: darkAccentColor }}>
                        Join us as we continue to improve healthcare accessibility and efficiency, ensuring that quality care is just an appointment away.
                    </Typography>
                </Box>

                {/* Founder Section */}
                <Grid container spacing={4} sx={{ mb: 6 }}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ boxShadow: 'none', display: 'flex', alignItems: 'center', backgroundColor: primaryColor }}>
                            <CardMedia component="img" image={aboutImg5} alt="Founder" sx={{ width: '50%', borderRadius: '50%' }} />
                            <CardContent sx={{ color: darkAccentColor }}>
                                <Typography variant="body1" fontStyle="italic">"Advancing healthcare, one appointment at a time"</Typography>
                                <Typography variant="subtitle2">Dr. Sarah Thompson, Founder</Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: darkAccentColor }}>
                            Our Commitment to Healthcare Professionals
                        </Typography>
                        <Typography variant="body1" sx={{ color: accentColor }}>
                            We are dedicated to supporting healthcare professionals by providing a user-friendly and efficient scheduling platform. MedSchedule streamlines patient management, allowing providers to focus on what matters most: patient care.
                        </Typography>
                        <Typography variant="body1" fontStyle="italic" sx={{ mt: 2, color: darkAccentColor }}>
                            "Empowering healthcare professionals to serve patients with compassion and excellence."
                        </Typography>
                    </Grid>
                </Grid>

                {/* Footer Section */}
                <Box textAlign="center">
                    <Typography variant="h6" fontWeight="bold" sx={{ mb: 4, color: darkAccentColor }}>
                        Enhancing Patient Care Through Technology
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 6, maxWidth: '700px', mx: 'auto', color: accentColor }}>
                        MedSchedule provides tools that simplify the patient appointment process, enabling healthcare services to operate more effectively. We are proud to support the dedicated professionals who make a difference every day.
                    </Typography>

                    {/* Feature Icons */}
                    <Grid container spacing={4}>
                        {[
                            { title: 'Experienced Team', description: 'Our team brings extensive experience in healthcare technology to the table.' },
                            { title: 'Patient-Centric', description: 'We prioritize patient needs and strive to improve the care experience.' },
                            { title: 'Proven Results', description: 'Trusted by healthcare providers to manage appointments and patient flow effectively.' }
                        ].map((feature, index) => (
                            <Grid item xs={12} sm={4} key={index}>
                                <Box sx={{ textAlign: 'center' }}>
                                    <Box sx={{
                                        width: 60,
                                        height: 60,
                                        borderRadius: '50%',
                                        backgroundColor: accentColor,
                                        color: primaryColor,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mb: 2
                                    }}>
                                        <Typography variant="h6">{index + 1}</Typography>
                                    </Box>
                                    <Typography variant="subtitle1" fontWeight="bold" sx={{ color: darkAccentColor }}>{feature.title}</Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>{feature.description}</Typography>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Box>
            <Footer />
        </>
    );
}

export default About;
