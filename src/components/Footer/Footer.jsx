import { assets } from "../../assets/assets";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer" id="footer">
			<div className="footer-content">
				<div className="footer-content-left">
					<img src={assets.logo} alt="" />
					<p>
						Choose from a diverse menu featuring a delectable array of dishes
						crafted with the finest ingredients and cultinary expertise.
					</p>
					<div className="footer-social-icons">
						<img src={assets.facebook_icon} alt="" />
						<img src={assets.linkedin_icon} alt="" />
						<img src={assets.twitter_icon} alt="" />
					</div>
				</div>

				<div className="footer-content-center">
					<h2>COMPANY</h2>
					<ul>
						<li>Home</li>
						<li>About us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				<div className="footer-content-right">
					<h2>GET IN TOUCH</h2>
					<ul>
						<li>+91 9876543210</li>
						<li>gamemaster9748@gmail.com</li>
					</ul>
				</div>
			</div>
			<hr />
			<p className="footer-copyright">
				Copyright 2024 © Tomato.com - All Right Reserved.
			</p>
		</div>
	);
};

export default Footer;
