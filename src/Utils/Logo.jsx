import { FiCamera } from "react-icons/fi";
import { Link } from "react-scroll";

const Logo = ({ onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <Link
      to="home"
      smooth={true}
      duration={600}
      offset={-70}
      onClick={handleClick}
      className="flex items-center gap-2 cursor-pointer group"
    >
      {/* Icon */}
      <div className="p-2 rounded-full bg-linear-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 group-hover:scale-110 transition">
        <FiCamera className="text-emerald-600 dark:text-emerald-300 text-lg" />
      </div>

      {/* Text */}
      <h1 className="text-lg font-semibold tracking-wide text-emerald-700 dark:text-emerald-300">
        James <span className="text-teal-600 dark:text-teal-300">Carter</span>
      </h1>
    </Link>
  );
};

export default Logo;
