"use client";

import { useState } from "react";
import PageHeader from "@/components/layout/header";

export default function CheckoutPage() {
  const [cardNumber, setCardNumber] =
    useState("");

  const [expiryDate, setExpiryDate] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const [secure3D, setSecure3D] =
    useState(false);

  const handlePayment = () => {
  if (
  cardNumber.replace(/\s/g, "")
    .length !== 16
) {
    alert(
      "Kart numarası 16 haneli olmalıdır."
    );
    return;
  }

  if (expiryDate.length !== 5) {
    alert(
      "Son kullanma tarihini giriniz."
    );
    return;
  }

  if (cvv.length !== 3) {
    alert(
      "CVV 3 haneli olmalıdır."
    );
    return;
  }

  alert("Ödeme Başarılı");
};

  return (
    <>
      <PageHeader title="Market" />

      <section className="mx-auto max-w-[600px] px-6 py-24">

        <h1 className="mb-12 text-center text-[34px] font-semibold">
          ÖDEME BİLGİLERİ
        </h1>

        <div className="space-y-10">

         <input
  placeholder="Kart Numarası"
  value={cardNumber}
  maxLength={19}
  onChange={(e) => {
    let value = e.target.value.replace(
      /\D/g,
      ""
    );

    value = value
      .replace(
        /(\d{4})(?=\d)/g,
        "$1 "
      )
      .trim();

    setCardNumber(value);
  }}
  className="w-full border-b bg-transparent pb-2 outline-none"
/>

         <input
  placeholder="AA/YY"
  value={expiryDate}
  maxLength={5}
  onChange={(e) => {
    let value = e.target.value.replace(
      /\D/g,
      ""
    );

    if (value.length >= 3) {
      value =
        value.slice(0, 2) +
        "/" +
        value.slice(2, 4);
    }

    setExpiryDate(value);
  }}
  className="w-full border-b bg-transparent pb-2 outline-none"
/>

          <input
  placeholder="CVV"
  value={cvv}
  maxLength={3}
  onChange={(e) =>
    setCvv(
      e.target.value.replace(/\D/g, "")
    )
  }
  className="w-full border-b bg-transparent pb-2 outline-none tracking-[4px]"
/>

          <label className="flex items-center gap-2 text-[14px]">

            <input
              type="checkbox"
              checked={secure3D}
              onChange={() =>
                setSecure3D(!secure3D)
              }
            />

            3D Secure ile Öde

          </label>

          <button
            onClick={handlePayment}
            className="w-full rounded-full bg-[#00852B] py-3 text-white"
          >
            SATIN AL
          </button>

        </div>

      </section>
    </>
  );
}