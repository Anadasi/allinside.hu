import Cta from "@/components/Common/Cta";
import Navbar from "@/components/Layout/Navbar";
import PageBanner from "@/components/Layout/PageBanner";

export default function Page() {
  return (
    <>
      <Navbar />

      <PageBanner
        pageTitle="Adatkezelési tájékoztató"
        shortText="Az Ön bizalma kiemelten fontos számunkra. Elkötelezettek vagyunk pácienseink személyes adatainak védelme mellett, és garantáljuk azok biztonságos, bizalmas kezelését."
        homePageUrl="/"
        homePageText="Home"
        activePageText="Adatkezelési tájékoztató"
        image="/images/page-banner.png"
      />

      <div className="privacy-policy-area ptb-140">
        <div className="container">
          <div className="privacy-policy-content">
            <p>
              <i>Az Adatkezelési tájékoztató legutolsó frissítése: 2026. január 30.</i>
            </p>
            <h3>
              <span>1.</span> Az Adatkezelő adatai
            </h3>
             <ul>
              <li>Név: Dr. Majzik Ernő</li>
              <li>Cégnév: Knee Life Kft.</li>
              <li>Székhely: 2045 Törökbálint, Tükörhegy utca 15. 1. ép.</li>
               <li>Adószám: 25078754-2-13</li>
              <li>Email: rendeles@drmajzikerno.hu</li>
              <li>Telefon: +36 30 940 5846</li>
            </ul>
            <h3>
              <span>2.</span> A kezelt adatok köre és célja
            </h3>
            <p>Az oldal használata során az alábbi célokból gyűjtünk adatokat:</p>
            <ul>
            <li>Kapcsolatfelvétel: Amikor Ön üzenetet küld nekünk, vagy időpontot kér tőlünk. (Név, e-mail cím, telefonszám).</li>
            <li>Időpontfoglalás: Az egészségügyi szolgáltatás igénybevételéhez szükséges alapvető adatok.</li>
            <li>Sütik (Cookies): A weboldal alapvető működéséhez és statisztikai elemzésekhez (pl. látogatószám mérése).</li>
            </ul>
            <h3>
              <span>3.</span> Az adatkezelés jogalapja
            </h3>
            <p>
            Az adatkezelés az Ön önkéntes hozzájárulásán alapul (GDPR 6. cikk (1) bekezdés a. pont), illetve egészségügyi szolgáltatás esetén jogi kötelezettség teljesítésén.
            </p>
            <h3>
              <span>4.</span> Az adatok tárolásának időtartama
            </h3>
                  <ul>
              <li>A kapcsolati űrlapon megadott adatokat a válaszadást követő 1 évig őrizzük meg.</li>
              <li>A számlázási adatokat a törvényi előírásoknak megfelelően 8 évig tároljuk.</li>
                  </ul>
            <h3>
              <span>5.</span> Adatfeldolgozók (Kik láthatják még az adatokat?)
            </h3>
            <p>
            Az adatokat harmadik félnek nem adjuk el. Bizonyos technikai szolgáltatók azonban hozzáférhetnek az adatokhoz:
            </p>
            <ul>
            <li>
          A weboldal üzemeltetéséhez az Adatkezelő adatfeldolgozót vesz igénybe, aki a technikai hátteret biztosítja.
  <strong>Tárhelyszolgáltatás, infrastruktúra:</strong> Vercel Inc.<br />
  <strong>Székhely:</strong> 440 N Barranca Ave 4133, Covina, CA 91723, USA<br />
  <strong>Weboldal:</strong> https://vercel.com<br />
    <strong>Email:</strong> privacy@vercel.com<br />
  <strong>Adatkezelés célja:</strong> Weboldal technikai kiszolgálása, szerveroldali infrastruktúra biztosítása.<br />
  <strong>Kezelt adatok:</strong> A látogató IP-címe, a látogatás időpontja, böngésző típusa, amelyek a szervernaplózáshoz szükségesek. Az adatok (például a naplófájlokban lévő IP-címek) elhagyhatják az EU területét, a Vercel azonban megfelel a nemzetközi adatvédelmi előírásoknak (SCC - Standard Contractual Clauses).
</li>
<li>
  <strong>Domain regisztrátor és DNS szolgáltató:</strong> C3 Nonprofit Kft.<br />
  <strong>Székhely:</strong> 1024 Budapest, Orló utca 9.<br />
  <strong>Weboldal:</strong> http://www.c3.hu<br />
  <strong>Adatkezelés célja:</strong> Domain név fenntartása, DNS szolgáltatás és e-mail átirányítás biztosítása.<br />
  <strong>Kezelt adatok:</strong> Domain kapcsolattartói adatok, technikai azonosítók, e-mail továbbítás esetén a küldő és címzett adatai.
</li>
<li>
  <strong>E-mail szolgáltató:</strong> Google Ireland Limited<br />
  <strong>Székhely:</strong> Gordon House, Barrow Street, Dublin 4, Írország<br />
  <strong>Weboldal:</strong> https://policies.google.com/privacy<br />
  <strong>Adatkezelés célja:</strong> E-mail levelezőrendszer biztosítása, elektronikus kapcsolattartás.<br />
  <strong>Kezelt adatok:</strong> Név, e-mail cím, üzenet tartalma, a levelezés során megadott egyéb személyes adatok.
</li>
            </ul>
            <h3>
              <span>6.</span> Az Ön jogai
            </h3>
            <p>Önnek joga van:</p>
            <ul>
            <li>Tájékoztatást kérni személyes adatai kezeléséről.</li>
            <li>Kérni adatainak helyesbítését vagy törlését.</li>
            <li>Tiltakozni az adatkezelés ellen.</li>
            <li>Adathordozhatósághoz való jogával élni.</li>
              </ul>
               <h3>
              <span>7.</span> Jogorvoslati lehetőségek
            </h3>
            <p>Amennyiben úgy érzi, megsértettük adatait, kérjük, keressen minket bizalommal a fenti e-mail címen. Emellett panasszal fordulhat a hatósághoz is:</p>
            <ul>
            <li>NAIH (Nemzeti Adatvédelmi és Információszabadság Hatóság)</li>
            <li>Cím: 1055 Budapest, Falk Miksa utca 9-11.</li>
            <li>Honlap: www.naih.hu</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
}
