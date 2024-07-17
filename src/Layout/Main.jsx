import { Link } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <section className="bg-gray-100 lg:h-[950px] text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-24 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-4xl font-bold leading-none sm:text-5xl">
                        <span className="text-orange-600">Ez</span>CashPortal
                    </h1>
                    <p className="px-8 mt-8 mb-12 text-lg">Mobile Financial Service!</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to="/login" className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-600 text-gray-50">Login</Link>
                        <Link to="/registration" className="px-8 py-3 m-2 text-lg border-2 rounded text-gray-900 border-orange-600 ">Registration</Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Main;