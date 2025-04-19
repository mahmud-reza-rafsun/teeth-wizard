import BannerImg from '../assets/dentis.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-[75vh]">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img
                    src={BannerImg}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Teeth Wizard <span className='text-indigo-500'>Appoinment</span></h1>
                    <p className="py-6 font-light">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Book Appoinment</button>
                </div>
            </div>
        </div>
    )
}

export default Banner;