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



// import React, { useRef, useEffect, useState, useCallback } from "react";
// import styles from './LikeButton.module.css';

// const LikeButton = () => {
   
    
//     return (
//        <>
//         <input type="checkbox" className={styles.like_btn}>

//             <i className="fa fa-heart"></i>
//         </>
//     );
// }



// export default LikeButton;
    
  
    
        
        
    



    
    
    



    
        
            
            
            
                
            
        
    














// // import React from 'react';

// // import { useState } from 'react';
// // import { SpaceCard } from '../../models/SpaceCard';

// // import styles from './LikeButton.module.css';

// // interface Props {
// //     spaceCard: SpaceCard;
// //     buttonClassName: string;
// //     buttonClassNameActive: string;
// // }
// // const LikeButton = ({ spaceCard, buttonClassName, buttonClassNameActive }: Props) => {
// //     const [likeBtnActive, setLikeBtnActive] = useState(localStorage.getItem(spaceCard.title) || "");


// //     const handleLikeBtnClicked = () => {

// //         if (likeBtnActive) {
// //             //console.log('object');
// //             localStorage.removeItem(spaceCard.title);
// //             setLikeBtnActive("");
// //         } else {
// //             if (buttonClassName.includes("like")) {
// //                 localStorage.setItem(spaceCard.title, 'liked');
// //                 setLikeBtnActive("liked");
// //             }
// //             else if (buttonClassName.includes("clap")) {
// //                 localStorage.setItem(spaceCard.title, 'claped');
// //                 setLikeBtnActive("claped");
// //             }

// //         }
// //     }
// //     return (
// //         <>
// //             <span
// //                 className={`${buttonClassName}
// //                  ${likeBtnActive && buttonClassName.includes(likeBtnActive) ?
// //                         buttonClassNameActive : ""}`}
// //                 onClick={() => handleLikeBtnClicked()}
// //             >

// //             </span>

// //         </>
// //     );
// // };

// // export default LikeButton;