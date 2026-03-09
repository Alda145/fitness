
import BreadcrumbSection from "../../Components/BreadcrumbSection";
import ContactSection from "../../Components/Contacts/ContactSection";
import MapSection from "../../Components/Contacts/MapSection";



const Courses = () => {
    return <>
        <BreadcrumbSection title="Our Contacts" current="Contact" />
        
        <ContactSection />
        <MapSection/>

    </>
}
export default Courses;