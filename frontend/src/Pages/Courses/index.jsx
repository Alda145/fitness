import GoalSection from "../../Components/Home/GoalSection";
import CoursesSection from '../../Components/Home/CoursesSection'
import Testimonials from "../../Components/Home/Testimonial";
import BreadcrumbSection from "../../Components/BreadcrumbSection";



const Courses = () => {
    return <>
        <BreadcrumbSection  title="Our Courses" current="Course"  />
        <div style={{ height: '100px' }}></div>
        <GoalSection />
        <div style={{ height: '100px' }}></div>
        <CoursesSection />
        <div style={{ height: '100px' }}></div>
        <Testimonials />
    </>
}
export default Courses;