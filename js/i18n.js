/* ─────────────────────────────────────────────────────────
   I18N — EN / DE / AZ
   Text is keyed by data-i18n="key" attributes in the HTML.
───────────────────────────────────────────────────────── */
const I18N = {

  en: {
    /* nav */
    'nav.works':        "Works",
    'nav.all':          "All",
    'nav.interiors':    "Interiors",
    'nav.facade':       "Facade",
    'nav.products':     "Products",
    'nav.interactive':  "Interactive",
    'nav.construction': "Construction",
    'nav.realtime':     "Real-Time Interactive",
    'nav.services':     "Services",
    'nav.about':        "About",
    'nav.contact':      "Contact",
    'nav.menu':         "Menu",
    'nav.close':        "Close",

    /* project page */
    'project.back':     "&#8592; Works",

    /* about — bio */
    'about.p1': "Hi, I'm <strong>Lachin</strong>. I stepped into the world of 3D back in 2016, and somewhere along the way, it stopped being just a skill and became something I genuinely love doing every day. My background is in Engineering and Business, but creativity is what really pulled me in — and kept me here.",
    'about.p2': "Since then, I've been working with design studios and architectural firms, turning ideas into visuals that don't just look good, but feel real and alive.",
    'about.p3': "My main toolkit includes <strong>3ds Max</strong>, <strong>Corona Renderer</strong>, <strong>Photoshop</strong>, <strong>Unreal Engine</strong>, <strong>AutoCAD</strong>, and <strong>ComfyUI</strong>. Lately, I've been pushing more into real-time experiences with Unreal Engine — building interactive applications where you can actually walk through and explore spaces. I also create animations and 360° tours to make projects more immersive and engaging.",
    'about.p4': "I'm especially into anything that blends architecture, visualization, and interactivity. I like experimenting, trying new approaches, and working in creative spaces where ideas can evolve into something unexpected.",
    'about.p5': "I work with clients from all over the world — remotely, hybrid, or on-site — always focused on creating something unique, thoughtful, and a bit beyond the ordinary.",

    /* about — stats */
    'about.stat.years':    "Years",
    'about.stat.projects': "Projects",
    'about.stat.award':    "Award Winning Artist",
    'about.stat.tours':    "Interactive &amp; Virtual Tours",

    /* about — awards */
    'about.awards.heading': "Awards &amp; Media",
    'about.award1.meta': "2026 &nbsp;·&nbsp; Azad Azerbaijan Television",
    'about.award1.body': "Invited to one of the most well-known TV channels in Azerbaijan to give an interview about 3D technologies. A live presentation of my Unreal Engine application was also broadcast during the program.",
    'about.award2.meta': "2025 &nbsp;·&nbsp; Azerbaijan Design Award — 1st Place",
    'about.award2.body': "Won 1st place in the Visualization category with my Hyundai Santa Fe project at one of the largest design competitions in Azerbaijan.",
    'about.award3.meta': "Corona Renderer &nbsp;·&nbsp; Official Feature",
    'about.award3.body': "The official Corona Renderer Instagram page shared my “Dream Apartment” project, praising the realism of the renders and the atmosphere created throughout the space.",
    'about.award4.meta': "November 2020 &nbsp;·&nbsp; Renderize — Artist of the Month",
    'about.award4.body': "Selected as the best visualization of the month by the Renderize community. As a winner, I received one-year software licenses and my work was featured on their Instagram and website.",
    'about.award5.meta': "2019 &nbsp;·&nbsp; Black Mamba Magazine",
    'about.award5.body': "My “Tokyo Apartment” project was published in Black Mamba Magazine and covered on their official Instagram, reaching a wide international audience of design enthusiasts.",

    /* services */
    'svc.1.title': "Architectural<br>Visualization",
    'svc.1.desc':  "Photorealistic renders of buildings, facades, and architectural concepts. From early-stage massing studies to final presentation imagery, I translate plans and 3D models into accurate, compelling visuals — helping architects, developers, and clients truly see the project before it's built.",
    'svc.2.title': "Interior Design<br>&amp; Visualization",
    'svc.2.desc':  "Detailed rendering of interior spaces paired with full design direction. Material, light, and atmosphere are treated with the same care as the architecture itself — from layout concepts and material palettes to lighting schemes and furniture selections that form a cohesive, buildable vision.",
    'svc.3.title': "Interactive<br>Application",
    'svc.3.desc':  "Real-time architectural applications built in Unreal Engine. Clients can move through a space at 1:1 scale, change materials, adjust lighting conditions, and experience the project long before construction begins — an immersive tool for presentations, sales, and client sign-off.",
    'svc.4.title': "Product Visualization<br>&amp; Animation",
    'svc.4.desc':  "High-end product renders and animated sequences for automotive, consumer goods, and industrial design. Precise modeling, studio lighting, and motion design come together to present products with the quality and craft they deserve — from hero shots and turntables to full campaign visuals.",

    /* real-time app */
    'rta.heading': "Interactive Architectural Virtual Application",
    'rta.eyebrow': "Unreal Engine · Real-Time Visualization",
    'rta.title':   "Real-Time<br>Interactive",
    'rta.lead':    "Architecture you can walk through. Interactive applications, 360° tours and animations that let clients experience a project long before it is built.",
    'rta.ix1':     "Latest 360° Tour",
    'rta.ix2':     "Unreal Application",
    'rta.ix3':     "360° Tours",
    'rta.ix4':     "Animation",
    'rta.f.eyebrow': "Latest project · 2026",
    'rta.f.title': "Interior Apartment — Interactive 360° Tour",
    'rta.f.open':  "Open full tour",
    'rta.f.desc':  "An apartment interior designed and visualized by LACHIN ARCHITECTS, presented as an interactive 360° tour. Move between rooms, look around freely and explore every detail of the design at your own pace — on desktop, phone or in VR.",
    'rta.f.hint':  "Drag to look around · tap the hotspots to move between rooms",
    'rta.f.fs':    "View fullscreen",
    'rta.m.project': "Project",
    'rta.m.type':  "Type",
    'rta.m.type.v': "Interactive 360° virtual tour",
    'rta.m.year':  "Year",
    'rta.m.software': "Software",
    'rta.ue.eyebrow': "Unreal Engine Application",
    'rta.ue.title': "Interactive Architectural Application",
    'rta.ue.more': "Project page",
    'rta.ue.desc': "A real-time application built in Unreal Engine that simulates a complete residential environment — not a single render, but a living space you can explore from any angle, at any season and time of day.",
    'rta.ue.f1':   "Drone view ↔ ground view with a seamless transition",
    'rta.ue.f2':   "MetaHuman walkthrough at 1:1 scale, interiors included",
    'rta.ue.f3':   "Surroundings &amp; amenities system with live distances",
    'rta.ue.f4':   "Ultra Dynamic Sky — 4 seasons, weather and time of day",
    'rta.ue.f5':   "Teleport, cinematic camera and screenshot tools",
    'rta.ue.f6':   "Animated traffic, construction zone, EV charging, playgrounds",
    'rta.ue.watch': "Watch the full presentation",
    'rta.s1':      "Street view — weather &amp; time controls",
    'rta.s2':      "Drone view — surroundings &amp; amenities",
    'rta.s3':      "Interior walkthrough — living room",
    'rta.v1':      "Architectural surroundings &amp; amenities",
    'rta.v3':      "Interior design mode",
    'rta.tours':   "360 Virtual Tours",
    'rta.tours.title': "Previous Projects in 360°",
    'rta.tours.desc': "Panoramic tours of earlier interior and architecture projects. Drag inside each window to look around.",
    'rta.anim':    "Animation",
    'rta.anim.title': "Architectural &amp; Product Animation",
    'rta.a1':      "Interior design animation",
    'rta.a2':      "Living room CGI — before / after",
    'rta.a3':      "Hyundai Santa Fe 2025",
    'rta.cta.eyebrow': "Next project",
    'rta.cta.title': "Want to present your project interactively?",
    'rta.cta.desc': "From a 360° tour of a single apartment to a full real-time application of a residential complex — let’s find the right format for your project.",
    'rta.cta.btn': "Get in touch",

    /* course */
    'course.heading': "Course",

    /* contact */
    'contact.map.baku':     "Azerbaijan, Baku",
    'contact.map.sumqayit': "Azerbaijan, Sumqayit",
    'contact.map.munich':   "Germany, Munich",
    'contact.findus':       "Find us at:",
    'contact.city.baku':     "Baku, Azerbaijan",
    'contact.city.sumqayit': "Sumqayit, Azerbaijan",
    'contact.city.munich':   "Munich, Germany",
    'contact.street.baku':     "Khagani Street, Nasimi",
    'contact.street.sumqayit': "Bulvar Street 67A, AZ5000",
    'contact.street.munich':   "Allach-Untermenzing, 80999 München",
    'contact.hours':   "Monday – Friday &nbsp;·&nbsp; 09:00 – 18:00",
    'contact.modes':   "Hybrid &nbsp;·&nbsp; On-site",
    'contact.remote':  "Remote",
    'contact.email':   "Contact: studio@lachinguluyev.com",
    'form.name':     "Name",
    'form.mail':     "Mail",
    'form.subject':  "Subject",
    'form.files':    "Files",
    'form.choose':   "Choose files",
    'form.nofile':   "No file chosen",
    'form.maxsize':  "Max 100 MB",
    'form.message':  "Description or Message",
    'form.send':     "Send",
    'form.sending':  "Sending…",
    'form.ok':       "Message sent successfully.",
    'form.err':      "Something went wrong. Please try again.",
    'form.toobig':   "Exceeds 100 MB limit",
    'form.selected': "files selected",
  },

  de: {
    /* nav */
    'nav.works':        "Arbeiten",
    'nav.all':          "Alle",
    'nav.interiors':    "Interieur",
    'nav.facade':       "Fassade",
    'nav.products':     "Produkte",
    'nav.interactive':  "Interaktiv",
    'nav.construction': "Bau",
    'nav.realtime':     "Echtzeit-Interaktiv",
    'nav.services':     "Leistungen",
    'nav.about':        "Über mich",
    'nav.contact':      "Kontakt",
    'nav.menu':         "Menü",
    'nav.close':        "Schließen",

    /* project page */
    'project.back':     "&#8592; Arbeiten",

    /* about — bio */
    'about.p1': "Hallo, ich bin <strong>Lachin</strong>. 2016 bin ich in die Welt des 3D eingestiegen, und irgendwann war es nicht mehr nur eine Fähigkeit, sondern etwas, das ich jeden Tag mit echter Freude mache. Mein Hintergrund liegt in Ingenieurwesen und Wirtschaft, doch es war die Kreativität, die mich wirklich gepackt und hier gehalten hat.",
    'about.p2': "Seitdem arbeite ich mit Designstudios und Architekturbüros zusammen und verwandle Ideen in Bilder, die nicht nur gut aussehen, sondern echt und lebendig wirken.",
    'about.p3': "Zu meinem Werkzeugkasten gehören <strong>3ds Max</strong>, <strong>Corona Renderer</strong>, <strong>Photoshop</strong>, <strong>Unreal Engine</strong>, <strong>AutoCAD</strong> und <strong>ComfyUI</strong>. In letzter Zeit konzentriere ich mich verstärkt auf Echtzeit-Erlebnisse mit Unreal Engine — interaktive Anwendungen, in denen man Räume tatsächlich durchschreiten und erkunden kann. Außerdem erstelle ich Animationen und 360°-Touren, um Projekte immersiver und eindrucksvoller zu machen.",
    'about.p4': "Besonders reizt mich alles, was Architektur, Visualisierung und Interaktivität verbindet. Ich experimentiere gern, probiere neue Ansätze aus und arbeite in kreativen Umfeldern, in denen sich Ideen zu etwas Unerwartetem entwickeln können.",
    'about.p5': "Ich arbeite mit Kunden aus der ganzen Welt — remote, hybrid oder vor Ort — immer mit dem Ziel, etwas Einzigartiges, Durchdachtes und ein wenig Außergewöhnliches zu schaffen.",

    /* about — stats */
    'about.stat.years':    "Jahre",
    'about.stat.projects': "Projekte",
    'about.stat.award':    "Preisgekrönter Artist",
    'about.stat.tours':    "Interaktive &amp; virtuelle Touren",

    /* about — awards */
    'about.awards.heading': "Auszeichnungen &amp; Medien",
    'about.award1.meta': "2026 &nbsp;·&nbsp; Azad Azerbaijan Fernsehen",
    'about.award1.body': "Eingeladen zu einem der bekanntesten Fernsehsender Aserbaidschans für ein Interview über 3D-Technologien. Während der Sendung wurde außerdem meine Unreal-Engine-Anwendung live präsentiert.",
    'about.award2.meta': "2025 &nbsp;·&nbsp; Azerbaijan Design Award — 1. Platz",
    'about.award2.body': "Mit meinem Hyundai-Santa-Fe-Projekt den 1. Platz in der Kategorie Visualisierung bei einem der größten Designwettbewerbe Aserbaidschans gewonnen.",
    'about.award3.meta': "Corona Renderer &nbsp;·&nbsp; Offizielles Feature",
    'about.award3.body': "Die offizielle Instagram-Seite von Corona Renderer teilte mein Projekt „Dream Apartment“ und lobte den Realismus der Renderings sowie die Atmosphäre, die im gesamten Raum entsteht.",
    'about.award4.meta': "November 2020 &nbsp;·&nbsp; Renderize — Artist des Monats",
    'about.award4.body': "Von der Renderize-Community als beste Visualisierung des Monats ausgewählt. Als Gewinner erhielt ich einjährige Softwarelizenzen, und meine Arbeit wurde auf ihrem Instagram-Kanal und ihrer Website vorgestellt.",
    'about.award5.meta': "2019 &nbsp;·&nbsp; Black Mamba Magazine",
    'about.award5.body': "Mein Projekt „Tokyo Apartment“ wurde im Black Mamba Magazine veröffentlicht und auf deren offiziellem Instagram-Kanal vorgestellt — mit großer internationaler Reichweite unter Designbegeisterten.",

    /* services */
    'svc.1.title': "Architektur-<br>visualisierung",
    'svc.1.desc':  "Fotorealistische Renderings von Gebäuden, Fassaden und architektonischen Konzepten. Von frühen Volumenstudien bis zum finalen Präsentationsbild übersetze ich Pläne und 3D-Modelle in präzise, überzeugende Visualisierungen — damit Architekten, Entwickler und Kunden das Projekt wirklich sehen, bevor es gebaut wird.",
    'svc.2.title': "Innenarchitektur<br>&amp; Visualisierung",
    'svc.2.desc':  "Detaillierte Renderings von Innenräumen, kombiniert mit vollständiger gestalterischer Leitung. Material, Licht und Atmosphäre werden mit derselben Sorgfalt behandelt wie die Architektur selbst — von Grundrisskonzepten und Materialpaletten bis hin zu Lichtplanung und Möbelauswahl, die zu einer stimmigen, umsetzbaren Vision zusammenfinden.",
    'svc.3.title': "Interaktive<br>Anwendung",
    'svc.3.desc':  "Echtzeit-Architekturanwendungen, entwickelt in Unreal Engine. Kunden bewegen sich im Maßstab 1:1 durch den Raum, wechseln Materialien, passen Lichtstimmungen an und erleben das Projekt lange vor Baubeginn — ein immersives Werkzeug für Präsentationen, Vertrieb und Kundenfreigaben.",
    'svc.4.title': "Produktvisualisierung<br>&amp; Animation",
    'svc.4.desc':  "Hochwertige Produktrenderings und animierte Sequenzen für Automotive, Konsumgüter und Industriedesign. Präzises Modeling, Studiolicht und Motion Design bringen Produkte in genau der Qualität zur Geltung, die sie verdienen — von Hero-Shots und Turntables bis zu vollständigen Kampagnenvisuals.",

    /* real-time app */
    'rta.heading': "Interaktive architektonische Virtual-Anwendung",
    'rta.eyebrow': "Unreal Engine · Echtzeit-Visualisierung",
    'rta.title':   "Echtzeit<br>Interaktiv",
    'rta.lead':    "Architektur, durch die man gehen kann. Interaktive Anwendungen, 360°-Touren und Animationen, mit denen Kunden ein Projekt lange vor dem Bau erleben.",
    'rta.ix1':     "Neueste 360°-Tour",
    'rta.ix2':     "Unreal-Anwendung",
    'rta.ix3':     "360°-Touren",
    'rta.ix4':     "Animation",
    'rta.f.eyebrow': "Neuestes Projekt · 2026",
    'rta.f.title': "Wohnung — Interaktive 360°-Tour",
    'rta.f.open':  "Tour öffnen",
    'rta.f.desc':  "Ein von LACHIN ARCHITECTS entworfenes und visualisiertes Wohnungsinterieur, präsentiert als interaktive 360°-Tour. Wechseln Sie zwischen den Räumen, schauen Sie sich frei um und entdecken Sie jedes Detail des Entwurfs in Ihrem Tempo — am Desktop, am Smartphone oder in VR.",
    'rta.f.hint':  "Ziehen zum Umsehen · Hotspots antippen, um den Raum zu wechseln",
    'rta.f.fs':    "Vollbild ansehen",
    'rta.m.project': "Projekt",
    'rta.m.type':  "Typ",
    'rta.m.type.v': "Interaktive virtuelle 360°-Tour",
    'rta.m.year':  "Jahr",
    'rta.m.software': "Software",
    'rta.ue.eyebrow': "Unreal Engine Anwendung",
    'rta.ue.title': "Interaktive Architektur-Anwendung",
    'rta.ue.more': "Projektseite",
    'rta.ue.desc': "Eine in Unreal Engine entwickelte Echtzeit-Anwendung, die ein komplettes Wohnquartier simuliert — kein einzelnes Rendering, sondern ein lebendiger Raum, den man aus jedem Blickwinkel, zu jeder Jahres- und Tageszeit erkunden kann.",
    'rta.ue.f1':   "Drohnenansicht ↔ Bodenansicht mit nahtlosem Übergang",
    'rta.ue.f2':   "MetaHuman-Rundgang im Maßstab 1:1, inklusive Innenräume",
    'rta.ue.f3':   "Umgebungs- &amp; Infrastruktursystem mit Live-Entfernungen",
    'rta.ue.f4':   "Ultra Dynamic Sky — 4 Jahreszeiten, Wetter und Tageszeit",
    'rta.ue.f5':   "Teleport, Kinokamera und Screenshot-Werkzeuge",
    'rta.ue.f6':   "Animierter Verkehr, Baustelle, E-Ladestationen, Spielplätze",
    'rta.ue.watch': "Vollständige Präsentation ansehen",
    'rta.s1':      "Straßenansicht — Wetter- &amp; Zeitsteuerung",
    'rta.s2':      "Drohnenansicht — Umgebung &amp; Infrastruktur",
    'rta.s3':      "Innenrundgang — Wohnzimmer",
    'rta.v1':      "Architektonische Umgebung &amp; Infrastruktur",
    'rta.v3':      "Innenarchitektur-Modus",
    'rta.tours':   "360° Virtuelle Touren",
    'rta.tours.title': "Frühere Projekte in 360°",
    'rta.tours.desc': "Panoramatouren früherer Interieur- und Architekturprojekte. In jedem Fenster ziehen, um sich umzusehen.",
    'rta.anim':    "Animation",
    'rta.anim.title': "Architektur- &amp; Produktanimation",
    'rta.a1':      "Interieur-Animation",
    'rta.a2':      "Wohnzimmer CGI — vorher / nachher",
    'rta.a3':      "Hyundai Santa Fe 2025",
    'rta.cta.eyebrow': "Nächstes Projekt",
    'rta.cta.title': "Möchten Sie Ihr Projekt interaktiv präsentieren?",
    'rta.cta.desc': "Von der 360°-Tour einer einzelnen Wohnung bis zur vollständigen Echtzeit-Anwendung eines Wohnquartiers — finden wir das passende Format für Ihr Projekt.",
    'rta.cta.btn': "Kontakt aufnehmen",

    /* course */
    'course.heading': "Kurs",

    /* contact */
    'contact.map.baku':     "Aserbaidschan, Baku",
    'contact.map.sumqayit': "Aserbaidschan, Sumqayit",
    'contact.map.munich':   "Deutschland, München",
    'contact.findus':       "Sie finden uns hier:",
    'contact.city.baku':     "Baku, Aserbaidschan",
    'contact.city.sumqayit': "Sumqayit, Aserbaidschan",
    'contact.city.munich':   "München, Deutschland",
    'contact.street.baku':     "Khagani-Straße, Nasimi",
    'contact.street.sumqayit': "Bulvar-Straße 67A, AZ5000",
    'contact.street.munich':   "Allach-Untermenzing, 80999 München",
    'contact.hours':   "Montag – Freitag &nbsp;·&nbsp; 09:00 – 18:00",
    'contact.modes':   "Hybrid &nbsp;·&nbsp; Vor Ort",
    'contact.remote':  "Remote",
    'contact.email':   "Kontakt: studio@lachinguluyev.com",
    'form.name':     "Name",
    'form.mail':     "E-Mail",
    'form.subject':  "Betreff",
    'form.files':    "Dateien",
    'form.choose':   "Dateien auswählen",
    'form.nofile':   "Keine Datei ausgewählt",
    'form.maxsize':  "Max. 100 MB",
    'form.message':  "Beschreibung oder Nachricht",
    'form.send':     "Senden",
    'form.sending':  "Wird gesendet…",
    'form.ok':       "Nachricht erfolgreich gesendet.",
    'form.err':      "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.",
    'form.toobig':   "Überschreitet das Limit von 100 MB",
    'form.selected': "Dateien ausgewählt",
  },

  az: {
    /* nav */
    'nav.works':        "İşlər",
    'nav.all':          "Hamısı",
    'nav.interiors':    "İnteryerlər",
    'nav.facade':       "Fasad",
    'nav.products':     "Məhsullar",
    'nav.interactive':  "İnteraktiv",
    'nav.construction': "Tikinti",
    'nav.realtime':     "Real-Time İnteraktiv",
    'nav.services':     "Xidmətlər",
    'nav.about':        "Haqqımda",
    'nav.contact':      "Əlaqə",
    'nav.menu':         "Menyu",
    'nav.close':        "Bağla",

    /* project page */
    'project.back':     "&#8592; İşlər",

    /* about — bio */
    'about.p1': "Salam, mən <strong>Lachin</strong>. 3D dünyasına 2016-cı ildə qədəm qoydum və zamanla bu, sadəcə bir bacarıq olmaqdan çıxıb hər gün böyük həvəslə etdiyim işə çevrildi. Təhsilim mühəndislik və biznes üzrədir, amma məni əsl cəlb edən və burada saxlayan yaradıcılıq oldu.",
    'about.p2': "O vaxtdan bəri dizayn studiyaları və memarlıq şirkətləri ilə işləyirəm — ideyaları yalnız gözəl görünən deyil, real və canlı hiss olunan vizuallara çevirirəm.",
    'about.p3': "Əsas alətlərim <strong>3ds Max</strong>, <strong>Corona Renderer</strong>, <strong>Photoshop</strong>, <strong>Unreal Engine</strong>, <strong>AutoCAD</strong> və <strong>ComfyUI</strong>-dır. Son dövrlərdə Unreal Engine ilə real-time təcrübələrə daha çox yönəlmişəm — məkanların içində sərbəst gəzib araşdıra biləcəyiniz interaktiv tətbiqlər hazırlayıram. Həmçinin layihələri daha təsirli və maraqlı etmək üçün animasiyalar və 360° turlar yaradıram.",
    'about.p4': "Xüsusilə memarlıq, vizuallaşdırma və interaktivliyi birləşdirən hər şey məni maraqlandırır. Eksperiment etməyi, yeni yanaşmalar sınamağı və ideyaların gözlənilməz nəticələrə çevrildiyi yaradıcı mühitlərdə işləməyi sevirəm.",
    'about.p5': "Dünyanın müxtəlif ölkələrindən müştərilərlə işləyirəm — uzaqdan, hibrid və ya yerində — həmişə unikal, düşünülmüş və adi olandan bir az fərqli nəsə yaratmağa fokuslanaraq.",

    /* about — stats */
    'about.stat.years':    "İl",
    'about.stat.projects': "Layihə",
    'about.stat.award':    "Mükafat qazanan Artist",
    'about.stat.tours':    "İnteraktiv &amp; Virtual Turlar",

    /* about — awards */
    'about.awards.heading': "Mükafatlar &amp; Media",
    'about.award1.meta': "2026 &nbsp;·&nbsp; Azad Azərbaycan Televiziyası",
    'about.award1.body': "Azərbaycanın ən tanınmış televiziya kanallarından birinə 3D texnologiyaları haqqında müsahibə üçün dəvət olundum. Veriliş zamanı Unreal Engine tətbiqimin canlı təqdimatı da yayımlandı.",
    'about.award2.meta': "2025 &nbsp;·&nbsp; Azerbaijan Design Award — 1-ci yer",
    'about.award2.body': "Azərbaycanın ən böyük dizayn müsabiqələrindən birində Hyundai Santa Fe layihəm ilə Vizuallaşdırma kateqoriyasında 1-ci yeri qazandım.",
    'about.award3.meta': "Corona Renderer &nbsp;·&nbsp; Rəsmi paylaşım",
    'about.award3.body': "Corona Renderer-in rəsmi Instagram səhifəsi “Dream Apartment” layihəmi paylaşdı və renderlərin realizmini, məkanda yaradılan atmosferi yüksək qiymətləndirdi.",
    'about.award4.meta': "Noyabr 2020 &nbsp;·&nbsp; Renderize — Ayın Artisti",
    'about.award4.body': "Renderize icması tərəfindən ayın ən yaxşı vizuallaşdırması seçildim. Qalib kimi bir illik proqram lisenziyaları qazandım və işim onların Instagram səhifəsində və saytında yer aldı.",
    'about.award5.meta': "2019 &nbsp;·&nbsp; Black Mamba Jurnalı",
    'about.award5.body': "“Tokyo Apartment” layihəm Black Mamba jurnalında dərc olundu və onların rəsmi Instagram səhifəsində paylaşıldı, beləliklə geniş beynəlxalq dizayn auditoriyasına çatdı.",

    /* services */
    'svc.1.title': "Memarlıq<br>Vizuallaşdırması",
    'svc.1.desc':  "Binaların, fasadların və memarlıq konsepsiyalarının fotorealistik renderləri. İlkin həcm araşdırmalarından son təqdimat görüntülərinə qədər planları və 3D modelləri dəqiq, təsirli vizuallara çevirirəm — memarların, developerlərin və müştərilərin layihəni tikilməzdən əvvəl əsl görməsi üçün.",
    'svc.2.title': "İnteryer Dizaynı<br>&amp; Vizuallaşdırma",
    'svc.2.desc':  "İnteryer məkanların detallı renderi ilə yanaşı tam dizayn istiqamətləndirməsi. Material, işıq və atmosfer memarlığın özü qədər diqqətlə işlənir — plan konsepsiyalarından və material paletlərindən tutmuş işıq sxemlərinə və mebel seçiminə qədər, hamısı bütöv və reallaşdırıla bilən bir baxış formalaşdırır.",
    'svc.3.title': "İnteraktiv<br>Tətbiq",
    'svc.3.desc':  "Unreal Engine-də qurulan real-time memarlıq tətbiqləri. Müştərilər məkanda 1:1 miqyasda hərəkət edə, materialları dəyişə, işıqlandırmanı tənzimləyə və layihəni tikinti başlamazdan çox əvvəl yaşaya bilirlər — təqdimatlar, satış və müştəri təsdiqi üçün immersiv alət.",
    'svc.4.title': "Məhsul Vizuallaşdırması<br>&amp; Animasiya",
    'svc.4.desc':  "Avtomobil, istehlak malları və sənaye dizaynı üçün yüksək səviyyəli məhsul renderləri və animasiya ardıcıllıqları. Dəqiq modelləşdirmə, studiya işıqlandırması və motion dizayn birlikdə məhsulu layiq olduğu keyfiyyətdə təqdim edir — hero kadrlardan və turntable-lardan tam kampaniya vizuallarına qədər.",

    /* real-time app */
    'rta.heading': "İnteraktiv Memarlıq Virtual Tətbiqi",
    'rta.eyebrow': "Unreal Engine · Real-Time Vizuallaşdırma",
    'rta.title':   "Real-Time<br>İnteraktiv",
    'rta.lead':    "İçində gəzə biləcəyiniz memarlıq. Müştərilərin layihəni tikintidən xeyli əvvəl yaşamasına imkan verən interaktiv tətbiqlər, 360° turlar və animasiyalar.",
    'rta.ix1':     "Son 360° Tur",
    'rta.ix2':     "Unreal Tətbiqi",
    'rta.ix3':     "360° Turlar",
    'rta.ix4':     "Animasiya",
    'rta.f.eyebrow': "Son layihə · 2026",
    'rta.f.title': "Mənzil İnteryeri — İnteraktiv 360° Tur",
    'rta.f.open':  "Tam turu aç",
    'rta.f.desc':  "LACHIN ARCHITECTS tərəfindən dizayn və vizuallaşdırılmış mənzil interyeri, interaktiv 360° tur formatında. Otaqlar arasında keçin, sərbəst ətrafa baxın və dizaynın hər detalını öz tempinizlə kəşf edin — kompüterdə, telefonda və ya VR-da.",
    'rta.f.hint':  "Ətrafa baxmaq üçün sürüşdürün · otaq dəyişmək üçün nöqtələrə toxunun",
    'rta.f.fs':    "Tam ekranda bax",
    'rta.m.project': "Layihə",
    'rta.m.type':  "Növ",
    'rta.m.type.v': "İnteraktiv 360° virtual tur",
    'rta.m.year':  "İl",
    'rta.m.software': "Proqram",
    'rta.ue.eyebrow': "Unreal Engine Tətbiqi",
    'rta.ue.title': "İnteraktiv Memarlıq Tətbiqi",
    'rta.ue.more': "Layihə səhifəsi",
    'rta.ue.desc': "Unreal Engine-də qurulmuş, bütöv yaşayış mühitini simulyasiya edən real-time tətbiq — tək bir render yox, istənilən bucaqdan, istənilən fəsildə və günün istənilən vaxtında gəzə biləcəyiniz canlı məkan.",
    'rta.ue.f1':   "Dron görünüşü ↔ yer görünüşü, kəsintisiz keçidlə",
    'rta.ue.f2':   "MetaHuman ilə 1:1 miqyasda gəzinti, interyerlər daxil",
    'rta.ue.f3':   "Ətraf &amp; infrastruktur sistemi, canlı məsafələrlə",
    'rta.ue.f4':   "Ultra Dynamic Sky — 4 fəsil, hava və günün vaxtı",
    'rta.ue.f5':   "Teleport, kino kamerası və skrinşot alətləri",
    'rta.ue.f6':   "Hərəkətli nəqliyyat, tikinti sahəsi, EV şarj, uşaq meydançaları",
    'rta.ue.watch': "Tam təqdimata bax",
    'rta.s1':      "Küçə görünüşü — hava &amp; vaxt idarəsi",
    'rta.s2':      "Dron görünüşü — ətraf &amp; infrastruktur",
    'rta.s3':      "İnteryer gəzintisi — qonaq otağı",
    'rta.v1':      "Memarlıq ətrafı &amp; infrastruktur",
    'rta.v3':      "İnteryer dizayn rejimi",
    'rta.tours':   "360 Virtual Turlar",
    'rta.tours.title': "Əvvəlki Layihələr 360°-də",
    'rta.tours.desc': "Əvvəlki interyer və memarlıq layihələrinin panoram turları. Ətrafa baxmaq üçün hər pəncərənin içində sürüşdürün.",
    'rta.anim':    "Animasiya",
    'rta.anim.title': "Memarlıq &amp; Məhsul Animasiyası",
    'rta.a1':      "İnteryer dizayn animasiyası",
    'rta.a2':      "Qonaq otağı CGI — əvvəl / sonra",
    'rta.a3':      "Hyundai Santa Fe 2025",
    'rta.cta.eyebrow': "Növbəti layihə",
    'rta.cta.title': "Layihənizi interaktiv təqdim etmək istəyirsiniz?",
    'rta.cta.desc': "Bir mənzilin 360° turundan tam yaşayış kompleksinin real-time tətbiqinə qədər — layihəniz üçün doğru formatı birlikdə tapaq.",
    'rta.cta.btn': "Əlaqə saxla",

    /* course */
    'course.heading': "Kurs",

    /* contact */
    'contact.map.baku':     "Azərbaycan, Bakı",
    'contact.map.sumqayit': "Azərbaycan, Sumqayıt",
    'contact.map.munich':   "Almaniya, Münhen",
    'contact.findus':       "Bizi burada tapın:",
    'contact.city.baku':     "Bakı, Azərbaycan",
    'contact.city.sumqayit': "Sumqayıt, Azərbaycan",
    'contact.city.munich':   "Münhen, Almaniya",
    'contact.street.baku':     "Xaqani küçəsi, Nəsimi",
    'contact.street.sumqayit': "Bulvar küçəsi 67A, AZ5000",
    'contact.street.munich':   "Allach-Untermenzing, 80999 München",
    'contact.hours':   "Bazar ertəsi – Cümə &nbsp;·&nbsp; 09:00 – 18:00",
    'contact.modes':   "Hibrid &nbsp;·&nbsp; Yerində",
    'contact.remote':  "Uzaqdan",
    'contact.email':   "Əlaqə: studio@lachinguluyev.com",
    'form.name':     "Ad",
    'form.mail':     "E-poçt",
    'form.subject':  "Mövzu",
    'form.files':    "Fayllar",
    'form.choose':   "Fayl seç",
    'form.nofile':   "Fayl seçilməyib",
    'form.maxsize':  "Maks. 100 MB",
    'form.message':  "Təsvir və ya Mesaj",
    'form.send':     "Göndər",
    'form.sending':  "Göndərilir…",
    'form.ok':       "Mesaj uğurla göndərildi.",
    'form.err':      "Xəta baş verdi. Zəhmət olmasa yenidən cəhd edin.",
    'form.toobig':   "100 MB limitini aşır",
    'form.selected': "fayl seçildi",
  },

};

/* ─── runtime ─── */
const LANG_ORDER = ['en', 'de', 'az'];

let currentLang = localStorage.getItem('lang') || 'en';
if (!I18N[currentLang]) currentLang = 'en';

function t(key) {
  return (I18N[currentLang] && I18N[currentLang][key]) || I18N.en[key] || '';
}

function applyLang(lang) {
  if (!I18N[lang]) lang = 'en';
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.setAttribute('lang', lang);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = t(el.getAttribute('data-i18n'));
    if (v) el.innerHTML = v;
  });

  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = lang.toUpperCase();

  document.dispatchEvent(new CustomEvent('langchange', { detail: { lang: lang } }));
}

/* one button, cycles EN → DE → AZ → EN */
const langBtn = document.getElementById('langBtn');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    const next = LANG_ORDER[(LANG_ORDER.indexOf(currentLang) + 1) % LANG_ORDER.length];
    applyLang(next);
  });
}

applyLang(currentLang);
