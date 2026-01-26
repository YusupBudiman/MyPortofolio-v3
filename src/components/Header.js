import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full h-full pointer-events-none z-[999]">
      <div className="pointer-events-auto">
        <Navbar />
      </div>
    </header>
  );
}
