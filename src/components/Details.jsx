import { useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const Details = () => {
    const singleData = useLoaderData();
    const { cost, treatment, description, image } = singleData || {};
    return (
        <div className="px-6 lg:px-16 mt-7">
            <div
                className="hero min-h-[80vh]"
                style={{
                    backgroundImage: `url(${image})`,
                }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{treatment}</h1>
                        <h1 className="mb-5 text-3xl font-bold">Cost - ${cost}</h1>

                        <p className="mb-5">
                            {description}
                        </p>
                        <button onClick={() => document.getElementById('my_modal_5').showModal()} className="btn btn-primary">Book Appoinment</button>
                    </div>
                </div>
                <Modal />
            </div>
        </div>
    )
}

export default Details;