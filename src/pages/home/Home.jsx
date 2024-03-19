import Carousel from "../../components/carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import Products from "../../components/products/Products";
import Slidebar from "../../components/slidebar/Slidebar";


const Home = () => {

    return (
        <div>
            <Navbar />
            <Carousel />
            <Products />
            <Footer />
            <Slidebar />
        </div>
    )
}


export default Home;