"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import PageHeader from "@/components/layout/header";
import Image from "next/image";

export default function RegisterPage() {
  const router = useRouter();

  const [firstName, setFirstName] =
    useState("");

  const [lastName, setLastName] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [confirmPassword, setConfirmPassword] =
    useState("");

  const handleRegister = () => {
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password
    ) {
      alert("Tüm alanları doldurun");
      return;
    }

    if (password !== confirmPassword) {
      alert("Şifreler eşleşmiyor");
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password,
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    router.push("/login");
  };

  return (
    <>
      <PageHeader title="Kayıt Ol" />

      <section className="mx-auto max-w-[700px] px-6 py-16">

        <div className="space-y-8">

          <input
            placeholder="İsim"
            value={firstName}
            onChange={(e) =>
              setFirstName(e.target.value)
            }
            className="w-full border-b bg-transparent pb-2 outline-none"
          />

          <input
            placeholder="Soyisim"
            value={lastName}
            onChange={(e) =>
              setLastName(e.target.value)
            }
            className="w-full border-b bg-transparent pb-2 outline-none"
          />

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

          <input
            type="password"
            placeholder="Şifre Tekrar"
            value={confirmPassword}
            onChange={(e) =>
              setConfirmPassword(e.target.value)
            }
            className="w-full border-b bg-transparent pb-2 outline-none"
          />

          <button
            onClick={handleRegister}
            className="w-full rounded-full bg-[#00852B] py-3 text-white"
          >
            Kayıt Ol
          </button>
          <div className="mt-8">

  <div className="mb-6 flex items-center gap-4">

    <div className="h-[1px] flex-1 bg-[#00852B]" />

    <span className="text-[12px] text-[#666]">
      VEYA
    </span>

    <div className="h-[1px] flex-1 bg-[#00852B]" />

  </div>

  <div className="flex items-center gap-4">

  

</div>

<button className="mb-4 flex h-[46px] w-full items-center justify-center rounded-full border border-[#2B2B2B] bg-white">

  <Image
    src="/logo/google.png"
    alt="Google"
    width={28}
    height={28}
  />

</button>

<button className="mb-4 flex h-[46px] w-full items-center justify-center rounded-full border border-[#2B2B2B] bg-[#395398]">

  <Image
    src="/logo/facebook1.png"
    alt="Facebook"
    width={20}
    height={20}
  />

</button>

<button className="mb-4 flex h-[46px] w-full items-center justify-center rounded-full border border-[#2B2B2B] bg-black">

  <Image
    src="/logo/apple.png"
    alt="Apple"
    width={22}
    height={22}
  />

</button>

</div>

        </div>

      </section>
    </>
  );
}