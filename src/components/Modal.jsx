const Modal = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const firstName = e.target.Fname.value;
        const lastName = e.target.Lname.value;
        const email = e.target.email.value;
        const phone = e.target.phone.value;
        const appoinmentDate = e.target.appoinment.value;
        const address = e.target.address.value;
        const password = e.target.password.value;
        console.log(firstName, lastName, email, phone, appoinmentDate, address, password);
    }
    return (
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
            <div className="modal-box min-h-screen">
                <div className="hero">
                    <div className="hero-content">
                        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">First name</span>
                                    </label>
                                    <input type="text" name="Fname" placeholder="First name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Last name</span>
                                    </label>
                                    <input type="text" name="Lname" placeholder="Last name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Phone</span>
                                    </label>
                                    <input type="number" name="phone" placeholder="Phone" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Appoinment Date</span>
                                    </label>
                                    <input type="date" name="appoinment" placeholder="Appoinment Date" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="Address" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-3">
                                    <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">Make Appoinment</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="modal-action absolute top-0 right-8">
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn">Close</button>
                    </form>
                </div>
            </div>
        </dialog>

    )
}

export default Modal;