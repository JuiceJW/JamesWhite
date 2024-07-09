export default function Navigation() {
  return (
    <nav className="fixed bg-white w-full h-20 z-50">
      <div className="flex justify-between items-center h-20 container m-auto">
        <div>
          <span className="font-semibold">James</span> White
        </div>
        {/* <div className="flex">
          <div
            className="relative flex justify-center items-center w-[30px] h-[30px] cursor-pointer transition-all ease-in-out mr-4"
            // onClick={() => {}}
          >
            <div className="menu-btn-burger">HB</div>
          </div>
        </div> */}
        <div className="block relative">
          <ul className="flex gap-6 list-none p-0">
            <li>About</li>
            <li>Portfolio</li>
            <li>Development Technologies</li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
