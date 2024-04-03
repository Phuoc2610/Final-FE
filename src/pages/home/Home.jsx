import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Slidebar from "../../components/slidebar/Slidebar";
import Search from "../../pages/search/Search";


const Home = () => {

    return (
        <div>
            <Navbar />
            <Carousel />
            <Search/>
            <Products />
            <Footer />
            <Slidebar />
        </div>
    )
}


export default Home;