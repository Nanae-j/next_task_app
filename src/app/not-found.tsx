import Link from 'next/link';

const NotFoundPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-slate-50 text-gray-900">
      <h2 className="text-8xl font-bold">404</h2>
      <p className="text-4xl font-medium">Page Not Found</p>
      <Link href="/" className="mt-4 text-xl text-blue-600 hover:underline">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;