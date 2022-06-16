import react from "react"
import styles from '../asserts/css/home.module.css'
import Link from 'next/link';


const ServiceBox = () => {
  const ServiceData = [
    {
      title: "School Workshop",
      link: "/school",
    },
    {
      title: "Workplace Workshop",
      link: "/workplace",
    },
    {
      title: "Parenting Workshop",
      link: "/parenting",
    },
  ]
  return (
    <div className={styles.home_service}>
      <h1 className={styles.service_text}>Our Services</h1>
      {ServiceData.map((item, index) => (
        <div className={styles.service_card} key={index}>
          <Link href={item.link}>
            <a>
              <h1>{item.title}</h1>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ServiceBox
