import PageHeader from "@/components/layout/header";

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Hakkımızda" />

      <section className="mx-auto max-w-[1440px] px-6 py-12">

        <h1 className="mb-8 text-[38px] font-bold text-[#111]">
          Tek Top: Futbolun Saf Ruhuna Dönüş
        </h1>

        <div className="space-y-10 text-[18px] leading-[1.8] text-[#222]">

          <div>
            <h2 className="mb-3 text-[28px] font-bold">
              Biz Kimiz?
            </h2>

            <p>
              "Tek Top", endüstriyel futbolun karmaşasından,
              siyasi tartışmaların gölgesinden ve kutuplaşmanın
              gürültüsünden uzaklaşarak; futbolu yalnızca futbol
              olarak görenlerin buluşma noktasıdır.
              Bizler, maç günü heyecanını, mahalle maçlarındaki
              samimiyeti ve oyunun birleştirici gücünü merkeze
              alan bir vizyonun temsilcileriyiz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[28px] font-bold">
              Misyonumuz: Sadece Futbol
            </h2>

            <p>
              Günümüzde futbol, saha içindeki estetiğinden ziyade saha dışındaki tartışmalarla anılır hale gelmiştir. "Tek Top" olarak temel misyonumuz; futbolun üzerine çöken siyasi ve ideolojik yükleri bir kenara bırakarak, odağı yeniden oyunun kendisine çevirmektir. Amacımız, renklerin rekabetini bir savaş değil, bir kültür mozaiği olarak konumlandırmak ve taraftarlığı "ortak bir tutku" paydasında birleştirmektir.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[28px] font-bold">
              Vizyonumuz: Sınırları Aşan Bir Oyun
            </h2>

            <p>
              Futbolun dili evrenseldir. Bir topun peşinde koşan herkesin aynı dili konuştuğuna inanıyoruz. Vizyonumuz; stadyumları gerginlik alanları olmaktan çıkarıp, her yaştan ve her görüşten insanın sadece "güzel oyunu" izlemek için bir araya geldiği bir gelecek inşa etmektir. Siyasetin ayrıştırıcı dili yerine, sporun birleştirici estetiğini savunuyoruz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[28px] font-bold">
              Neden "Tek Top"?
            </h2>

            <p>
              İsim babalığını yaptığımız "Tek Top" kavramı, sadeliği temsil eder. Karmaşık stratejiler, finansal tablolar veya siyasi ajandalar arasında kaybolan futbol dünyasında; ihtiyacımız olan tek şeyin bir top ve oyunun ruhu olduğunu hatırlatıyoruz. Logomuzdan kampanyalarımıza kadar her detayda bu minimalist ve özcü yaklaşımı benimsiyoruz.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-[28px] font-bold">
              Değerlerimiz
            </h2>

            <ul className="list-disc space-y-2 pl-8">

              <li>
                Tarafsızlık: Futbolun her türlü siyasi
                görüşten üstün olduğuna inanırız.
              </li>

              <li>
                Saygı: Rakibe, hakeme ve formaya duyulan
                saygıyı sporun temeli kabul ederiz.
              </li>

              <li>
                Estetik: Güzel futbolu ve oyunun zarafetini
                ön plana çıkarırız.
              </li>

              <li>
                Kardeşlik: Rekabetin dostluğu gölgelememesi
                gerektiğine inanırız.
              </li>

            </ul>
          </div>

        </div>

      </section>
    </>
  );
}