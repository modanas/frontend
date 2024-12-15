import Navbar from "./Navbar";
import Footer from "./Footer";

const About = () => {
	return (
		<>
		<Navbar />
		<div className="bg-white text-gray-800 dark:bg-slate-800 dark:text-white">
			{/* Hero Section */}
			<section className=" text-black py-24 dark:text-white">
				<div className="container mx-auto px-6 text-center">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
					<p className="text-lg md:text-xl">
						We are dedicated to providing the best services in our industry.
					</p>
				</div>
			</section>

			{/* Company Description Section */}
			<section className="py-16 px-4">
				<div className="container mx-auto max-w-5xl">
					<h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
					<p className="text-lg leading-relaxed text-gray-600 text-center dark:text-white">
						Our company was founded with a mission to provide exceptional
						services. We are a team of professionals committed to making a
						positive impact in our field, combining innovation, experience, and
						dedication to deliver outstanding results.
					</p>
				</div>
			</section>

			{/* Team Section */}
			<section className="bg-gray-100 py-16 dark:bg-slate-800 dark:text-white">
				<div className="container mx-auto max-w-6xl">
					<h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 dark:bg-slate-800 dark:text-white">
						{/* Team Member 1 */}
						<div className="bg-white p-6 rounded-lg shadow-lg text-center dark:bg-slate-700 dark:text-white">
							<img
								src="https://via.placeholder.com/150"
								alt="Team Member 1"
								className="rounded-full mx-auto mb-4 w-32 h-32 "
							/>
							<h3 className="text-xl font-semibold">John Doe</h3>
							<p className="text-gray-600">CEO & Founder</p>
						</div>
						{/* Team Member 2 */}
						<div className="bg-white p-6 rounded-lg shadow-lg text-center dark:bg-slate-700 dark:text-white">
							<img
								src="https://via.placeholder.com/150"
								alt="Team Member 2"
								className="rounded-full mx-auto mb-4 w-32 h-32"
							/>
							<h3 className="text-xl font-semibold">Jane Smith</h3>
							<p className="text-gray-600">Chief Marketing Officer</p>
						</div>
						{/* Team Member 3 */}
						<div className="bg-white p-6 rounded-lg shadow-lg text-center dark:bg-slate-700 dark:text-white">
							<img
								src="https://via.placeholder.com/150"
								alt="Team Member 3"
								className="rounded-full mx-auto mb-4 w-32 h-32"
							/>
							<h3 className="text-xl font-semibold">Michael Johnson</h3>
							<p className="text-gray-600">Lead Developer</p>
						</div>
					</div>
				</div>
			</section>


		</div>
		<Footer />
		</>
	);
};

export default About;
