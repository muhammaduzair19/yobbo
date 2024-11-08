import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <nav className="w-full bg-black h-16">
            <div className=" w-full flex justify-between items-center py-1.5 px-2 md:px-4">
                <Link to={"/"}>
                    <img
                        className="w-12"
                        src="/images/y.svg"
                        alt="Yobbo Y Icon"
                    />
                </Link>
                <div className="flex items-center gap-4">
                    <button  onClick={() => {
    navigate("/roadmap");
    window.scrollTo(0, 0); // Scrolls to the top
}} className="bg-green-500 text-white px-4 py-1.5 md:py-2 rounded-lg text-sm md:text-base">
                        Buy YOBBO
                    </button>
                    <div className="flex text-white gap-2">
                        <div className="rounded overflow-hidden">
                            <img
                                className="w-12"
                                src="https://s3-alpha-sig.figma.com/img/89fe/31c7/9df8fb6bbfd99db1cb18960fb1e8e0e1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XWThAV6NjpZattuS6NVKQ4QPRl1VyD1pgyWfvpSanSsmiLjYzFNj-jBUA9EAmbDd4S5KCsH-eW3NvPLicwx-M4rCM9pnrYk6xf7O-0h2RxteGbKJYJyufn~3h-kvCBxy83hlQ4Xs5LS8JBLgdQD4fKVOrHdJX557I62tCdP9L-jGQy6JkKbhLZLZyUeITb1Ahpgqcb6VbXlngzZmZ-IAHBjyc-FNEyusayHEREWqsxfFW8JEp4359mbrXs2ObB7Iuy7IWlMvvwzQjWFZauL8e6Pnpen3NwfdTq5Yn8wrwNzYnPYA4WiUdsAUV0AcB3IQxVoX0nPVktvoIKzqnRO8nw__"
                                alt="User Image"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <p className="text-base font-medium">Game User</p>
                            <p className="text-sm text-green-600 underline font-medium">
                                View Profile
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
