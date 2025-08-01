type ButtonCrossArrowProps = {
  text: string;
  href: string;
  variant?: "solid" | "outline";
};

const ButtonCrossArrow = ({
  text,
  href,
  variant = "solid",
}: ButtonCrossArrowProps) => {
  const isSolid = variant === "solid";

  return (
    <button
      className={`group relative flex h-12 w-[170px] items-center justify-between rounded-full font-medium transition-colors duration-300
        ${
          isSolid
            ? "bg-[#E10600] text-white border-white"
            : "bg-white text-[#E10600]  border-1 border-[#E10600]"
        }`}
      onClick={() => {
        window.location.href = href;
      }}
    >
      <span className="pl-4">{text}</span>

      <div
        className={`relative h-9 w-9 overflow-hidden rounded-full mr-1 transition
          ${isSolid ? "bg-white" : "bg-[#E10600]"}`}
      >
        <div className="absolute top-[0.7em] left-[-0.1em] grid place-content-center transition-all w-full h-full duration-200 group-hover:-translate-y-5 group-hover:translate-x-4">
          {/* Arrow 1 */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 ${isSolid ? "fill-[#E10600]" : "fill-white"}`}
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          {/* Arrow 2 */}
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 mb-1 -translate-x-4 ${
              isSolid ? "fill-[#E10600]" : "fill-white"
            }`}
          >
            <path
              d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </button>
  );
};

export default ButtonCrossArrow;
