import Link from "next/link";

const Button = ({ text, pd_x, mg_y }) => {
  return (
    <>
      <Link href="/pricing">
        <button
          className={`${pd_x} ${mg_y} block text-sm py-3 bg-[#BF7C63] text-slate-50 rounded-3xl`}
        >
          {text}
        </button>
      </Link>
    </>
  );
};

export default Button;
