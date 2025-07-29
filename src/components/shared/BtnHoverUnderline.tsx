import Link from "next/link";

type BtnHoverUnderlineProps = {
  text: string;
  href: string;
  currentPath?: string;
};

const BtnHoverUnderline = ({
  text,
  href,
  currentPath,
}: BtnHoverUnderlineProps) => {
  const isActive = currentPath === href;
  return (
    <Link
      href={href}
      className={`relative inline-block text-base font-medium
        after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full 
        after:origin-bottom-right ${
          isActive ? "after:scale-x-100" : "after:scale-x-0"
        } 
        after:bg-neutral-800 dark:after:bg-white
        after:transition-transform after:duration-300 
        after:ease-[cubic-bezier(0.65,0.05,0.36,1)] 
        hover:after:origin-bottom-left hover:after:scale-x-100`}
    >
      {text}
    </Link>
  );
};

export default BtnHoverUnderline;
