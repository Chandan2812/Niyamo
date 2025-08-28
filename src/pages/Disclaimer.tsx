import Footer from "../components/Footer";
import Navbar from "../components/Nav";
import NewsSubscribeSection from "../components/Newsletter";

function Disclaimer() {
  return (
    <div className="bg-white dark:bg-black">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-28 ">
        <h1 className="text-2xl font-bold mb-6 text-center text-black dark:text-white">
          Disclaimer
        </h1>
        <div className="space-y-4 text-justify leading-relaxed text-gray-700 dark:text-gray-200">
          <p>
            This document and information contained herein is provided by Dalma
            Capital Management Limited (“Dalma Capital”), a fund manager
            established in the Dubai International Financial Centre (“DIFC”) and
            regulated by the Dubai Financial Services Authority (“DFSA”), for
            information purposes only.
          </p>
          <p>
            This document does not constitute or form part of any offer or
            invitation to sell or issue, or any solicitation of an offer to buy
            or subscribe for any securities or interests in any fund or
            investment product described herein, nor shall any securities or
            interests in any fund or investment product be offered or sold, to
            any person in any jurisdiction in which such offer, solicitation,
            purchase or sale would be unlawful under the securities laws of such
            jurisdiction. Neither the DFSA nor any other authority in any
            jurisdiction has not approved this document nor taken any steps to
            verify the information set out herein, and has no responsibility for
            it.
          </p>
          <p>
            The information contained in this document has been compiled as of
            the date hereof (unless otherwise stated herein) from Fern
            Hospitality Ventures and from other sources. While information
            obtained from published sources or otherwise from third parties and
            used herein is believed to be accurate and reliable, none of Fern
            Hospitality Ventures, Dalma Capital, their affiliates and their
            respective directors, officers, employees, partners, shareholders,
            advisers and agents has independently verified such information or
            the assumptions on which it is based and cannot guarantee its
            accuracy, completeness or fairness.
          </p>
          <p>
            The information in this document includes estimates and projections
            and involves significant elements of subjective judgement and
            analysis. Investments are subject to various risks, including market
            fluctuations, regulatory change, possible delays in repayment, and
            loss of income and principal invested. The value of investments can
            fall as well as rise, and you may not get back the amount originally
            invested. Past performance is not indicative of future results. No
            representation or warranty, express or implied, is made as to the
            accuracy or completeness of the information contained herein, and
            Dalma Capital expressly disclaims any liability for any loss arising
            from reliance on this document, to the extent permissible under
            applicable law.
          </p>
          <p>
            This document is intended for Professional Clients only (as
            specified in the DFSA Rules) and must not therefore, be delivered
            to, or relied upon by, a Retail Client (as specified in the DFSA
            Rules).
          </p>
          <p>
            Prospective investors should conduct their own due diligence and
            consult with their own professional advisers as to the legal, tax,
            financial or other matters relevant to the suitability of an
            investment in securities or any fund or product described herein.
          </p>
          <p>
            If you do not understand the contents of this document, you should
            consult an authorized financial adviser. This document may not be
            distributed to, or relied upon by, any person in any jurisdiction
            where such distribution or reliance would be contrary to local law
            or regulation.
          </p>
        </div>
      </div>

      <NewsSubscribeSection />
      <Footer />
    </div>
  );
}

export default Disclaimer;
