import React, { useState, useRef } from "react";
import html2pdf from "html2pdf.js";
import "./CreateLetter.css";
import { assets } from "../assets/assets";
import BikramSambat from 'bikram-sambat-js';

const englishToNepaliNumber = (num) => {
  const nepaliDigits = ['०', '१', '२', '३', '४', '५', '६', '७', '८', '९'];
  return String(num).split('').map(char => {
    return /\d/.test(char) ? nepaliDigits[char] : char;
  }).join('');
};


const getCurrentBSDate = () => {
  const bs = new BikramSambat(new Date(), 'AD');
  const bsDate = bs.toBS(); // { year, month, day }
  const nepaliFormattedDate = englishToNepaliNumber(bsDate); // "२०८१-१२-२८"
  return nepaliFormattedDate;
};





export default function CreateLetter() {
  
  const currentBSDate = getCurrentBSDate();
  
  const [form, setForm] = useState({
    recipientName: "",
    organization: "",
    letterNumber: "",
    date: currentBSDate,
    schoolName: "",
    wardNumber: "",
    fiscalYear: "",
    subject: "लेखा परीक्षकमा नियुक्ति सम्बन्धमा ।",
    amount: "",
    signatory: "हरिचन्द्र सापकोटा",
    position: "अधिकृतस्तरको शाखा",
  });

  const letterRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDownloadPDF = () => {
    const opt = {
      margin: 0.5,
      filename: `${form.letterNumber || "letter"}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "legal", orientation: "portrait" },
    };
    html2pdf().set(opt).from(letterRef.current).save();
  };

  const previewLetter = () => {
    return (
      <div
        ref={letterRef}
        className="letter-preview bg-white p-10 rounded-lg border border-gray-300 shadow-xl mt-2 text-[15px] leading-5 text-justify"
        contentEditable={true}
        suppressContentEditableWarning={true}
      >
        <div className="header1">
          <p>हेटौंडा उपमहानगरपालिका</p>
        </div>
        <div className="mb-2">
          <div className="flex justify-between items-start">
            <img src={assets.logo1} alt="Logo Left" className="logo h-20 w-20 object-contain" />
            <div className="text-center w-full -ml-20">
              <h2 className="text-1xl font-bold"> नगर कार्यपालिकाको कार्यालय </h2>
              <p className="text-sm">
                हेटौंडा, मकवानपुर <br />
                बागमती प्रदेश, नेपाल
              </p>
            </div>
            <img src={assets.logo} alt="Logo Right" className="logo h-20 w-20 object-contain" />
          </div>
        </div>

        <div className="mb-2 flex justify-between">
          <div className="space-y-1">
            <p>पत्र संख्या: {form.letterNumber}</p>
            <p>शाखा: शिक्षा विकास महाशाखा</p>
            <p>चलानी नं.: </p>
          </div>
          <p className="text-right">मिति: {form.date}</p>
        </div>

        <p className="text-center font-bold underline mb-2">विषय: {form.subject}</p>

        <div className="mb-2">
          <p>श्री {form.recipientName}<br />{form.organization}</p>
        </div>

        <div className="mt-2 whitespace-pre-line text-justify">
          <p>
            हेटौंडा उपमहानगरपालिकाको {form.date} को सूचना अनुसार सामुदायिक विद्यालयमा लेखा परीक्षण गर्न इच्छुक भई यस हेटौंडा उपमहानगरपालिकामा आशयपत्र पेश गर्नु भएकोमा हेटौंडा उपमहानगरपालिका नगर कार्यपालिकाको मिति २०७९/१०/१९ को बैठकबाट गठन भएको लेखा परीक्षक सिफारिस समितिको मिति २०७९/१०/२९ को बैठकको निर्णयका आधारमा तपाईलाई देहायबमोजिमको विद्यालयको आर्थिक वर्ष {form.fiscalYear} र सोभन्दा अगाडी लेखा परीक्षण नभएको भए सोको समेत सम्पुर्ण सेस्ताको आयव्यय विवरण, वार्षिक वासलात, जिन्सी मौज्दातको वर्तमान शिक्षा ऐन तथा नियमावली, आर्थिक ऐन तथा नियमावली, सार्वजनिक खरिद ऐन तथा नियमावली एवं नेपाल सरकारको प्रचलित कानुन बमोजिम लेखा परीक्षण गर्न तोकिएको व्यहोरा अनुरोध छ ।
          </p>

          <p className="font-semibold mt-2">लेखा परिक्षकले पालना गर्नु पर्ने शर्तहरु :</p>
          <ol className="list-decimal list-inside space-y-1">
            <li>{englishToNepaliNumber(1)}.लेखा परिक्षकले व्यक्तिगत परिचय खुल्ने प्रमाणपत्र साथमा लिई नियुक्ति पत्र बुझ्न स्वयं उपस्थित हुनु पर्नेछ । साथै आफुलाई तोकिएको विद्यालय संस्थामा स्वयम् उपस्थित भई लेखापरिक्षण गर्नुपर्नेछ । अरु कसैबाट गराएको पाइएमा कानून बमोजिम कारबाहि गरिनेछ ।</li>
            <li>{englishToNepaliNumber(2)}.आफूलाई तोकिएको विद्यालयमा यथाशिघ्र सम्पर्क गरी नियुक्ति पत्र बुझेको २१ दिन भित्र कार्य सम्पन्न गरी तोकिएको ढाँचामा प्रतिवेदन तयार गरी पेश गर्नुपर्नेछ । तोकिएको अवधि भित्र लेखापरीक्षण हुन नसकेमा सोको कारण सहित लिखित जानकारी कार्यालयमा पेश गर्नुपर्नेछ ।</li>
            <li>{englishToNepaliNumber(3)}.लेखा परिक्षकको पारिश्रमिक यस कार्यालयवाट भुक्तानी सिफारिस भए पश्चात सम्बन्धित विद्यालयबाट हुनेछ । लेखापरीक्षकको पारिश्रमिक देहायबमोजिम हुनेछ ।
              <ul className="list-disc list-inside ml-4">
                <li>क) विद्यालयको जम्मा कारोबारको २५ लाख सम्मको रु ५,०००।- (पाँच हजार मात्र)</li>
                <li>ख) त्यस पछिको प्रत्येक ५ लाखको कारोबारमा थप रु १,०००।- (एक हजार मात्र) को दरले ।</li>
              </ul>
            </li>
            <li>
            {englishToNepaliNumber(4)}.लेखापरिक्षकले विद्यालयको श्रेस्ता, आम्दानी रसिद, चेकबुक, पासबुक, जिन्सी सम्पति विवरण, विद्यालयको बचत, चल्ती र मुद्दती खातामा रहेको रकम, विविध शिर्षकमा भएको अनुदान र आयहरुको साथै विगतको पेश्की, बेरुजु फछ्यौटको अवस्था, करकट्टि, रकमकट्टि दाखिला, आयव्यय विवरण, कर, सटर भाडा, अन्य भाडा, शिक्षक कर्मचारीको हाजीरी, प्रचलित कानूनको परीपालन, अर्थिक सुशासन तथा पारदर्शीता र औचित्यता समेलको अध्ययन गरी प्रतिवेदन पेश गर्ने ।
            </li>
          </ol>
        </div>

        <div className="mt-4 text-[15px] leading-4">
          <p className="font-semibold">लेखा परीक्षण गर्नुपर्ने विद्यालय:</p>
          <p>श्री {form.schoolName} विद्यालय, हेटौंडा उपमहानगरपालिका वडा नं. {form.wardNumber}</p>
          <p>बोधार्थ: श्री आर्थिक प्रशासन शाखा, हेटौंडा उपमहानगरपालिका</p>
        </div>

        <div className="mt-4 text-right">
          <p>{form.signatory}</p>
          <p>{form.position}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-10 max-w-5xl mx-auto bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
        पत्र तयार पार्नुहोस्
      </h1>

      <div className="inputs grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" name="recipientName" onChange={handleChange} placeholder="प्राप्तकर्ता नाम" className="input" />
        <input type="text" name="organization" onChange={handleChange} placeholder="संस्था / कम्पनी नाम" className="input" />
        <input type="text" name="letterNumber" onChange={handleChange} placeholder="पत्र संख्या" className="input" />
        <input type="text" name="date" onChange={handleChange} placeholder="मिति" className="input" />
        <input type="text" name="subject" onChange={handleChange} placeholder="विषय" className="input" />
        <input type="text" name="schoolName" onChange={handleChange} placeholder="विद्यालय नाम" className="input" />
        <input type="text" name="wardNumber" onChange={handleChange} placeholder="वडा नम्बर" className="input" />
        <input type="text" name="fiscalYear" onChange={handleChange} placeholder="आर्थिक वर्ष" className="input" />
        <input type="text" name="amount" onChange={handleChange} placeholder="रकम (रु)" className="input" />
        <input type="text" name="signatory" onChange={handleChange} placeholder="प्रमाणित गर्ने व्यक्ति" className="input" />
        <input type="text" name="position" onChange={handleChange} placeholder="पद" className="input" />
      </div>

      <div className="text-center mt-6">
        <button
          onClick={handleDownloadPDF}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded shadow-md"
        >
          PDF डाउनलोड गर्नुहोस्
        </button>
      </div>

      {previewLetter()}
    </div>
  );
}
