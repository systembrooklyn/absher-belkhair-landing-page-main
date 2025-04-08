import { createI18n } from "vue-i18n";

const messages = {
  en: {
    home: "Home",
    features: "Services",
    about: "About",
    contact: "Contact",
    headingabout:"About Us",
    company_name: "Absher Belkhair",
    subheading: "About",
    heading: "About Us",
    innovativeTitle: "Innovative solutions for establishing a business",
    para1:
      "Absher Al-Khair is a company specialized in establishing companies and business development. We aim to provide full support to investors and project owners to help them establish their businesses in Dubai by offering a comprehensive set of services that provide innovative solutions to guide our local and international customers and put them on the right track.",
    para2_part1: "Separated they",
    para2_highlight:
      "As a leading company in establishing companies and providing business solutions in Dubai",
    para2_part2:
      "the team of business consultants at Absher Al-Khair can help speed up the process of establishing your company, in addition to reserving the trade name. You can rely on Absher Al-Khair to complete all procedures for establishing a company in Dubai in record time if all your documents are ready, without hidden fees and without any difficulties.",
    listItem1: "There live the blind texts",
    listItem2: "Far far away behind the word",
    listItem3: "Their place and supplies",
    members: "Members",
    team: "Team",
    formtitle: "Get Service",
    phone1: "+971 529 670 703",
    phone2: "+971 544 144 299",
    formname: "Name",
    formphone: "Phone Number",
    formemail: "Email",
    formsubmit: "Submit",
    learn_more: "See More",
    service1Heading: "Our Services",
    service1SubHeading: "Providing Various Services",
    service1Quote:
      '"Welcome to our services, we are here to facilitate everything you need."',
    medicalExamination: "Medical Test",
    medicalExaminationDesc:
      "Coordinating the dates of medical examinations necessary for requesting or renewing residency. Providing support at approved examination centers and ensuring that procedures are completed quickly.",

    businessSetup: "Business Setup",
    businessSetupDesc:
      "We provide comprehensive advice on choosing the right legal entity for your business. We help you prepare official papers and register your company with the relevant authorities and efficiently.",

    emiratesID: "Emirates ID",
    emiratesIDDesc:
      "Registration procedures and ID card extraction will be completed for all residents and citizens. And ensure the accuracy of the data. Ensuring that the ID card is updated in the event of renewal or change of information.",

    employmentVisa: "Employment Visa",
    employmentVisaDesc:
      "Follow up on all procedures for issuing work visas for your company’s employees or sponsored workers. Prepare the required documents and fill out the official forms accurately.",

    goldenResidency: "Golden Residency",
    goldenResidencyDesc:
      "Helping investors, entrepreneurs and distinguished talents obtain long-term residency. Providing support in collecting documents and fulfilling the required conditions.",

    familyVisa: "Family Visa",
    familyVisaDesc:
      "Facilitating the recruitment of family members (husband/wife and children) to reside with the sponsor. Explaining sponsorship requirements and government procedures related to them.",

    touristVisa: "Tourist Visa",
    touristVisaDesc:
      "Issuing a short-term visa for those wishing to visit the country for the purpose of entertainment or family visits. Guiding you about the necessary requirements and paperwork, such as hotel reservations and travel tickets.",

    visaStamping: "Visa Stamping",
    visaStampingDesc:
      "Finish the step of stamping the visa on the passport after approving the application. Coordination with the Residency Department and government agencies to ensure the validity of the transaction and its speedy completion.",

    typingServices: "Typing Services",
    typingServicesDesc:
      "Writing and printing government documents and official forms in high quality. Translating documents when needed and reviewing them to ensure accuracy and linguistic integrity.",

    getService: "Get Service",
    heading: "Get In Touch",
    subHeading: "Contact Amr Fawzy, General Manager",
    contactInfoHeading: "Contact Information",
    buttonSendMessage: "Send Message",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email Address",
    emailAddress: "Email Address",
    typingServices: "Typing Services",
    home: "Home",
    copyrightText: "Copyright 2025, All rights reserved By.",
    column1Heading: "About Launch",
    column1Text: "Absher Al-Khair is a company specialized in establishing companies and business development. We seek to provide full support to investors and project owners who wish to establish their businesses in Dubai",
    connectHeading: "Connect",
    column4Heading: "Contact",
    mapHeading: "To find us easily",
    message: "Message",
    address: "Dubai, Deira, Port Said, Golden Business Centre, Office 206",
    phone1: "+971 529 670 703",
    phone2: "+971 544 144 299",
    website: "www.absheralkhair.com",
    DiscoverServices: "Discover Our Services",
    Business: "Business setup",
    Employment: "Employment Visa",
    family: "Family Visa",
    Tourist: "Tourist Visa",
    Emirates: "Emirates ID",
    Medical: "Medical Test",
    Visa: "Visa stamping",
    Typing: "Typing Services",
    success: "Request submitted successfully!",
    error: "Something went wrong, please try again later",
    invalidEmail: "Please enter a valid email address",
    formservice: "Service",
    emailNotSent: "Something went wrong, please try again later",
    ok: "Ok",
    emailSent: "Your message has been sent successfully",
    services: "Our Services",
    getService: "Get Service",
     partnershipsTitle: "Partnerships with Government Entities",
  partnershipsSubtitle: "We collaborate with government institutions to provide seamless and efficient services.",
    egyptGulf:"Please enter a valid  phone number",
    medicalExaminationDesc:
      "Coordinating the dates of medical examinations necessary for requesting or renewing residency.Providing support at approved examination centers and ensuring that procedures are completed quickly.",
    medicalExamination: "Medical Test",
    servicesDesc:
      "We offer expert guidance and personalized solutions to ensure that each step is handled efficiently and professionally.",
    hero_description:
      "Your Trusted Partner for Government documents services. We simplify the process of handling all your travel-related transactions quickly and securely. Let us take care of the details while you focus on your journey with peace of mind.",
  },

  ar: {
    home: "الصفحة الرئيسية",
    formservice: "الخدمة",
     partnershipsTitle: "الشراكات مع الجهات الحكومية",
  partnershipsSubtitle: "نحن نعمل مع المؤسسات الحكومية لتقديم خدمات سلسة وسريعة.",
    egyptGulf:"يرجي ادخال رقم هاتف صحيح",
    medicalExamination: "الفحص الطبي",
    invalidEmail: "يرجي ادخال بريد صحيح",
    address:"206 دبي، ديرة، بورسعيد، مركز الأعمال الذهبي، مكتب", 
  headingabout:"من نحن",
    medicalExaminationDesc:
      "تنسيق مواعيد الفحوصات الطبية اللازمة لطلب أو تجديد الإقامة، وتقديم الدعم في المراكز المعتمدة لضمان استكمال الإجراءات بسرعة.",
    ok: "موافق",
    emailNotSent: "حدث خطأ أثناء إرسال الرسالة.",
    businessSetup: "تأسيس الأعمال",
    subheading: "نبذة",
    copyrightText: "حقوق النشر 2025، جميع الحقوق محفوظة بواسطة.",
    column1Heading: "عننا ",
    column1Text: "أبشر الخير هي شركة متخصصة في تأسيس الشركات وتطوير الأعمال. نسعى لتقديم الدعم الكامل للمستثمرين وأصحاب المشاريع الذين يرغبون في تأسيس أعمالهم في دبي",
    connectHeading: "تواصل",
    error: "حدث خطاء، يرجى المحاولة في وقت لاحق",
    column4Heading: "الاتصال",
    mapHeading: "للعثور علينا بسهولة",
    heading: "من نحن",
    heading: "تواصل معنا",
    emailSent: "تم إرسال الرسالة بنجاح!",
    subHeading: "تواصل مع عمرو فوزي، المدير العام",
    contactInfoHeading: "معلومات الاتصال",
    buttonSendMessage: "أرسل الرسالة",
    formtitle: "اطلب الخدمه",
    formname: "الاسم",
    formphone: "رقم الهاتف",
    formemail: "البريد الإلكتروني",
    formsubmit: "إرسال",
    firstName: "الاسم الأول",
    lastName: "اسم العائلة",
    email: "البريد الإلكتروني",
    success: "تم إرسال الطلب بنجاح!",
    message: "الرسالة",
    innovativeTitle: "حلول مبتكرة لتأسيس الأعمال",
    para1:
      "أبشر الخير هي شركة متخصصة في تأسيس الشركات وتطوير الأعمال. نسعى لتقديم الدعم الكامل للمستثمرين وأصحاب المشاريع لمساعدتهم في تأسيس أعمالهم في دبي، وذلك من خلال توفير مجموعة متكاملة من الخدمات التي تهدف إلى تقديم حلول مبتكرة لإرشاد عملائنا المحليين والدوليين ووضعهم على الطريق الصحيح.",
    typingServices: "خدمات الكتابة",
    para2_part1: "منفصلة هم",
    para2_highlight:
      "بصفتها شركة رائدة في تأسيس الشركات وتقديم حلول الأعمال في دبي",
    para2_part2:
      "، يمكن لفريق الاستشاريين في أبشر الخير مساعدتك في تسريع عملية تأسيس شركتك بالإضافة إلى حجز الاسم التجاري. يمكنك الاعتماد على أبشر الخير لإتمام جميع إجراءات تأسيس الشركة في دبي في وقت قياسي إذا كانت جميع مستنداتك جاهزة، دون رسوم خفية ودون أي صعوبات.",


    members: "الأعضاء",
    team: "الفريق",
    businessSetupDesc:
      "نقدّم مشورة شاملة حول اختيار الكيان القانوني المناسب لعملك، ونساعدك على إعداد الأوراق الرسمية وتسجيل شركتك لدى الجهات المعنية بكفاءة.",

    emiratesID: "الهوية الإماراتية",
    emiratesIDDesc:
      "استكمال إجراءات التسجيل واستخراج بطاقة الهوية لجميع المقيمين والمواطنين، وضمان دقة البيانات وتحديث البطاقة في حال التجديد أو تغيير المعلومات.",

    employmentVisa: "تأشيرة العمل",
    DiscoverServices: "اكتشف خدماتنا",
    employmentVisaDesc:
      "متابعة جميع الإجراءات المتعلقة بإصدار تأشيرات العمل لموظفي شركتك أو العمال المكفولين، وإعداد المستندات المطلوبة وتعبئة النماذج الرسمية بدقة.",

    goldenResidency: "الإقامة الذهبية",
    goldenResidencyDesc:
      "مساعدة المستثمرين وروّاد الأعمال وأصحاب المواهب المتميزة على الحصول على إقامة طويلة الأمد، وتقديم الدعم في جمع المستندات واستيفاء الشروط المطلوبة.",

    familyVisa: "تأشيرة العائلة",
    familyVisaDesc:
      "تسهيل استقدام أفراد العائلة (الزوج/الزوجة والأطفال) للإقامة مع الكفيل، وشرح متطلبات الكفالة والإجراءات الحكومية ذات الصلة.",

    touristVisa: "تأشيرة السياحة",
    touristVisaDesc:
      "إصدار تأشيرة قصيرة الأمد للراغبين في زيارة الدولة بغرض الترفيه أو الزيارات العائلية، مع توجيهك بشأن المتطلبات اللازمة والأوراق مثل حجوزات الفنادق وتذاكر السفر.",

    visaStamping: "ختم التأشيرة",
    visaStampingDesc:
      "إتمام خطوة ختم التأشيرة على جواز السفر بعد الموافقة على الطلب، والتنسيق مع إدارة الإقامة والجهات الحكومية لضمان صحة المعاملة وسرعة إنجازها.",

    ypingServices: "خدمات الطباعة",
    typingServicesDesc:
      "كتابة وطباعة الوثائق الحكومية والنماذج الرسمية بجودة عالية، وترجمة المستندات عند الحاجة ومراجعتها لضمان الدقة والسلامة اللغوية.",
    services: "خدماتنا",
    getService: "احصل على الخدمة",
    features: "خدماتنا",
    about: "من نحن",
    contact: "اتصل بنا",
    company_name: "أبشر بالخير",
    tagline: "شريكك الموثوق لإنجاز معاملات السفر",
    learn_more: "اظهار المزيد",
    service1Heading: "خدماتنا",
    service1SubHeading: "تقديم خدمات متنوعة",
    service1Quote:
      '"أهلاً وسهلاً بكم في خدماتنا، نحن هنا لتسهيل كل ما تحتاجونه."',

    Business: "تأسيس شركات",
    Employment: "تأشيرات العمل",
    family: "الإقامة الذهبية",
    Tourist: "تأشيرات العائلة",
    Emirates: "تأشيرات سياحية",
    Medical: "تأشيرات إماراتية",
    Medical: "الفحص الطبي",
    Visa: "تأشيرات الطي",
    Typing: "خدمات الكتابة",
    services: "خدماتنا",
    getService: "الحصول على الخدمة",
    servicesDesc:
      "نحن نقدم إرشادات الخبراء والحلول الشخصية لضمان كل منها يتم التعامل مع الخطوة بكفاءة ومهنية.",

    hero_description:
      "نحن هنا لجعل إجراءات خدمات الوثائق الحكوميه أكثر سهولة وسلاسة، حيث نوفر لك حلولًا متكاملة لإنجاز جميع معاملاتك بسرعة وأمان. اترك لنا التفاصيل واستمتع برحلتك بلا قلق!",
  },
};

const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
