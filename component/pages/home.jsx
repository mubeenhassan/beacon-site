import react from "react";
import Footer from "../footer";
import styles from './../../asserts/css/home.module.css';
import Link from 'next/link';
import ServiceBox from "../serviceBox";

const Home = () => {
  return (
    <>
      <div className={styles.home_container}>
      <video className={styles.heroimg} autoPlay muted loop>
                 <source src="/Video.mov" type="video/mp4"/>
            </video>
        <div className={styles.home_title}>
          <h4>BUSINESS ADVISORS, COACHES AND CONSULTANTS</h4>
          <p>Beacon Business Advisors works collaboratively with business owners in the areas of business planning, employee retention, staffing, cash management, process creation, contingency planning, pivot planning and execution. The result is a business that is more aligned with a business owner’s vision and goals, enjoying increased profit and performance in less time and with less effort. Beacon Business Advisors also support business owners with their new business development. We partner with executives and small businesses that are looking to enhance their leadership and management performance to achieve long term profitability and business growth. Beacon Business Advisors is a St Augustine based Business Advisory and Coaching firm, consulting with clients in the Northeast Florida area including Jacksonville, St Augustine and St Johns County area.</p>
          <h4>BEACON BUSINESS ADVISORS WILL WORK WITH YOU TO</h4>
          <h1>Plan. Organize. Perform</h1>
          {/* <ul className={styles.title_box}>
            <h4>
              <li> Small Businesses account for 99.7% of all businesses in the U.S.A. <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li>Only 33% of small businesses have a formal Business Plan.  <span>  (Thryv)</span></li>
            </h4>
          </ul> */}
        </div>
        <div className={styles.title_img}>
          <img src="/assets/images/new/image2.jpeg" />
        </div>
        {/* <div className={styles.home_service}>
          <h1 className={styles.service_text}>Our Services</h1>
          {
            ServiceData.map((item, index) => (
              <div className={styles.service_card} key={index}>
                <Link href={item.link} >
                  <a>
                    <h1>{item.title}</h1>
                  </a>
                </Link>
              </div>
            )
            )
          }
        </div> */}
        <ServiceBox />
        {/* <div className={styles.talk_sec}>
          <ul className={styles.title_box}>
            <h4>
              <li>19% of Small Business Owners work over sixty-hours a week.  <span>(Fundera)</span></li>
            </h4>
            <h4>
              <li> 63.3% of companies say retaining employeesis actually harder than hiring them.  <span> (Smarp)</span></li>
            </h4>
          </ul>

        </div> */}
        <Footer />
      </div>
    </>
  )
}
export default Home;