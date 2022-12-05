import './TheSanPham.scss';
import logo from '@assets/Nike Zoom Kd 12.png';

const TheSanPham = () => {
    return <div className='the-san-pham'>
        <img src={logo} alt="" className="the-san-pham__img" />
        <div className="the-san-pham__list">
            <h3 className="the-san-pham__list-name">Nike Zoom KD 12</h3>
            <span className="the-san-pham__list-price">$ 99</span>
        </div>
    </div>
}

export default TheSanPham;