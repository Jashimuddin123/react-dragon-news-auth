import moment from 'moment';
import logo from '../../../assets/logo.png'
const Header = () => {
    return (
        <div>
          
            <img className='mx-auto' src={logo} alt="" />
            <p className='text-center'>Journalism WithOut Fear Or Favour</p>
            <p className='text-xl text-center font-semibold'> {moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
        </div>
    );
};

export default Header;