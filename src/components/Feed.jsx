import Marquee from "react-fast-marquee";

const Feed = ({ reviewData }) => {
    return (
        <div className="my-12">
            <h2 className="text-center text-indigo-500 font-semibold text-3xl py-7">Happy Clints</h2>
            <Marquee pauseOnHover={true}>
                <div className="grid grid-cols-6 gap-4 my-4 pl-4">
                    {
                        reviewData.map((feed) => <div key={feed.id} className="card bg-base-100 w-full shadow-xl">
                            <div className="card-body w-80 lg:w-96 rounded-md bg-indigo-500 text-white">
                                <div className="flex gap-5 relative">
                                    <img className="w-14 h-14 rounded-full object-cover" src={feed?.userImg} alt={feed?.name} />
                                    <h2 className="card-title">{feed?.name}</h2>
                                    <p className="absolute right-5 -top-3">Date: {new Date().toLocaleDateString()}</p>
                                </div>
                                <p>{feed?.review}</p>
                                <div className="card-actions justify-start items-center">
                                    <div className="rating">
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-2"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <button className="btn btn-sm btn-error text-white">Review</button>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </Marquee>
        </div>
    )
}

export default Feed;