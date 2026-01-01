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
  projects: {
    title: string;
    subtitle: string;
    note: string;
    tech: { title: string; desc: string; };
    gallery: { title: string; desc: string; };
    media: { title: string; desc: string; };
    footer_note: string;
  };
  footer: {
    rights: string;
    contact_title: string;
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
      quote: '"Liderlik bir unvan değil, bir eylemdir."'
    },
    projects: {
      title: 'Dijital Eko-Sistem',
      subtitle: 'Projelerim ve ilgi alanlarım için özel alanlar.',
      note: 'Bu ana sayfa sadece biyografi içindir.',
      tech: { title: 'Teknoloji & Yazılım', desc: 'Geliştirdiğim yazılım mimarileri, açık kaynak kodlu projeler ve teknik makalelerim.' },
      gallery: { title: 'Sanat Galerisi', desc: 'Küratörlüğünü yaptığım eserler, sanat eleştirilerim ve koleksiyonlarım.' },
      media: { title: 'Basın & Medya', desc: 'Röportajlar, magazin dünyasındaki yansımalar ve görsel arşiv.' },
      footer_note: '* Projeler bağımsız sub-domainlerde barındırılmaktadır.'
    },
    footer: {
      rights: 'Tüm Hakları Saklıdır.',
      contact_title: 'İletişim'
    }
  },
  en: {
    navbar: {
      about: 'ABOUT',
      career: 'CAREER',
      contact: 'CONTACT'
    },
    hero: {
      title: 'The Intersection of Art, Innovation, and',
      subtitle: "Ali Güçlü stands out as a multi-layered strategist in his career spanning from the 90s to the present; extending from entrepreneurship to the digital revolution, from civil society leadership to international cultural projects.",
      cta: 'Read My Story'
    },
    biography: {
      title: 'Vision Journey',
      sections: {
        roots: {
          title: 'Multifaceted Entrepreneurial Foundations',
          date: "1990s • Roots",
          text: "The journey in the business world began with a broad vision in the dynamic structure of the 90s. While participating in production with agriculture and export (mandarin orchards) in the Aegean, experience was gained simultaneously in jewelry, automotive, and technology retail sectors. The most striking technical initiative of this period was the infrastructure work established on domestic radio station production and assembly."
        },
        tech: {
          title: 'Digital Transformation and Media Integration',
          date: "2000s • Technology",
          text: "The 2000s are the era of 'firsts' where technology and media merged. As a Business Partner (Developer and Content Partner) within Ericsson Mobility World (2002-2008), he pioneered the meeting of mobile technologies with media in Turkey.",
          list1: "Sectoral Firsts: Digitalization steps in media with Tatlıses Digital and İzzet Yıldızhan Show partnerships. Turkey's first interactive media program setup, first Radio SMS system, and SMS payment infrastructures.",
          list2: "Turkcell Partnership: Developing nearly 50 value-added services (VAS) as a Business Partner for the Turkcell ecosystem; bridge projects combining GSM and media worlds, from special artist content to sports services."
        },
        social: {
          title: 'Social Responsibility and Strategic Leadership',
          date: '2003-2006 and Beyond • Society',
          text: "Technological competence was transformed into social benefit, carrying out strategic projects as a Business Partner with the United Nations High Commissioner for Refugees (UNHCR). Muazzez Ersoy's Goodwill Ambassadorship process, awareness concerts with Group Ayna, and the 'Donation via SMS' mobile application, a first in the world, were implemented. Additionally, duties at ASAM (Association for Solidarity with Asylum Seekers and Migrants) and HASVAK Istanbul Presidency were undertaken."
        },
        global: {
          title: 'Cultural Vision and Global Projects',
          date: '2012 - Present • Global',
          text1: "Combining local experiences with a global vision, strategic Business Partnerships were established with Digitürk. Global digital content and cultural publishing projects aimed at belief systems such as Islam, Judaism, and Christianity were developed.",
          text2: "During the 2013 Cultural Capital of the Turkic World process, the Turkvision Song Contest was developed and implemented representing Azerbaijan Media, creating an international brand. Today; consultancy is provided as 'Art and Innovation Strategist' to holdings, technology firms, and government institutions."
        }
      }
    },
    career: {
      title: 'Career Milestones',
      subtitle: 'A past full of technology and leadership, extending from global giants to international organizations.',
      items: {
        ericsson: { role: 'Technology Business Partner', desc: 'Content and technology partnership in international telecommunication infrastructure projects.' },
        turkcell: { role: 'Value Added Services Business Partner', desc: "Business partnership in digital services and content projects at Turkey's leading operator." },
        unhcr: { role: 'Strategic Business Partner', desc: 'Developing humanitarian aid technologies under the United Nations umbrella and developing social projects with renowned artists.' },
        digiturk: { role: 'Digital Broadcasting Business Partner', desc: 'Strategic partnership in the digitalization process of media and broadcasting technologies.' },
        public: { role: 'Strategic Consultant', desc: 'Projects contributing to the digital transformation vision of government institutions.' }
      },
      quote: '"Leadership is action, not position."'
    },
    projects: {
      title: 'Digital Eco-System',
      subtitle: 'Special spaces for my projects and interests.',
      note: 'This homepage is for biography only.',
      tech: { title: 'Technology & Software', desc: 'Software architectures I developed, open source projects, and technical articles.' },
      gallery: { title: 'Art Gallery', desc: 'Works I curated, art criticism, and collections.' },
      media: { title: 'Press & Media', desc: 'Interviews, reflections in the magazine world, and visual archive.' },
      footer_note: '* Projects are hosted on independent sub-domains.'
    },
    footer: {
      rights: 'All Rights Reserved.',
      contact_title: 'Contact'
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
