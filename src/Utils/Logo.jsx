import { FiCamera } from "react-icons/fi";
import { Link } from "react-scroll";

const Logo = () => {
  return (
    <Link
      to="home"
      smooth={true}
      duration={600}
      offset={-70}
      className="flex items-center gap-2 cursor-pointer group"
    >
      {/* Icon */}
      <div className="p-2 rounded-full bg-linear-to-r from-emerald-100 to-teal-100 group-hover:scale-110 transition">
        <FiCamera className="text-emerald-600 text-lg" />
      </div>

      {/* Text */}
      <h1 className="text-lg font-semibold tracking-wide text-emerald-700">
        James <span className="text-teal-600">Carter</span>
      </h1>
    </Link>
  );
};

export default Logo;
