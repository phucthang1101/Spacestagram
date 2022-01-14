import React, { useEffect, useState } from 'react'
import styles from './SpaceMedia.module.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { SpaceCard } from '../../models/SpaceCard';
import { Grid } from '@mui/material';
import SpaceModal from '../modal/SpaceModal';
import LikeButton from '../likeButton/LikeButton';

interface Props {
    spaceCard: SpaceCard
}
const MAX_LENGTH = 350;

const SpaceMedia = ({ spaceCard }: Props) => {
    const [likeBtnActive, setLikeBtnActive] = useState([false, false]);
    //const [clapBtnActive, setClapBtnActive] = useState(false);
    const myDate = new Date(spaceCard.date);
    const [isCopied, setIsCopied] = useState(false);

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        let retrievedData = localStorage.getItem(spaceCard.title);
        if (retrievedData)
            setLikeBtnActive(JSON.parse(retrievedData))
    },[])

    const renderDateTime = () => {
        const month = myDate.toLocaleString('default', { month: 'long' });
        return (
            <>
                <h5 className={styles.space_card_date}>{myDate.getDate()}</h5>
                <h6 className={styles.space_card_month}>{month}</h6>
            </>
        )
    }
    const renderYear = () => {

        return (
            <>
                <h5 className={styles.space_card_year}>{myDate.getFullYear()}</h5>

            </>
        )
    }

    const renderExplanation = () => {
        let trimmedString = spaceCard.explanation.substring(0, MAX_LENGTH);

        //re-trim if we are in the middle of a word
        trimmedString = trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));

        return (
            <p className={styles.space_card_explanation}>
                {trimmedString}...
            </p>
        )
    }

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

    const handleLikeBtnClicked = (type: string) => {
        if (type === 'clap') {

            localStorage.setItem(spaceCard.title, JSON.stringify([likeBtnActive[0], !likeBtnActive[1]]));

            setLikeBtnActive([likeBtnActive[0], !likeBtnActive[1]]);
        }
        else {
            localStorage.setItem(spaceCard.title, JSON.stringify([!likeBtnActive[0], likeBtnActive[1]]));

            setLikeBtnActive([!likeBtnActive[0], likeBtnActive[1]]);
        }
        // if (likeBtnActive) {
        //     //console.log('object');
        //     localStorage.removeItem(spaceCard.title);
        //     setLikeBtnActive("");
        // } else {
        //     if (buttonClassName.includes("like")) {
        //         localStorage.setItem(spaceCard.title, 'liked');
        //         setLikeBtnActive("liked");
        //     }
        //     else if (buttonClassName.includes("clap")) {
        //         localStorage.setItem(spaceCard.title, 'claped');
        //         setLikeBtnActive("claped");
        //     }

        // }
    }
    return (
        <>
            <div className={styles.fond}>
                <div className={styles.space_card}>
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
                                {/* <li><i className="fa fa-eye fa-2x"></i></li> */}
                                <li className={styles.space_card_list_item}>
                                    <div>
                                        {/* <LikeButton
                                            spaceCard={spaceCard}
                                            buttonClassName={styles.like_btn}
                                            buttonClassNameActive={styles.like_btn_active}
                                        /> */}
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
                                        /> */}
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
                        <li><i className="fa fa-share-alt fa-2x"></i></li> */}
                            </ul>
                        </Grid>
                        <Grid item md={6}>{renderYear()}</Grid>
                    </Grid>
                </div>
            </div>
            <SpaceModal
                open={open}
                handleOpen={handleOpen}
                handleClose={handleClose}
            />
        </>
    )
}

export default SpaceMedia;
{/* <Card>
                <CardMedia
                    component="img"
                    height="300"
                    image={spaceCard.url}
                    alt={spaceCard.title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {spaceCard.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {spaceCard.explanation}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card> */}