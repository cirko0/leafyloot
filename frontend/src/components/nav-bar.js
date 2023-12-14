import { BiSearch, BiUser, BiHeart } from "react-icons/bi";

const NavBar = () => {
  return (
    <header className="w-full flex items-center justify-between text-[2rem]">
      <a
        className="flex items-center gap-2 cursor-pointer no-underline"
        href="/"
      >
        <img
          className="w-[4rem] h-[4rem] object-cover"
          alt=""
          src="/logo.png"
        />
        <div className="font-semibold inline-block font-inter text-mediumseagreen">
          <span>Leafy</span>
          <span className="text-black">Loot</span>
        </div>
      </a>

      <div className="flex items-center justify-between p-4 gap-8">
        <a href="#" className="text-black flex justify-center items-center">
          <BiSearch />
        </a>
        <a href="#" className="text-black flex justify-center items-center">
          <BiHeart />
        </a>
        <a href="#" className="text-black flex justify-center items-center">
          <BiUser />
        </a>
      </div>
    </header>
  );
};

export default NavBar;
