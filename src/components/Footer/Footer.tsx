import { IMAGE_ALT } from "@/constants";
import { CONTACT_US_ITEMS } from "@/constants/contact-info.cst";
import { MOBILE_NAV_LINKS } from "@/constants/navbar.cst";
import Image from "next/image";
import Link from "next/link";
import { isMobile } from "react-device-detect";

export const Footer = () => {
  return (
    <div className="relative w-full bg-slate-100 pt-4">
      <div className="max-container mt-10 pb-16 lg:mt-20">
        <div className="flex flex-col items-start justify-center gap-[10%] lg:flex-row">
          {isMobile && (
            <div>
              <Link href="/" className="mb-10 flex items-center gap-x-3">
                <Image
                  src="/images/logo.webp"
                  alt={IMAGE_ALT}
                  width={50}
                  height={50}
                  className="object-contain"
                />
                <h2 className="text-balance font-semibold text-gray-30 lg:hidden">
                  Sunshine Somewhere
                </h2>
              </Link>
            </div>
          )}

          <div className="flex flex-wrap gap-x-20 gap-y-8 sm:justify-between md:flex-nowrap lg:flex-1">
            <div className="flex flex-col gap-5">
              <div>
                <h4 className="text-lg font-bold">Contact Us</h4>
              </div>

              <div className="flex flex-col gap-y-4">
                {CONTACT_US_ITEMS.map((category, index) => (
                  <div key={`${category.label}_${index}`}>
                    {category.children.map((item) => {
                      return (
                        <div
                          className="flex items-center gap-x-4"
                          key={item.key}
                        >
                          <Link href={item.href}>
                            <p className="max-w-[250px] text-balance text-sm font-medium text-gray-30">
                              {item.label}
                            </p>
                          </Link>
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-16 gap-y-8 sm:justify-between lg:grid lg:flex-1 lg:grid-cols-3">
              {MOBILE_NAV_LINKS.map((category) => (
                <div key={category.key} className="flex flex-col gap-5">
                  <h4 className="text-lg font-bold">{category.label}</h4>

                  <div className="flex flex-col gap-y-3">
                    {category.children.map((item) => {
                      return item.href ? (
                        <Link key={item.key} href={item.href}>
                          <p className="text-sm font-medium text-gray-30">
                            {item.label}
                          </p>
                        </Link>
                      ) : (
                        <div key={item.key}>
                          <p className="text-sm font-medium text-slate-700">
                            {item.label}
                          </p>
                          {item.children && (
                            <div className="ml-4 mt-2 flex flex-col gap-y-2">
                              {item.children.map((child) => (
                                <Link
                                  key={child.key}
                                  href={child.href!}
                                  className="text-sm font-medium text-gray-30"
                                >
                                  - {child.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="my-10 h-[1px] border bg-gray-20 lg:my-10"></div>

        <p className="w-full text-center text-[14px] text-gray-30">
          &copy; {new Date().getFullYear()} | Sunshine Somewhere Vacation
          Rentals | All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
