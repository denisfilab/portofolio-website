import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className='w-full h-screen flex flex-col justify-center items-center'>
            <h1 className="text-[10vw] text-white">Coming Soon</h1>
            <Link href='/' className="text-white text-[2vw] mt-[5vw] underline">
                Go back to home
            </Link>
        </div>
    )
}
export default ErrorPage;