import React, { useEffect } from 'react'
import styles from './LoadingScreen.module.css';

const LoadingScreen = () => {

    useEffect(() => {
        start();
    }, []);

    const start = () =>{
        let count = 20;
        let scene = document.querySelector('#scene_test');
        let i = 0;
        while(i < count){
            let star = document.createElement('i');
            let x = Math.floor(Math.random()*window.innerWidth);

            let duration = Math.random() * 1;
            let h = Math.random() * 100;

            star.style.left = x + 'px';
            star.style.width = 1 + 'px';
            star.style.height = 50 + h + 'px';
            star.style.animationDuration = duration + 's';

            scene?.appendChild(star);
            i++
            //console.log(star);

        }
    }
    
    return (
        <div className={styles.scene} id="scene_test">
            <div className={styles.rocket}>
                {/* <img src="https://raw.githubusercontent.com/gkillick/spacestagram/master/src/assets/images/rocket-light-mode.png"/> */}
                <img src='/static/images/rocket.png'/>
            </div>

        </div>
    )
}

export default LoadingScreen
