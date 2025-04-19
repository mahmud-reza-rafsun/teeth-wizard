import { useLoaderData } from "react-router-dom";
import ServiceCart from "./ServiceCart";

const AllTreatment = () => {
    const services = useLoaderData();
    return (
        <div>
            <h2 className="text-center text-2xl font-semibold py-5">All Treatmemts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-16">
                {
                    services.map((service) => <ServiceCart service={service} />)
                }
            </div>
        </div>
    )
}

export default AllTreatment;