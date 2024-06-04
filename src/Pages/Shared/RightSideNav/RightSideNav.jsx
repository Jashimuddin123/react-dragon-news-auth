import { FaGoogle, FaGithub, FaFacebook,FaTwitter, FaInstagram } from "react-icons/fa6";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
  return (
    <div>
      {/* login icons */}
      <div className="p-6">
        <h2 className="text-2xl font-bold">Login With</h2>
        <button className="btn btn-outline w-full  btn-success">
          <FaGoogle/>
          Login With Google
        </button>
        <button className="btn btn-outline w-full mt-4   btn-warning">
          <FaGithub/>
          Login With Github
        </button>
      </div>
      {/* find us icons */}
      <div className="p-6">
        <h2 className="text-2xl font-bold">Find Us On</h2>
        <a className="flex w-full items-center border p-1 text-xl px-2 gap-2 " href="">
            < FaFacebook className="text-blue-500"/>
              <span className=" text-gray-500">Facebook</span>
        </a>
        <a className="flex w-full items-center border p-1 text-xl px-2 gap-2 " href="">
        <FaTwitter className="text-blue-600" />
              <span className=" text-gray-500">Twiteer</span>
        </a>
        <a className="flex w-full items-center border p-1 text-xl px-2 gap-2 " href="">
        <FaInstagram className="text-red-400" />
              <span className=" text-gray-500">Instagram</span>
        </a>
      </div>

      {/* Q ZONE images */}
      <div className="p-6">
        <h2 className="text-2xl font-bold">Q-Zone</h2>
       <img src={qZone1} alt="" />
       <img src={qZone2} alt="" />
       <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
