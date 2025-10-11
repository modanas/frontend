import { Link } from "react-router-dom";
import Cards from "./Cards";
import axios from "axios"
import { useEffect, useState } from "react";

function Course() {
	const [book,setBook] = useState([])
	useEffect(()=> {
		const getBook = async () => {
			try {
				// const res = await axios.get("http://localhost:4001/book")
				const res = await axios.get("https://bookstorebackend-4xrx.onrender.com/book")
				console.log(res.data)
				setBook(res.data)
			} catch (error) {
				 console.log(error)
			}
		}
		getBook();
	},[])
	return (
		<>
			<div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
				<div className="mt-28 items-center justify-center text-center">
					<h1 className="text-2xl md:text-4xl">
						We're delighted to have you
						<span className="text-pink-500"> Here!:)</span>
					</h1>
					<p className="mt-12">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
						sunt molestias officiis porro magni, aliquid exercitationem non
						mollitia cumque dignissimos hic id repellat cupiditate eaque ab,
						voluptas illo enim in. Illum possimus dolor eaque deleniti, itaque
						quas dolorem ipsam magnam, consequuntur doloribus cum praesentium.
						Eaque, suscipit doloribus adipisci ut aliquid iusto eveniet minima
						dignissimos molestiae ducimus omnis laboriosam nisi molestias!
					</p>
         <Link to="/">
         <button className="mt-6 bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md duration-300">Back</button>
         </Link>
				</div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {
            book.map((item) => (
              <Cards item={item} key={item.id}/>
            ))
          }
        </div> 
			</div>
		</>
	);
}

export default Course;
