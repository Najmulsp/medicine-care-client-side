import logo from '../../assets/logo/medicine (1).png'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
  <aside>
    <img className='w-20 h-20' src={logo} alt="" />
    <p>Medicine Care<br/>Providing healthcare services successfully</p>
  </aside> 
  <nav>
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Cardiac Clinic</a>
    <a className="link link-hover">Outpatient Surgery</a>
    <a className="link link-hover">Gynaecological Clinic</a>
    <a className="link link-hover">Outpatient Rehabilitation</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Doctors</h6> 
    <a className="link link-hover">Dr. Nick Sims</a>
    <a className="link link-hover">Dr. Michael Linden</a>
    <a className="link link-hover">Dr. Max Turner</a>
    <a className="link link-hover">Dr. Amy Adams</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;