import BreadcrumbSection from '../../Components/BreadcrumbSection'
import BlogSection from '../../Components/Home/BlogSection';

const Blogs = () => {
    return <>
        <BreadcrumbSection title="Our Blogs" current="Blog" />
        
        <BlogSection/>

    </>
}
export default Blogs;