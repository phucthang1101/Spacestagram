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
                        {/* <img className={styles.astronaut_img} src="https://images.vexels.com/media/users/3/152639/isolated/preview/506b575739e90613428cdb399175e2c8-space-astronaut-cartoon-by-vexels.png" /> */}
                        <img className={styles.astronaut_img} src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b1ceee5-9458-4434-80bc-fc5d83a2ea88/de5bxv5-7db7c9c1-8ae8-4f02-bbce-9b9e529989cd.png/v1/fill/w_678,h_799,strp/among_us_character__orange_book_by_unitedworldmedia_de5bxv5-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9Nzk5IiwicGF0aCI6IlwvZlwvNGIxY2VlZTUtOTQ1OC00NDM0LTgwYmMtZmM1ZDgzYTJlYTg4XC9kZTVieHY1LTdkYjdjOWMxLThhZTgtNGYwMi1iYmNlLTliOWU1Mjk5ODljZC5wbmciLCJ3aWR0aCI6Ijw9Njc4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Kw7Y78FEt_ysvSGDZr7QjmQC21yn-qwcDlah0WoJpPc"/>
                    </div>

                    <Container maxWidth="lg">
                        <Grid container spacing={4}>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                style={{ display: 'flex' }}
                            >
                                <div className={styles.cover_img_text}>
                                    <h2 className={styles.cover_img_title}>Explore the <br /> Universe</h2>
                                    <a href="#gallery-post" className={styles.smooth_scroll}>Explore <i className="fas fa-rocket"></i> </a>
                                </div>
                            </Grid>
                            <Grid
                                item
                                xs={6}
                                sm={6}
                                style={{ display: 'flex' }}
                            >
                                {/* <img className={styles.cover_img_earth} src="https://komeegbedi.github.io/spacestagram/assets/moon.png" alt="Hero Moon" /> */}
                            </Grid>
                        </Grid>
                    </Container>
                    {/* <div className={styles.cover_img_container}>





                    </div> */}
                </div>
            </section>
           
        </>
    )
}

export default CoverImage
