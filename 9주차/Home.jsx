import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import MyButton from "../components/button.jsx";

export const Home = () => {
    return(
        <div>
            <Header/>

            <div>
                <MyButton>button</MyButton>
                <MyButton bgColor="white">button</MyButton>
                <MyButton bgColor="gray">button</MyButton>
            </div>

            <Footer/>
        </div>
    )
}