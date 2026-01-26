"use client";

export default function ContactButton({
  showForm,
  buttonRef,
  buttonOffset,
  setButtonHover,
  handleMouseLeave,
  setButtonOffset,
  setShowForm,
  children,
}) {
  return (
    <div
      ref={buttonRef}
      onMouseEnter={() => {
        if (!showForm) setButtonHover(true);
      }}
      onMouseLeave={handleMouseLeave}
      onMouseMove={(e) => {
        if (!showForm) {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX - (rect.left + rect.width / 2);
          const y = e.clientY - (rect.top + rect.height / 2);
          setButtonOffset({ x: x * 0.05, y: y * 0.05 });
        }
      }}
      onClick={() => {
        if (!showForm) setShowForm(true);
      }}
      className={`relative overflow-hidden w-[104px] h-[104px] lg:w-[208px] lg:h-[208px]
        flex items-center justify-center cursor-pointer
        bg-[hsl(175,37%,38%)]
        transition-all duration-700
        ${!showForm ? "group-hover:bg-[hsl(60,33%,93%)]" : ""}`}
      style={{
        width: showForm ? "500px" : "",
        height: showForm ? "auto" : "",
        borderRadius: showForm ? "1rem" : "9999px",
        padding: showForm ? "2rem" : "0",
        transform: `translate(${buttonOffset.x}px, ${buttonOffset.y}px)`,
      }}
    >
      {/* BORDER MASK */}
      <div
        className={`absolute bg-[hsl(171,29%,50%)] 
          mask-center mask-no-repeat [mask-size:100%] w-[250px] h-[250px] rounded-full
          transition-colors duration-700
          ${
            !showForm
              ? "group-hover:bg-[hsl(148,36%,90%)] mask-[url(/images/border-btn1.png)]"
              : "mask-[url(/images/pattern1.png)] w-full h-full mask-repeat rounded-none"
          }`}
      ></div>

      {children}
    </div>
  );
}
