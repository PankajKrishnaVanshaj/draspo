"use client";

import { HeaderData } from "@/Constant/HeaderData";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";

function Header() {
  const { status, data } = useSession();
  const [openInfo, setOpenInfo] = useState(false);

  return (
    <header className="bg-black">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Link href={"/"}>
          <Image
            src="/draspo.png"
            alt="logo"
            width={100}
            height={100}
            className="mt-4"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {HeaderData.map((data) => (
                <li key={data.label}>
                  <Link
                    href={data.route}
                    className="text-white transition hover:text-gray-100"
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* authentication */}
          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="block rounded-md  px-5 py-2.5 text-sm font-medium text-white transition ">
                {status === "authenticated" ? (
                  <>
                    <Image
                      className="rounded-full w-10 h-10"
                      src={data?.user?.image!}
                      alt="logo"
                      width={60}
                      height={60}
                      onClick={() => setOpenInfo((prev) => !prev)}
                    />
                    {openInfo && (
                      <>
                        <ul className="">
                          <li>{data?.user?.name}</li>
                          <li>{data?.user?.email}</li>
                          <li>
                            <button
                              onClick={() => signOut()}
                              className="bg-slate-900 text-white px-6 py-2 rounded-md"
                            >
                              Sign Out
                            </button>{" "}
                          </li>
                        </ul>
                      </>
                    )}
                  </>
                ) : (
                  <button
                    onClick={() => signIn("google")}
                    className="bg-slate-900 text-white px-6 py-2 rounded-md"
                  >
                    Sign In
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
