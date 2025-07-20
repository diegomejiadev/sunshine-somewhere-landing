"use client";

import { IMAGE_ALT } from "@/constants";
import {
  IMobileServiceItem,
  INavItem,
  MOBILE_NAV_LINKS,
  NAV_LINKS,
} from "@/constants/navbar.cst";
import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { ReactPortal } from "../ui";
import { Button } from "@/ui";

interface IContext {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const defaultValues: IContext = {
  isOpen: false,
  setIsOpen: () => {},
};

const NavbarContext = createContext<IContext>(defaultValues);

export const useNavbarContext = () => useContext(NavbarContext);

interface Props {
  children: React.ReactNode;
}

export const NavbarProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const value: IContext = {
    isOpen,
    setIsOpen,
  };

  return (
    <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
  );
};

const MobileChildrenLink = ({
  link,
  onClose,
}: {
  link: IMobileServiceItem;
  onClose: () => void;
}) => {
  const [onClicked, setOnClicked] = useState(false);
  return (
    <>
      <button
        key={link.key}
        className="flex items-center gap-6 rounded-lg px-3 py-3 transition duration-300 hover:bg-gray-200"
        onClick={() => {
          setOnClicked(!onClicked);
        }}
      >
        <Image
          src={link.icon}
          alt={`${IMAGE_ALT} ${link.label}`}
          width={25}
          height={25}
        />
        <p className="text-base font-bold tracking-tight text-slate-800">
          {link.label}
        </p>
      </button>
      <AnimatePresence>
        {onClicked && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="ml-4 overflow-hidden"
          >
            {link.children?.map((service) => (
              <Link
                href={service.href!}
                key={service.key}
                className="flex items-center gap-6 rounded-lg px-3 py-3 transition duration-300 hover:bg-gray-200"
                onClick={() => {
                  setOnClicked(false);
                  onClose();
                }}
              >
                <p className="text-sm font-bold tracking-tight text-slate-900">
                  {service.label}
                </p>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const DesktopLink = ({ link }: { link: INavItem }) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      key={link.key}
      className="relative cursor-pointer font-semibold transition-all"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <p className="text-black-800 flex items-center justify-center px-2 py-2 tracking-[.2px]">
        {link.label}
      </p>

      {/* Dropdown */}
      <AnimatePresence>
        {isHover && (
          <motion.div
            variants={{
              hide: {
                opacity: 0,
              },
              show: {
                opacity: 1,
              },
            }}
            initial="hide"
            exit="hide"
            animate="show"
            className={cn(
              "absolute -bottom-0 left-[100%] w-[370px] -translate-x-1/2 translate-y-[100%] overflow-hidden rounded-xl bg-white shadow-navbar transition-all duration-200 3xl:-left-10 3xl:w-[400px] 3xl:translate-x-0",
            )}
          >
            {link.services?.map((service, index, array) => (
              <div key={service.key}>
                <Link href={service.href}>
                  <div className="px-7 pb-5 pt-4 transition-all duration-200 hover:bg-primary-100 hover:bg-opacity-20">
                    <p className="text-[13px] text-slate-700 xl:text-[15px]">
                      {service.label}
                    </p>
                    {service.description && (
                      <p className="mt-1 text-xs leading-[150%] text-gray-30 xl:block xl:text-[12px]">
                        {service.description}
                      </p>
                    )}
                    {service.location && (
                      <p className="mt-1 inline-flex items-center gap-2 rounded-full bg-primary-800 px-2 py-1 text-[12px] leading-[150%] text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1.2rem"
                          height="1.2rem"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M17.657 5.304c-3.124-3.073-8.189-3.073-11.313 0a7.78 7.78 0 0 0 0 11.13L12 21.999l5.657-5.565a7.78 7.78 0 0 0 0-11.13M12 13.499c-.668 0-1.295-.26-1.768-.732a2.503 2.503 0 0 1 0-3.536c.472-.472 1.1-.732 1.768-.732s1.296.26 1.768.732a2.503 2.503 0 0 1 0 3.536c-.472.472-1.1.732-1.768.732"
                          />
                        </svg>
                        {service.location}
                      </p>
                    )}
                  </div>
                </Link>
                {array.length - 1 != index && (
                  <div className="mx-auto h-[1px] w-[80%] bg-gray-300"></div>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = ({ className, ...props }: HTMLMotionProps<"nav">) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.nav
        variants={{}}
        className={cn(
          "w-full py-3 transition-all duration-300",
          "bg-white bg-opacity-80 backdrop-blur-md",
          className,
        )}
        {...props}
      >
        <div className="max-container flex items-center justify-between xs:grid xs:grid-cols-3 xl:grid-cols-[1fr_auto_1fr]">
          <Link href="/">
            <Image
              src="/images/logo.webp"
              alt={`${IMAGE_ALT} Logo`}
              width={120}
              height={120}
              className="w-[45px] object-contain xs:w-[100px]"
            />
          </Link>

          <ul className="hidden w-full items-center justify-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => {
              return link.href ? (
                <Link
                  className="cursor-pointer font-semibold transition-all hover:font-bold"
                  key={link.key}
                  href={link.href}
                >
                  <p className="text-black-800 flex items-center justify-center px-2 py-2 tracking-[.2px]">
                    {link.label}
                  </p>
                </Link>
              ) : (
                <DesktopLink key={link.key} link={link} />
              );
            })}
          </ul>

          <Button className="flex items-center gap-2 rounded-[50px] border-none bg-slate-950 px-6 xs:justify-self-auto lg:w-[200px] lg:justify-self-end">
            <Image
              src="/icons/email.svg"
              width={20}
              height={20}
              className="my-auto flex items-center justify-center object-contain"
              alt={`${IMAGE_ALT} email`}
            />
            <span className="text-xs font-bold leading-[90%] text-white lg:text-base">
              Contact Us
            </span>
          </Button>

          <Image
            onClick={() => setIsOpen(true)}
            src="/icons/menu.svg"
            alt={`${IMAGE_ALT} menu`}
            width={25}
            height={25}
            className="inline-block cursor-pointer justify-self-end lg:hidden"
          />
        </div>
      </motion.nav>
      <ReactPortal wrapperId="navbar-sidebar-id">
        <AnimatePresence>
          {isOpen && <NavbarSidebar isOpen={isOpen} setIsOpen={setIsOpen} />}
        </AnimatePresence>
      </ReactPortal>
    </>
  );
};

interface NavbarSidebarProps extends HTMLMotionProps<"div"> {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const NavbarSidebar = ({
  setIsOpen,
  className,
  ...props
}: NavbarSidebarProps) => {
  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  //* Close on Escape Key press
  useEffect(() => {
    const closeOnEscapeKey = (e: KeyboardEvent) =>
      e.key === "Escape" ? handleClose() : null;

    document.addEventListener("keydown", closeOnEscapeKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
      document.body.style.overflow = "visible";
    };
  }, [handleClose]);

  return (
    <motion.div
      variants={{
        hidden: {
          x: "100%",
          transition: {
            type: "tween",
            duration: 0.4,
          },
        },
        visible: {
          x: "0",
          transition: {
            type: "tween",
            duration: 0.4,
          },
        },
      }}
      initial="hidden"
      exit="hidden"
      animate="visible"
      className={cn(
        "fixed left-0 top-0 z-[1000] h-screen w-full bg-white bg-opacity-50 backdrop-blur-lg",
        className,
      )}
      {...props}
    >
      <Image
        src="/icons/close.svg"
        alt={`${IMAGE_ALT} close`}
        width={30}
        height={30}
        className="absolute right-6 top-10 cursor-pointer object-contain"
        onClick={() => setIsOpen(false)}
      />
      <div className="flex flex-col gap-y-10 px-6 py-16">
        {MOBILE_NAV_LINKS.map((category) => (
          <div key={category.key}>
            <p className="mb-4 text-sm font-medium text-slate-700">
              {category.label}
            </p>

            <ul className="ml-3 mt-2 flex flex-col gap-y-1">
              {category.children.map((service) => {
                return service.children ? (
                  <MobileChildrenLink
                    key={service.key}
                    link={service}
                    onClose={handleClose}
                  />
                ) : service.href!.startsWith("https://") ? (
                  <a
                    key={service.key}
                    href={service.href!}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-6 rounded-lg px-3 py-3 transition duration-300 hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={service.icon}
                      alt={`${IMAGE_ALT} ${service.label}`}
                      width={25}
                      height={25}
                    />
                    <p className="text-base font-bold tracking-tight text-slate-800">
                      {service.label}
                    </p>
                  </a>
                ) : (
                  <Link
                    href={service.href!}
                    key={service.key}
                    className="flex items-center gap-6 rounded-lg px-3 py-3 transition duration-300 hover:bg-gray-200"
                    onClick={() => setIsOpen(false)}
                  >
                    <Image
                      src={service.icon}
                      alt={`${IMAGE_ALT} ${service.label}`}
                      width={25}
                      height={25}
                    />
                    <p className="text-base font-bold tracking-tight text-slate-800">
                      {service.label}
                    </p>
                  </Link>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
