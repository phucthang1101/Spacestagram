import React from 'react'
import styles from './LikeButton.module.css';

const LikeButton = () => {
    return (
        <>
            <input type="checkbox" className={styles.like_btn}/>
            <i className={`fa fa-heart ${styles.fa_heart}`}></i>
        </>
    )
}

export default LikeButton
