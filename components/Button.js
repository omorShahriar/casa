import Link from "next/link";

const Button = ({ link, children, className = "", rightIcon = false }) => {
  return (
    <Link href={link}>
      <a
        className={` font-poppins font-bold text-xl text-white rounded-2xl ${className}`}
      >
        <div className=" py-6 px-8 flex gap-x-4 items-center ">
          {" "}
          {children}
          {rightIcon && <span> {rightIcon} </span>}
        </div>
      </a>
    </Link>
  );
};

export default Button;
