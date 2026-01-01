import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'tr' | 'en';

interface Translations {
  navbar: {
    about: string;
    career: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  biography: {
    title: string;
    sections: {
      roots: {
        title: string;
        date: string;
        text: string;
      };
      tech: {
        title: string;
        date: string;
        text: string;
        list1: string;
        list2: string;
      };
      social: {
        title: string;
        date: string;
        text: string;
      };
      global: {
        title: string;
        date: string;
        text1: string;
        text2: string;
      };
    };
  };
  career: {
    title: string;
    subtitle: string;
    items: {
      ericsson: { role: string; desc: string; };
      turkcell: { role: string; desc: string; };
      unhcr: { role: string; desc: string; };
      digiturk: { role: string; desc: string; };
      public: { role: string; desc: string; };
    };
    quote: string;
  };
  footer: {
    rights: string;
  };
}

const translations: Record<Language, Translations> = {
  tr: {
    navbar: {
      about: 'HAKKIMDA',
      career: 'KARİYER',
      contact: 'İLETİŞİM'
    },
    hero: {
      title: 'Sanat, İnovasyon ve Stratejinin',
      subtitle: "Ali Güçlü, 90'lı yıllardan günümüze uzanan kariyerinde; girişimcilikten dijital devrime, sivil toplum liderliğinden uluslararası kültür projelerine uzanan çok katmanlı bir stratejist kimliğiyle öne çıkmaktadır.",
      cta: 'Hikayemi Oku'
    },
    biography: {
      title: 'Vizyon Yolculuğu',
      sections: {
        roots: {
          title: 'Çok Yönlü Girişimcilik Temelleri',
          date: "1990'lar • Kökler",
          text: "İş dünyasındaki yolculuk, 90'lı yılların dinamik yapısında geniş bir vizyonla başladı. Ege’de tarım ve ihracat (mandalina bahçeleri) ile üretime katılırken, eş zamanlı olarak kuyumculuk, otomotiv ve teknoloji perakendeciliği sektörlerinde deneyim kazanıldı. Bu dönemdeki en dikkat çekici teknik girişim, yerli radyo istasyonu üretimi ve montajı üzerine kurulan altyapı çalışmaları oldu."
        },
        tech: {
          title: 'Dijital Dönüşüm ve Medya Entegrasyonu',
          date: "2000'ler • Teknoloji",
          text: "2000'li yıllar, teknoloji ve medyanın birleştiği \"ilk\"lerin dönemidir. Ericsson Mobility World bünyesinde (2002-2008) İş Ortağı (Geliştirici ve İçerik Partneri) olarak, Türkiye'de mobil teknolojilerin medya ile buluşmasına öncülük edilmiştir.",
          list1: "Sektörel İlkler: Tatlıses Dijital ve İzzet Yıldızhan Show ortaklıklarıyla medyada dijitalleşme adımları. Türkiye’nin ilk interaktif medya programı kurgusu, ilk Radyo SMS sistemi ve SMS ile ödeme altyapıları.",
          list2: "Turkcell İş Ortaklığı: Turkcell ekosistemi için İş Ortağı olarak 50’ye yakın katma değerli servis (VAS) geliştirilmesi; özel sanatçı içeriklerinden spor servislerine kadar GSM ve medya dünyasını birleştiren köprü projeler."
        },
        social: {
          title: 'Sosyal Sorumluluk ve Stratejik Liderlik',
          date: '2003-2006 ve Sonrası • Toplum',
          text: "Teknolojik yetkinlik toplumsal faydaya dönüştürülerek, Birleşmiş Milletler Mülteciler Yüksek Komiserliği (UNHCR) ile İş Ortağı statüsünde stratejik projeler yürütüldü. Muazzez Ersoy’un İyi Niyet Elçiliği süreci, Grup Ayna ile farkındalık konserleri ve dünyada bir ilk olan \"SMS ile Bağış\" mobil uygulaması hayata geçirildi. Ayrıca SGDD (Sığınmacılar ve Göçmenlerle Dayanışma Derneği) ve HASVAK İstanbul Başkanlığı görevleri üstlenildi."
        },
        global: {
          title: 'Kültürel Vizyon ve Küresel Projeler',
          date: '2012 - Günümüz • Global',
          text1: "Yerel deneyimler küresel vizyonla birleştirilerek, Digitürk ile stratejik İş Ortaklıkları kuruldu. İslam, Musevilik ve Hristiyanlık gibi inanç sistemlerine yönelik küresel çapta dijital içerik ve kültürel yayıncılık projeleri geliştirildi.",
          text2: "2013 Türk Dünyası Kültür Başkentliği sürecinde, Azerbaycan Medyasını temsilen Türkvizyon Şarkı Yarışması geliştirilip hayata geçirilerek uluslararası bir marka yaratıldı. Günümüzde; holdinglere, teknoloji firmalarına ve devlet kurumlarına \"Sanat ve İnovasyon Stratejisti\" olarak danışmanlık verilmektedir."
        }
      }
    },
    career: {
      title: 'Kariyer Kilometre Taşları',
      subtitle: 'Global devlerden uluslararası organizasyonlara uzanan, teknoloji ve liderlikle dolu bir geçmiş.',
      items: {
        ericsson: { role: 'Teknoloji İş Ortağı', desc: 'Uluslararası telekomünikasyon altyapı projelerinde içerik ve teknoloji partnerliği.' },
        turkcell: { role: 'Katma Değerli Servisler İş Ortağı', desc: "Türkiye'nin lider operatöründe dijital servisler ve içerik projelerinde iş ortaklığı." },
        unhcr: { role: 'Stratejik İş Ortağı', desc: 'Birleşmiş Milletler çatısı altında insani yardım teknolojileri geliştirmek ve tanınmış sanatçılar ile sosyal projelerin geliştirilmesi.' },
        digiturk: { role: 'Dijital Yayıncılık İş Ortağı', desc: 'Medya ve yayıncılık teknolojilerinin dijitalleşme sürecinde stratejik ortaklık.' },
        public: { role: 'Stratejik Danışman', desc: 'Devlet kurumlarının dijital dönüşüm vizyonuna katkı sağlayan projeler.' }
      },
      quote: '"Leadership is action, not position."'
    },
    footer: {
      rights: 'All Rights Reserved.'
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('tr');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};