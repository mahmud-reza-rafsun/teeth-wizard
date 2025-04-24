import { Link, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import ServiceCart from "../components/ServiceCart";
import Feed from "../components/Feed";

const Home = () => {
    const services = useLoaderData();
    const { servicesData, reviewData } = services;
    return (
        <div className="lg:px-16 px-6">
            <Banner />
            <h2 className="text-center text-indigo-500 font-semibold text-3xl py-7">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {
                    servicesData.slice(0, 4).map((service) => <ServiceCart key={service.id} service={service} />)
                }
            </div>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 mx-auto block my-5 text-white">
                <Link to="/allTreatment">Show All</Link>
            </button>
            <Feed reviewData={reviewData} />
        </div>
    )
}

export default Home;