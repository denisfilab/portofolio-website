import Link from "next/link";

const ErrorPage = () => {
    return (
        <div className='site-container flex min-h-screen flex-col items-center justify-center text-center'>
            <h1 className="font-sans text-[clamp(4rem,10vw,8rem)] font-medium leading-none text-ink">Coming Soon</h1>
            <Link href='/' className="mt-8 inline-flex min-h-10 items-center border-b border-accent text-sm font-medium text-ink transition-colors duration-200 hover:text-accent-strong">
                Go back to home
            </Link>
        </div>
    )
}
export default ErrorPage;
