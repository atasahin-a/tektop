"use client";

import { useEffect, useState } from "react";
import PageHeader from "@/components/layout/header";
import Link from "next/link";

export default function ProfilePage() {
  const [user, setUser] =
    useState<any>(null);

  useEffect(() => {
    const savedUser = JSON.parse(
      localStorage.getItem("user") || "null"
    );

    const loggedIn =
      localStorage.getItem("loggedIn");

    if (
      savedUser &&
      loggedIn === "true"
    ) {
      setUser(savedUser);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem(
      "loggedIn"
    );

    window.location.reload();
  };

  if (!user) {
    return (
      <>
        <PageHeader title="Profil" />

        <section className="mx-auto max-w-[1200px] px-6 py-16">

          <div className="grid grid-cols-2 gap-24">

            {/* Sol */}

            <div>

              <h2 className="mb-8 text-[28px] font-semibold">
                OTURUM AÇ
              </h2>

              <Link
                href="/login"
                className="block w-fit rounded-full bg-[#00852B] px-10 py-3 text-white"
              >
                Giriş Yap
              </Link>

              <Link
                href="/register"
                className="mt-4 block w-fit rounded-full border border-[#00852B] px-10 py-3 text-[#00852B]"
              >
                Kayıt Ol
              </Link>

            </div>

            {/* Sağ */}

            <div>

              <h2 className="mb-8 text-[28px] font-semibold">
                SİPARİŞ DURUMUNU
                KONTROL ET
              </h2>

              <input
                placeholder="Sipariş Numarası"
                className="mb-6 w-full border-b bg-transparent pb-2 outline-none"
              />

              <input
                placeholder="Sipariş E-Postası"
                className="mb-8 w-full border-b bg-transparent pb-2 outline-none"
              />

              <button className="rounded-full bg-[#00852B] px-12 py-3 text-white">
                Kontrol Et
              </button>

            </div>

          </div>

        </section>
      </>
    );
  }
      return (
  <>
    <PageHeader title="Profil" />

    <section className="mx-auto max-w-[1200px] px-6 py-16">

      <div className="grid grid-cols-2 gap-24">

        {/* Sol Taraf */}

        <div>

          <h2 className="mb-8 text-[28px] font-semibold">
            {user ? "HESABIM" : "OTURUM AÇ"}
          </h2>

          {user ? (
            <>
              <p className="mb-4 text-[22px] font-medium">
                {user.firstName} {user.lastName}
              </p>

              <p className="mb-8 text-gray-600">
                {user.email}
              </p>

              <button
                onClick={logout}
                className="rounded-full bg-red-500 px-8 py-3 text-white"
              >
                Çıkış Yap
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="block w-fit rounded-full bg-[#00852B] px-10 py-3 text-white"
              >
                Giriş Yap
              </Link>

              <Link
                href="/register"
                className="mt-4 block w-fit rounded-full border border-[#00852B] px-10 py-3 text-[#00852B]"
              >
                Kayıt Ol
              </Link>
            </>
          )}

        </div>

        {/* Sağ Taraf */}

        <div>

          <h2 className="mb-8 text-[28px] font-semibold">
            SİPARİŞ DURUMUNU KONTROL ET
          </h2>

          <input
            placeholder="Sipariş Numarası"
            className="mb-6 w-full border-b bg-transparent pb-2 outline-none"
          />

          <input
            placeholder="Sipariş E-Postası"
            className="mb-8 w-full border-b bg-transparent pb-2 outline-none"
          />

          <button className="rounded-full bg-[#00852B] px-12 py-3 text-white">
            Kontrol Et
          </button>

        </div>

      </div>

    </section>
  </>
);
}