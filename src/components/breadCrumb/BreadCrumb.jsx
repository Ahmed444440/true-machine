import Link from 'next/link';


const Breadcrumb = ({ pathnames }) => {

  console.log(pathnames)

  return (
    <nav  className=" absolute top-[40%] start-[30%]">
      <ol className="flex text-sm text-gray-600">
        <li className="breadcrumb-item">
          <Link href="/" className="text-white  font-semibold hover:text-primary_color">
            Home
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const href = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return isLast ? (
            <li key={index} className="flex items-center">
              <span className="mx-2 text-white">/</span>
              <span className="text-white">{decodeURIComponent(value)}</span>
            </li>
          ) : (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              <Link href={href} className="text-white  font-semibold hover:text-primary_color">
                {decodeURIComponent(value)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
