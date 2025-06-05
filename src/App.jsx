// src/App.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Stiliai ir komponentai
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import PageFade from './components/PageFade';

// Puslapių komponentai
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials'; // <<< Atkomentuojame importą >>>

// Turinys skirtingomis kalbomis
const content = {
    lt: {
        // Pagrindinė informacija
        name: 'Dovilė Miciukevičiūtė',
        title: 'Karjeros Konsultantė',
        email: 'dovile.mi@gmail.com',
        phone: '+370 622 84833',
        location: 'Kaunas',
        // Navigacija
        navHome: 'Pradžia',
        navAbout: 'Apie mane',
        navContact: 'Kontaktai',
        navTestimonials: 'Atsiliepimai', // <<< Pridedame navigacijos nuorodą atsiliepimams >>>
        // Bendri tekstai
        contactButton: 'Susisiekite',
        footerText: 'Visos teisės saugomos',
        notFound: '404 - Puslapis Nerastas',
        // Pradžios puslapis
        homeTitle: 'Sveiki atvykę!',
        homeContent: 'Profesionalios karjeros konsultacijos ir mokymai.',
        // Apie mane puslapis
        aboutTitle: 'Apie Mane',
        aboutMeIntro: 'Esu atsakinga, patikima karjeros srities specialistė, turinti patirties mokymų vedimo, konsultavimo, ES finansuojamų projektų koordinavimo, administracinio darbo srityse.',
        aboutMeExperience: 'Šiuo metu dirbu pedagoginį darbą pradinėse mokyklose. Gebu lengvai bendrauti su įvairaus amžiaus ir poreikių žmonėmis: nuo mokinių iki įsidarbinimo sunkumų patiriančių jaunuolių.',
        aboutMeQualities: 'Asmeninės savybės: turiu gerus planavimo, procesų valdymo, viešojo kalbėjimo įgūdžius. Esu komunikabili, empatiška, kūrybiška, nebijanti prisiimti atsakomybės, mokanti dirbti komandoje ir išvien su komanda! Darbe ypač praverčia prigimtinis darbštumas bei noras padaryti daugiau, nei yra tikimasi.',
        skillsTitle: 'Įgūdžiai',
        skillsList: [ 'Viešasis kalbėjimas', 'Komunikabilumas', 'Laiko planavimas', 'Pedagoginė patirtis', 'Darbas su įv. amžiaus grupėmis', 'Organizaciniai įgūdžiai', 'Atsakomybė', 'Kūrybiškumas', 'Idėjų generavimas', 'Problemų sprendimas', 'Streso valdymas', 'Administraciniai įgūdžiai', 'Informacijos ir duomenų valdymas', 'Vadyba', 'Derybos', 'Vadovavimas komandai', 'MS Office (Word, Excel, PowerPoint)' ],
        languagesTitle: 'Kalbos',
        languagesList: [ 'Anglų kalba (B2)', 'Rusų kalba (B1)' ],
        educationTitle: 'Išsilavinimas',
        educationList: [ { years: '2010-2012 m.', degree: 'Karjeros projektavimo magistras', university: 'Vytauto Didžiojo universitetas' }, { years: '2003-2007 m.', degree: 'Lietuvių filologijos bakalauras', university: 'Vilniaus universitetas' } ],
        experienceTitle: 'Darbo Patirtis',
        experienceList: [
            { period: '2022-11 – dabar', title: 'Karjeros specialistė', company: 'Kauno švietimo inovacijų centras', description: 'Karjeros pamokų vedimas 1-4 klasių mokiniams (65 klasės). Pamokų planavimas, pasiruošimas, užduočių kūrimas ir pritaikymas skirtingoms amžiaus grupėms.'},
            { period: '2019-09 – 2022-05', title: 'Karjeros konsultantė (ES projekte „Jaunimo socialinių kompetencijų didinimas“)', company: 'Užimtumo tarnyba', description: 'Grupinių mokymų vedimas karjeros temomis (vidutin. 12-16 val/mėn.). Mokymų medžiagos pritaikymas paskaitoms bei auditorijai, prezentacijų ruošimas, praktinių užduočių rengimas. Administraciniai darbai: ataskaitų rengimas, rezultatų stebėsena ir valdymas; klientų duomenų suvedimas informacinėje sistemoje, veiklų ir užsiėmimų planavimas, tvarkaraščių sudarymas, dokumentų administravimas. Naujų grupių rinkimas, asmenų konsultavimas, jų motyvacijos vertinimas. Pasiekimai: virš 200 pravestų užsiėmimų nuotoliniu ir kontaktiniu būdu; sėkmingai pabaigtas ES projektas: visų numatytų projekto rezultatų pasiekimas.'},
            { period: '2017-04 – 2018-09 m.', title: 'Lektorė', company: 'UAB "Inlinen"', description: 'Paskaitų ir praktinių, grupinių užsiėmimų vedimas ir prezentacijų ruošimas (auditorija: sunkumų įsidarbinant patiriantys jaunuoliai).'},
            { period: '2015–2016 m.', title: 'Administratorė', company: 'UAB "Adminsta"', description: 'Būstų administravimas. (Pastaba: detalesnis aprašymas CV nebuvo pateiktas, tad palikau bendrą).'},
            { period: '2013–2015 m.', title: 'Profesinio veiklinimo organizatorė / Karjeros konsultantė', company: 'Lietuvos mokinių neformaliojo švietimo centras', description: 'Darbas su mokiniais (5-12 kl.): karjeros paskaitų ir užsiėmimų vedimas, pažintinių karjeros vizitų moksleiviams organizavimas. Vadovavimas 10 karjeros specialistų grupei ir jų veiklos mokyklose koordinavimas. Bendravimas su įmonių vadovais, jų įtraukimas į projektą, bendradarbiavimo sutarčių pasirašymas. Pasiekimai: 2015 m. padėka iš LMNŠC už gerą pareigų vykdymą ir projekto tikslų įgyvendinimą.'}
        ],
        // Kontaktų puslapis
        contactTitle: 'Susisiekite',
        contactIntro: 'Turite klausimų ar norite pasitarti dėl karjeros? Susisiekite Jums patogiu būdu arba raskite mane socialiniuose tinkluose.',
        directContactTitle: 'Tiesioginiai Kontaktai',
        socialMediaTitle: 'Socialiniai Tinklai',
        // <<< Atsiliepimų puslapis (nauji duomenys) >>>
        testimonialsTitle: 'Klientų atsiliepimai',
        testimonialsIntro: 'Ką mano mano klientai apie karjeros konsultacijas:',
        testimonials: [
            {
                name: 'Gintare Tigriukijunienė',
                title: 'Programuotoja',
                avatar: './avatar1.jpg', // Pakeiskite į tikrą nuotrauką arba naudokite placeholder
                text: 'Dovilė padėjo man aiškiai suformuluoti savo karjeros tikslus ir sudaryti realų planą. Jos konsultacijos buvo labai vertingos ir įkvepiančios. Rekomenduoju!',
            },
            {
                name: 'Imantas Fotavejaras',
                title: 'Studentas',
                avatar: './avatar2.jpg',
                text: 'Esu dėkingas už profesionalią pagalbą renkantis studijų kryptį. Dovilė išsamiai paaiškino galimybes ir padėjo atrasti mano stipriąsias puses. Ačiū!',
            },
            {
                name: 'Indrė Kiburusukienė',
                title: 'Jaunesnioji vadybininkė',
                avatar: './avatar3.jpg',
                text: 'Po Dovilės konsultacijos jaučiausi daug labiau pasitikinti savimi darbo pokalbiuose. Jos patarimai dėl CV ir motyvacinio laiško buvo neįkainojami. Fantastinė konsultantė!',
            },
            {
                name: 'Jurgis Marazmatikas',
                title: 'Pardavimų vadovas',
                avatar: './avatar4.jpg',
                text: 'Dovilė padėjo man atnaujinti savo karjeros kelią ir atrasti naujas galimybes. Jos empatija ir įžvalgos leido man priimti drąsius sprendimus. Esu labai patenkintas rezultatais.',
            },
        ],
    },
    en: {
        // Basic Info
        name: 'Dovilė Miciukevičiūtė',
        title: 'Career Consultant',
        email: 'dovile.mi@gmail.com',
        phone: '+370 622 84833',
        location: 'Kaunas',
        // Navigation
        navHome: 'Home',
        navAbout: 'About Me',
        navContact: 'Contact',
        navTestimonials: 'Testimonials', // <<< Pridedame navigacijos nuorodą atsiliepimams >>>
        // Common Texts
        contactButton: 'Contact Me',
        footerText: 'All rights reserved',
        notFound: '404 - Not Found',
        // Home Page
        homeTitle: 'Welcome!',
        homeContent: 'Professional career consulting and training.',
        // About Page
        aboutTitle: 'About Me',
        aboutMeIntro: 'I am a responsible, reliable specialist in the field of career guidance with experience in training, consulting, coordinating EU-funded projects, and administrative work.',
        aboutMeExperience: 'Currently, I work as a teacher in primary schools. I can easily communicate with people of various ages and needs: from students to young people experiencing employment difficulties.',
        aboutMeQualities: 'Personal qualities: I have good planning, process management, and public speaking skills. I am communicative, empathetic, creative, not afraid to take responsibility, able to work in a team and together with a team! Natural diligence and a desire to do more than expected are particularly useful in my work.',
        skillsTitle: 'Skills',
        skillsList: [ 'Public Speaking', 'Communication', 'Time Management', 'Pedagogical Experience', 'Working with Various Age Groups', 'Organization & Coordination', 'Responsibility', 'Creativity', 'Idea Generation', 'Problem Solving', 'Stress Management', 'Administration', 'Information & Data Management', 'Management', 'Negotiation', 'Team Leadership', 'MS Office (Word, Excel, PowerPoint)' ],
        languagesTitle: 'Languages',
        languagesList: [ 'English (B2)', 'Russian (B1)' ],
        educationTitle: 'Education',
        educationList: [ { years: '2010-2012', degree: 'Master\'s in Career Design', university: 'Vytautas Magnus University' }, { years: '2003-2007', degree: 'Bachelor\'s in Lithuanian Philology', university: 'Vilnius University' } ],
        experienceTitle: 'Work Experience',
        experienceList: [
            { period: 'Nov 2022 – Present', title: 'Career Specialist', company: 'Kaunas Education Innovation Center', description: 'Conducting career lessons for grades 1-4 (65 classes). Planning, preparation, creation, and adaptation of tasks for various age groups.'},
            { period: 'Sep 2019 – May 2022', title: 'Career Consultant (EU Project "Increasing Youth Social Competencies")', company: 'Employment Service', description: 'Conducting group training on career topics (avg. 12-16 hrs/month). Adapting training materials for lectures and audiences, preparing presentations, and practical tasks. Administrative duties: preparing reports, monitoring and managing results; entering client data into the information system, planning activities and sessions, creating schedules, and administering documents. Recruiting new groups, consulting individuals, assessing their motivation. Achievements: over 200 sessions conducted both remotely and in-person; successful completion of the EU project: achievement of all planned project results.'},
            { period: 'Apr 2017 – Sep 2018', title: 'Lecturer', company: 'UAB "Inlinen"', description: 'Conducting lectures and practical, group sessions and preparing presentations (audience: young people experiencing employment difficulties).'},
            { period: '2015–2016', title: 'Administrator', company: 'UAB "Adminsta"', description: 'Residential administration. (Note: more detailed description not provided in CV).'},
            { period: '2013–2015', title: 'Vocational Guidance Organizer / Career Consultant', company: 'Lithuanian Centre of Non-formal Youth Education', description: 'Working with students (grades 5-12): conducting career lectures and sessions, organizing cognitive career visits for students. Leading a group of 10 career specialists and coordinating their activities in schools. Communicating with company managers, involving them in the project, signing cooperation agreements. Achievements: 2015 commendation from LMNŠC for excellent performance and project goals achievement.'}
        ],
        // Kontaktų puslapis
        contactTitle: 'Get in Touch',
        contactIntro: 'Have questions or want to discuss your career? Contact me through your preferred method or find me on social media.',
        directContactTitle: 'Direct Contacts',
        socialMediaTitle: 'Social Media',
        // <<< Atsiliepimų puslapis (nauji duomenys) >>>
        testimonialsTitle: 'Client Testimonials',
        testimonialsIntro: 'What my clients say about career consultations:',
        testimonials: [
            {
                name: 'Gintare Tigriukijunienė',
                title: 'Software Developer',
                avatar: './avatar1.jpg',
                text: 'Dovilė helped me clearly formulate my career goals and create a realistic plan. Her consultations were very valuable and inspiring. Highly recommend!',
            },
            {
                name: 'Imantas Fotavejaras',
                title: 'Student',
                avatar: './avatar2.jpg',
                text: 'I am grateful for the professional help in choosing my field of study. Dovilė thoroughly explained the options and helped me discover my strengths. Thank you!',
            },
            {
                name: 'Indrė Kiburusukienė',
                title: 'Junior Manager',
                avatar: '/avatar3.jpg',
                text: 'After Dovilė\'s consultation, I felt much more confident in job interviews. Her advice on my CV and cover letter was invaluable. Fantastic consultant!',
            },
            {
                name: 'Jurgis Marazmatikas',
                title: 'Sales Manager',
                avatar: './avatar4.jpg',
                text: 'Dovilė helped me refresh my career path and discover new opportunities. Her empathy and insights allowed me to make bold decisions. I am very satisfied with the results.',
            },
        ],
    },
};

function App() {
    const [lang, setLang] = useState(() => {
        const savedLang = localStorage.getItem('appLang');
        const browserLang = navigator.language.split('-')[0];
        return savedLang || (browserLang === 'lt' ? 'lt' : 'en');
    });

    const c = content[lang] || content.en;
    const location = useLocation();

    useEffect(() => {
        document.documentElement.lang = lang;
        localStorage.setItem('appLang', lang);
    }, [lang]);

    return (
        <div className="min-h-screen bg-white dark:bg-green-950 text-gray-900 dark:text-green-100 flex flex-col font-sans">
            <Header lang={lang} setLang={setLang} content={c} />
            <main className="p-4 md:p-8 flex-grow container mx-auto">
                <AnimatePresence mode="wait">
                    <Routes location={location} key={location.pathname + lang}>
                        <Route path="/" element={<PageFade key="home"><Home content={c} /></PageFade>} />
                        <Route path="/about" element={<PageFade key="about"><About content={c} /></PageFade>} />
                        <Route path="/contact" element={<PageFade key="contact"><Contact content={c} /></PageFade>} />
                        <Route path="/testimonials" element={<PageFade key="testimonials"><Testimonials content={c} /></PageFade>} /> {/* <<< Naujas maršrutas >>> */}
                        <Route path="*" element={<PageFade key="notfound"><h1 className="text-3xl text-center mt-20 font-display">{c.notFound}</h1></PageFade>} />
                    </Routes>
                </AnimatePresence>
            </main>
            <Footer content={c} />
        </div>
    );
}

export default App;