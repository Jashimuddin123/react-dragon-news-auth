import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="border border-blue-800 ">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="md:col-span-2 border border-black"> 
                    <h1 className="text-2xl font-bold">Content coming soon</h1>
                </div>
                <div className="border border-red-500 ">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
              
        </div>
    );
};

export default Home;