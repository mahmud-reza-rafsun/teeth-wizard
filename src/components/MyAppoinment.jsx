import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const MyAppoinment = () => {
    const { user } = useContext(AuthContext);
    const [userLocalData, setUserLocalData] = useState([]);
    useEffect(() => {
        const localData = localStorage.getItem("appoinment")
        let savedData = [];
        if (localData) {
            savedData = JSON.parse(localData);
        }
        const userData = savedData.filter((data) => data?.email === user?.email);
        console.log(userData);
        setUserLocalData(userData);
    }, [])
    return (
        <div>
            {
                userLocalData.map((data, idx) => <div key={idx} className="card card-compact bg-base-100 w-96 shadow-xl">
                    <figure>
                        <img
                            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{data?.firstName}</h2>
                        <p>{data?.address}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}

export default MyAppoinment;