import React, { useEffect, useRef, useState } from 'react'
import styles from './SpaceMedia.module.css';
import Button from '@mui/material/Button';
import { SpaceCard } from '../../models/SpaceCard';
import { Grid } from '@mui/material';
import SpaceModal from '../modal/SpaceModal';
import { generateClones, trimTextBaseOnScreenSize } from '../../../utils/helper';

interface Props {
    spaceCard: SpaceCard
}

const SpaceMedia = ({ spaceCard }: Props) => {
    const [likeBtnActive, setLikeBtnActive] = useState([false, false]);
    const [isCopied, setIsCopied] = useState(false);

    // modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // seperate date, month, year
    const myDate = new Date(spaceCard.date);
    const date = myDate.getDate();
    const month = myDate.toLocaleString('default', { month: 'long' });
    const year = myDate.getFullYear();


    // load liked status from localStorage
    useEffect(() => {
        let retrievedData = localStorage.getItem(spaceCard.title);
        if (retrievedData)
            setLikeBtnActive(JSON.parse(retrievedData))
    }, [])



    const copyLinkToClipboard = () => {
        navigator.clipboard
            .writeText(spaceCard.url)
            .then(() => {
                setIsCopied(true);

                setTimeout(() => {
                    setIsCopied(false);
                }, 1000);
            })
            .catch((err) => console.log(err))

    }


    const loadCardsFromLS = (): Record<string, SpaceCard> => {
        const stored = localStorage.getItem('cards');
        return stored ? JSON.parse(stored) : {};
    };

    const saveCardsToLS = (posts: Record<string, SpaceCard>) => {
        localStorage.setItem('cards', JSON.stringify(posts));
    };

    const likeBtnRef = useRef<HTMLAnchorElement>(null);
    const [animation, setAnimation] = useState(false);

    const handleLikeBtnClicked = (type: string) => {

        const cards = loadCardsFromLS();
        if (!likeBtnActive[1] && !likeBtnActive[0]) {
            // not in LocalStorage, so we add it
            saveCardsToLS({ ...cards, [spaceCard.title]: spaceCard })
        }


        if (type === 'clap') {
            localStorage.setItem(spaceCard.title, JSON.stringify([likeBtnActive[0], !likeBtnActive[1]]));

            if (likeBtnActive[1] && !likeBtnActive[0]) {
                //if unlike, then take it out
                if (spaceCard.title in cards) {
                    delete cards[spaceCard.title]
                }
                saveCardsToLS({ ...cards })
            }

            setLikeBtnActive([likeBtnActive[0], !likeBtnActive[1]]);
        }
        else {
            localStorage.setItem(spaceCard.title, JSON.stringify([!likeBtnActive[0], likeBtnActive[1]]));

            if (!likeBtnActive[1] && likeBtnActive[0]) {
                //if unlike, then take it out
                if (spaceCard.title in cards) {
                    delete cards[spaceCard.title]
                }
                saveCardsToLS({ ...cards })
            }
            let button = likeBtnRef.current!;
            setAnimation(true);
            generateClones(button);


            setLikeBtnActive([!likeBtnActive[0], likeBtnActive[1]]);
            setTimeout(() => setAnimation(false), 600);
        }

    }


    return (
        <>
            <div className={styles.fond}>
                <Grid container className={styles.space_card}>
                    <Grid item xs={12} md={6} className={styles.space_card_thumbnail}>
                        {spaceCard.media_type === 'image' ?
                            (
                                <img
                                    className={styles.space_card_img_left}
                                    src={spaceCard.hdurl ? spaceCard.hdurl : spaceCard.url}
                                    alt={spaceCard.title} />
                            ) : (
                                <iframe
                                    className={styles.space_card_vid_left}
                                    src={spaceCard.hdurl ? spaceCard.hdurl : spaceCard.url}
                                    title={spaceCard.title}></iframe>
                            )
                        }

                    </Grid>
                    <Grid item xs={12} md={4} className={styles.space_card_right}>
                        <h1 className={styles.space_card_title}> {spaceCard.title}</h1>
                        <div className={styles.space_card_author}>
                            <img src="/static/images/random_man.jpg" />
                            <h2>
                                {spaceCard.copyright ? spaceCard.copyright : "Anonymous"}
                            </h2>
                        </div>
                        <div className={styles.separator}></div>

                        <p className={styles.space_card_explanation}>
                            {trimTextBaseOnScreenSize(spaceCard.explanation)}
                        </p>


                    </Grid>
                    <Grid container className={styles.space_card_utils}>
                        <Grid item xs={8} md={3} className={styles.space_card_date_month}>
                            <h5 className={styles.space_card_date}>{date}</h5>
                            <h6 className={styles.space_card_month}>{month}</h6>
                        </Grid>
                        <Grid item xs={12} md={5} order={{ xs: 3, md: 2 }}>
                            <ul className={styles.space_card_ul}>
                                <li className={styles.space_card_list_item}>
                                    <div>
                                        <a
                                            ref={likeBtnRef}
                                            className={`${styles.like_btn_new} ${likeBtnActive[0] ? styles.like_btn_new_active : ''} ${animation ? styles.like_btn_new_animated : ''}`}
                                            onClick={() => handleLikeBtnClicked('like')}
                                            id="like-btn-new"
                                        >
                                            <svg viewBox="0 0 1792 1792" id="svg_like_btn">
                                                <path d="M320 1344q0-26-19-45t-45-19q-27 0-45.5 19t-18.5 45q0 27 18.5 45.5t45.5 18.5q26 0 45-18.5t19-45.5zm160-512v640q0 26-19 45t-45 19h-288q-26 0-45-19t-19-45v-640q0-26 19-45t45-19h288q26 0 45 19t19 45zm1184 0q0 86-55 149 15 44 15 76 3 76-43 137 17 56 0 117-15 57-54 94 9 112-49 181-64 76-197 78h-129q-66 0-144-15.5t-121.5-29-120.5-39.5q-123-43-158-44-26-1-45-19.5t-19-44.5v-641q0-25 18-43.5t43-20.5q24-2 76-59t101-121q68-87 101-120 18-18 31-48t17.5-48.5 13.5-60.5q7-39 12.5-61t19.5-52 34-50q19-19 45-19 46 0 82.5 10.5t60 26 40 40.5 24 45 12 50 5 45 .5 39q0 38-9.5 76t-19 60-27.5 56q-3 6-10 18t-11 22-8 24h277q78 0 135 57t57 135z" />
                                            </svg>
                                        </a>
                                    </div>
                                </li>
                                <li className={styles.space_card_list_item}>
                                    <div>
                                        <input
                                            className={styles.input_heart_input}
                                            type="checkbox"
                                            id={`like_${spaceCard.title}`}
                                            onChange={() => handleLikeBtnClicked('clap')}
                                            checked={likeBtnActive[1] ? true : false}
                                        />
                                        <label
                                            className={styles.input_heart_label}
                                            htmlFor={`like_${spaceCard.title}`}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                                            </svg>
                                        </label>

                                    </div>

                                </li>
                                <li className={styles.space_card_list_item}>
                                    <Button className={styles.view_modal_btn} onClick={handleOpen}>
                                        <i className="fa fa-eye fa-2x"></i>
                                    </Button>
                                </li>
                                <li className={styles.space_card_list_item}>
                                    <div className={styles.share_btn}>
                                        <input
                                            className={styles.share_btn_input}
                                            type="checkbox"
                                            id="checkbox"
                                        />
                                        <label
                                            className={styles.share_btn_toggler}
                                            htmlFor="checkbox">
                                            <span
                                                className={styles.share_btn_icon}></span>
                                        </label>

                                        <ul
                                            className={styles.share_btn_options} data-title="">
                                            <li>Share photo via</li>
                                            <li
                                                onClick={() => copyLinkToClipboard()}
                                            >{isCopied ? "Copied" : "Copy link"}</li>
                                        </ul>
                                    </div>
                                </li>

                            </ul>
                        </Grid>
                        <Grid item xs={4} md={4} order={{ xs: 2, md: 3 }} className={styles.space_card_year_wrapper}>
                            <h5 className={styles.space_card_year}>{year}</h5>
                        </Grid>
                    </Grid>
                </Grid>
            </div>

            <SpaceModal
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
                spaceCard={spaceCard}
            />


        </>
    )
}

export default SpaceMedia;
{/*  <>
            <div className={styles.fond}>
                <Grid container className={styles.space_card}>
                    <div className={styles.space_card_thumbnail}>
                        <img className={styles.space_card_img_left} src={spaceCard.hdurl ? spaceCard.hdurl : spaceCard.url} />
                    </div>
                    <div className={styles.space_card_right}>
                        <h1 className={styles.space_card_title}> {spaceCard.title}</h1>
                        <div className={styles.space_card_author}>
                            <img src="https://randomuser.me/api/portraits/men/95.jpg" />
                            <h2>
                                {spaceCard.copyright ? spaceCard.copyright : "Anonymous"}
                            </h2>
                        </div>
                        <div className={styles.separator}></div>
                        {spaceCard.explanation.length > MAX_LENGTH ?
                            renderExplanation()
                            : (
                                <p className={styles.space_card_explanation}>{spaceCard.explanation}
                                </p>
                            )}

                    </div>
                    <Grid container>
                        <Grid item md={2}>
                            {renderDateTime()}
                        </Grid>
                        <Grid item md={4}>
                            <ul className={styles.space_card_ul}>
                                {/* <li><i className="fa fa-eye fa-2x"></i></li> 
                                <li className={styles.space_card_list_item}>
                                    <div>
                                        {/* <LikeButton
                                            spaceCard={spaceCard}
                                            buttonClassName={styles.like_btn}
                                            buttonClassNameActive={styles.like_btn_active}
                                        /> 
                                        <span
                                            className={`${styles.like_btn} ${likeBtnActive[0] ? styles.like_btn_active : ''}`}
                                            onClick={() => handleLikeBtnClicked('like')}>
                                        </span>
                                    </div>
                                </li>
                                <li className={styles.space_card_list_item}>
                                    <div>
                                        {/* <LikeButton
                                            spaceCard={spaceCard}
                                            buttonClassName={styles.clap_btn}
                                            buttonClassNameActive={styles.clap_btn_active}
                                        /> 
                                        <span
                                            className={`${styles.clap_btn} ${likeBtnActive[1] ? styles.clap_btn_active : ''}`}
                                            onClick={() => handleLikeBtnClicked('clap')}>
                                        </span>

                                    </div>

                                </li>
                                <li className={styles.space_card_list_item}>
                                    <div className={styles.share_btn}>
                                        <input
                                            className={styles.share_btn_input}
                                            type="checkbox"
                                            id="checkbox"
                                        />
                                        <label
                                            className={styles.share_btn_toggler}
                                            htmlFor="checkbox">
                                            <span
                                                className={styles.share_btn_icon}></span>
                                        </label>

                                        <ul
                                            className={styles.share_btn_options} data-title="">
                                            <li>Share photo via</li>
                                            <li
                                                onClick={() => copyLinkToClipboard()}
                                            >{isCopied ? "Copied" : "Copy link"}</li>
                                        </ul>
                                    </div>
                                </li>
                                <li className={styles.space_card_list_item}>
                                    <Button className={styles.view_modal_btn} onClick={handleOpen}>
                                        <i className="fa fa-eye fa-2x"></i>
                                    </Button>
                                </li>
                                {/* <li><i className="fa fa-envelope-o fa-2x"></i></li>
                        <li><i className="fa fa-share-alt fa-2x"></i></li> 
                            </ul>
                        </Grid>
                        <Grid item md={6}>{renderYear()}</Grid>
                    </Grid>
                </Grid>
            </div>
            <SpaceModal
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </>*/}