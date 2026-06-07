"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/header";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(
      localStorage.getItem("user") || "{}"
    );

    if (
      user.email === email &&
      user.password === password
    ) {
      localStorage.setItem(
        "loggedIn",
        "true"
      );

      router.push("/profile");
    } else {
      alert("Bilgiler hatalı");
    }
  };

  return (
    <>
      <PageHeader title="Giriş Yap" />

      <section className="mx-auto max-w-[700px] px-6 py-16">

        <div className="space-y-8">

          <input
            placeholder="E-Mail"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full border-b bg-transparent pb-2 outline-none"
          />

          <input
            type="password"
            placeholder="Şifre"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full border-b bg-transparent pb-2 outline-none"
          />
          <div className="flex items-center justify-between text-[14px]">

  <label className="flex items-center gap-2 cursor-pointer">

    <input
      type="checkbox"
      className="h-4 w-4"
    />

    <span>Beni Hatırla</span>

  </label>

  <button
    type="button"
    className="text-[#006C2F] hover:underline"
  >
    Parolamı Unuttum
  </button>

</div>

          <button
            onClick={handleLogin}
            className="w-full rounded-full bg-[#00852B] py-3 text-white"
          >
            Giriş Yap
          </button>

          <div className="flex items-center gap-4">

            <div className="h-[1px] flex-1 bg-[#00852B]" />

            <span className="text-[12px] text-[#666]">
              VEYA
            </span>

            <div className="h-[1px] flex-1 bg-[#00852B]" />

          </div>

          <button className="flex h-[46px] w-full items-center justify-center rounded-full border border-[#2B2B2B] bg-white">

            <Image
              src="/logo/google.png"
              alt="Google"
              width={28}
              height={28}
            />

          </button>

          <button className="flex h-[46px] w-full items-center justify-center rounded-full bg-[#3F5AA9]">

            <Image
              src="/logo/facebook1.png"
              alt="Facebook"
              width={20}
              height={20}
            />

          </button>

          <button className="flex h-[46px] w-full items-center justify-center rounded-full bg-black">

            <Image
              src="/logo/apple.png"
              alt="Apple"
              width={22}
              height={22}
            />

          </button>

        </div>

      </section>
    </>
  );
}