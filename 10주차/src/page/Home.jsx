import {Header} from "../components/Header.jsx";
import {Footer} from "../components/Footer.jsx";
import MyButton from "../components/button.jsx";

import {useNavigate} from "react-router-dom";

export const Home = () => {
    const navigate = useNavigate();
    return(
        <div>
            <Header/>

            <div>
                <MyButton onClick={()=> navigate("/login")}>
                    회원가입
                </MyButton>
                {/*<MyButton bgColor="white">button</MyButton>*/}
                {/*<MyButton bgColor="gray">button</MyButton>*/}
            </div>

            <Footer/>
        </div>
    )
}