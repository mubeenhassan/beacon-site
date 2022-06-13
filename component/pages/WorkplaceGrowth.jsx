import react from "react"
import style from "./../../asserts/css/service_links.module.css"
import Footer from "../footer"

const WorkplaceGrowth = () => {
  return (
    <div>
      <div className={style.general_title}>
        <h1>Workplace</h1>
      </div>
      <div className={style.general_main}>
        <div className={style.general_card}>
          <img src="/assets/images/busin-planning.jpg" />
          <h1>Growth Mindset</h1>
        </div>
        <div className={style.busin_text}>
          <p>
            Educational research is showing that the traditional models of teaching are
            becoming redundant in the face of an evolving student demographic. To respond
            to this, it is fundamental to shift the perspectives of teaching to newer and more
            dynamic models of classroom management. Accordingly, issues such as student
            bullying, lack of emotional tolerance from teachers, and an inability to mindfully
            manage deviant behavior still plagues many teachers who identify with traditional
            models of education. Throughout this workshop of effective teaching, you will
            discover the modern models of teaching and learn evidence-based methods that
            will help you navigate difficult environments with ease.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WorkplaceGrowth
