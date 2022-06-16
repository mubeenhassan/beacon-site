import react from "react";
import styles from '../asserts/css/home.module.css'
import { useState, useEffect } from "react"

const Footer = () => {
    const [backtoTop, setbacktoTop] = useState(false)
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setbacktoTop(true)
            } else {
                setbacktoTop(false)
            }
        })
    }, [])

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <div>
            <div className={styles.talk_text}>
                <h2>Let's Talk.</h2>
                <a href="#">Schedule a Consultation Today</a>
            </div>
            <div>
                <div className={styles.top_footer}>
                    <div className={styles.foot_top_first}>
                        <img src="/assets/images/Logo_Final.gif" />
                    </div>
                    <div className={styles.foot_top_sec}>
                        <h5>Contact</h5>
                        <h4>(971) 409-2113<br />
                            (971) 666-7223
                        </h4>
                        <h5>Mailing Address</h5>
                        <p><a href="mailto:info@lingercoaching.com">info@lingercoaching.com</a></p>
                    </div>
                    <div className={styles.foot_top_third}>
                        <h2>Linger Coaching Advisors</h2>
                        <span>Proud Member of</span>
                        <div >
                            <img src="/assets/images/flag_logo.jpg" />
                        </div>
                    </div>
                </div>
                <div className={styles.bot}></div>
            </div>
            <div className={styles.copy_right}>
                {
                    backtoTop && (
                        <button className={styles.back_top} onClick={scrollTop}>^</button>
                    )
                }
                <a href="#">Privacy Policy</a>
                <br />
                <br />
                <span>© 2022 Linger Coaching – All rights reserved.</span>
            </div>
        </div>
    )
};

export default Footer;