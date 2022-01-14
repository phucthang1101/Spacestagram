import React from 'react';
import { useState } from 'react';
import { SpaceCard } from '../../models/SpaceCard';

import styles from './LikeButton.module.css';

interface Props {
    spaceCard: SpaceCard;
    buttonClassName: string;
    buttonClassNameActive: string;
}
const LikeButton = ({ spaceCard, buttonClassName, buttonClassNameActive }: Props) => {
    const [likeBtnActive, setLikeBtnActive] = useState(localStorage.getItem(spaceCard.title) || "");


    const handleLikeBtnClicked = () => {

        if (likeBtnActive) {
            //console.log('object');
            localStorage.removeItem(spaceCard.title);
            setLikeBtnActive("");
        } else {
            if (buttonClassName.includes("like")) {
                localStorage.setItem(spaceCard.title, 'liked');
                setLikeBtnActive("liked");
            }
            else if (buttonClassName.includes("clap")) {
                localStorage.setItem(spaceCard.title, 'claped');
                setLikeBtnActive("claped");
            }

        }
    }
    return (
        <>
            <span
                className={`${buttonClassName}
                 ${likeBtnActive && buttonClassName.includes(likeBtnActive) ?
                        buttonClassNameActive : ""}`}
                onClick={() => handleLikeBtnClicked()}
            >

            </span>

        </>
    );
};

export default LikeButton;