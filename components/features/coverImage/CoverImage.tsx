import React from 'react';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import styles from './CoverImage.module.css';
import ParticlesCustom from './particles';

const CoverImage = () => {
    return (
        <>
        
            <section className={styles.cover_img}>
                <ParticlesCustom />
                <div className={styles.cover_img_section}>
                    <div className={styles.image_wrapper}>
                        <img className={styles.astronaut_img} src='/static/images/among_us_character.png'/>
                    </div>

                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid
                                item
                                xs={12}
                                sm={6}
                                style={{ display: 'flex' }}
                            >
                                <div className={styles.cover_img_text}>
                                    <h2 className={styles.cover_img_title}>Explore the <br /> Universe</h2>
                                    <a href="#gallery-post" className={styles.smooth_scroll}>Explore <i className="fa fa-rocket"></i> </a>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                style={{ display: 'flex' }}
                            >
                               
                            </Grid>
                        </Grid>
                    </Container>
                    
                </div>
            </section>
           
        </>
    )
}

export default CoverImage
