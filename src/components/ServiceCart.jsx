import { Link } from "react-router-dom";

const ServiceCart = ({ service }) => {
    const { treatment, image, description, cost, id } = service;
    return (
        <div className="border hover:shadow-indigo-300 hover:shadow-lg duration-700 p-4 hover:border-indigo-500 rounded-md">
            <figure>
                <img className="h-[200px] w-full rounded-md object-cover" src={image} />
            </figure>
            <div className="pt-5 space-y-2">
                <h2 className="text-xl font-medium">{treatment}</h2>
                <h3>Const: ${cost}</h3>
                <p className="font-light">{description.slice(0, 50)}...</p>
                <div className="card-actions justify-start mt-3">
                    <Link to={`/details/${id}`} className="btn btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Check Out More</Link>
                </div>
            </div>
        </div>
    )
}

export default ServiceCart;