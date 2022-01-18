import React, { useEffect, useState } from 'react'
import Logo from '../logo/Logo'
import styles from './Header.module.css';
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [isSticky, setSticky] = useState<boolean>(false);
    const router = useRouter()

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", () => handleScroll);
        };
    },[]);

    const handleScroll = () => {
        window.pageYOffset > 300
            ? setSticky(true)
            : setSticky(false);
    };

    return (
        <>
            <header className={` ${isSticky ? styles.navbar_sticky : styles.navbar_unstick} ${styles.primary_header} ${styles.dflex}`}>
                <div>
                    <Logo isSticky={isSticky} />
                </div>

                <button
                    className={styles.mobile_nav_toggle} aria-controls="primary-navigation"
                    aria-expanded={navToggle ? "true" : "false"}
                    onClick={() => setNavToggle(!navToggle)}
                >
                    <span className={styles.sr_only}>
                        Menu
                    </span>
                </button>

                <nav className={styles.nav}>
                    <ul
                        id="primary-navigation"
                        //data-visible="false" 
                        data-visible={navToggle ? "true" : "false"}
                        className={`${styles.primary_navigation} ${styles.underline_indicators} ${styles.dflex}`}>
                        <li
                            className={router.pathname === '/' ? styles.active : ''}
                        >
                            <Link href="/">
                                <a className={styles.nav_item} >
                                    <span aria-hidden="true">
                                        <i className="fa fa-calendar" aria-hidden="true">
                                        </i>
                                    </span>
                                    From date
                                </a>
                            </Link>

                        </li>

                        <li
                            className={router.pathname === '/liked' ? styles.active : ''}
                        >
                            <Link href="/liked">
                                <a className={styles.nav_item} >
                                    <span aria-hidden="true">
                                        <i className="fa fa-gratipay" aria-hidden="true"></i>
                                    </span>
                                    Favourite
                                </a>
                            </Link>

                        </li>
                        <li
                            className={router.pathname === '/random' ? styles.active : ''}
                        >
                            <Link href="/random">
                                <a className={styles.nav_item} >
                                    <span aria-hidden="true">
                                        <i className="fa fa-random" aria-hidden="true"></i>
                                    </span>
                                    Random
                                </a>
                            </Link>
                        </li>

                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header
