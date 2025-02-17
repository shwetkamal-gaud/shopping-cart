import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation()
    const cart = useSelector((state: RootState) => state.cart.items);
    console.log(cart)
    return (
        <nav className="border-grid sticky top-0 z-50 w-full  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="max-w-full px-2 sm:px-6 lg:px-8">
                <div className="relative flex py-2 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700  focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset"
                            aria-controls="mobile-menu"
                            aria-expanded={menuOpen}
                        >
                            <span className="sr-only">Open main menu</span>

                            {!menuOpen ? (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            ) : (
                                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 text-white items-center justify-end sm:items-stretch md:justify-start">
                        <h2 className="text-[#646cff] text-3xl">Shopping Cart</h2>
                    </div>


                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/" className={`rounded-md px-3 py-2 text-sm font-medium text-blue ${location.pathname === '/' && 'bg-gray-900 text-white'}`}>
                                    Products
                                </Link>
                            </div>
                        </div>
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <Link to="/cart" className={`rounded-md px-3 py-2 text-sm font-medium text-blue ${location.pathname === '/cart' && 'bg-gray-900 text-white'}`}>
                                    <span >View cart</span>
                                    🛒
                                    <sup>{cart.length}</sup>
                                </Link>
                            </div>
                        </div>
                     

                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <Link to="/" className={`block rounded-md  px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white${location.pathname === '/' && 'bg-gray-900 text-white'}`}>
                            Products
                        </Link>
                        <Link to="/cart" className={`block  rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-700 hover:text-white ${location.pathname === '/cart' && 'bg-gray-900 text-white'}`}>
                            <span >View cart</span>
                            🛒
                            <sup>{cart.length}</sup>
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
