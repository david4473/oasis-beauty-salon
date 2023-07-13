import Link from "next/link";
import Button from "./Button";

const Nav = () => {
  return (
    <div className="bg-[#F6E7D8]">
      <div className="p-3 flex justify-between items-center w-11/12 mx-auto">
        <div>
          <Link href="/">
            <svg
              className="w-10"
              width="50"
              height="41"
              viewBox="0 0 50 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                id="Vector"
                d="M22.3837 0L50 26.678V41H37.1124V31.8265L17.0543 12.4497H12.8876V41H0V0H22.3837ZM37.1124 14.2283V0H50V14.2283H37.1124Z"
                fill="#754730"
              />
            </svg>
          </Link>
        </div>
        <nav>
          <ul className="flex gap-20">
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </nav>
        <div>
          <Button text={"Book Now"} pd_x={"px-10"} />
        </div>
      </div>
    </div>
  );
};

export default Nav;
