/**
 * ROSES ESTETSKO - PRODAJNI CENTAR | BANJA LUKA
 * Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
    // Treatment detailed data dictionary for the modal
    const treatmentsData = {
        1: {
            title: "Dubinski Higijenski Tretman Lica",
            category: "Nega Lica",
            duration: "75 minuta",
            price: "50 KM",
            image: "images/treatment-facial.jpg",
            desc: "Temeljni higijenski tretman koji predstavlja osnovu svakog zdravog i negovanog tena. Uklanja nečistoće, komedone i sebum koji zapušavaju pore, poboljšava ćelijsku oksigenaciju i vraća koži sposobnost prirodnog disanja.",
            steps: [
                "Priprema i temeljno uklanjanje nečistoća mikrogelom",
                "Enzimski piling za omekšavanje površinskog sloja",
                "Topla termo-terapija / parenje za otvaranje pora",
                "Precizna i bezbedna manuelna ekstrakcija komedona",
                "Dezinfekcija i umirenje kože visokom frekvencijom (D'Arsonval)",
                "Umirujuća i regenerativna maska prilagođena tipu kože",
                "Završni zaštitni serum i krema sa masažom lica"
            ]
        },
        2: {
            title: "Hydra Glow Biološki Tretman",
            category: "Nega Lica",
            duration: "60 minuta",
            price: "65 KM",
            image: "images/hero-glow.jpg",
            desc: "Inovativni neinvazivni tretman koji kombinuje hidro-eksfolijaciju sa dubokom infuzijom hijaluronske kiseline niske i visoke molekularne mase, antioksidanata i vitamina C. Koža je trenutno hidrirana, jedra i blistava bez perioda oporavka.",
            steps: [
                "Dvofazno čišćenje i toniziranje kože",
                "Hidro-vakuumsko uklanjanje odumrlih ćelija",
                "Infuzija seruma sa čistim hijaluronom i peptidima",
                "Krio-terapija za sužavanje pora i umirenje",
                "Hidrogel maska za maksimalnu hidrataciju",
                "Završni antioksidantni fluid sa SPF zaštitom"
            ]
        },
        3: {
            title: "Maderoterapija & Anticelulit Paket",
            category: "Telo & Masaže",
            duration: "45 minuta",
            price: "40 KM",
            image: "images/treatment-massage.jpg",
            desc: "Popularna holistička tehnika uklanjanja celulita korišćenjem anatomski profilisanih drvenih elemenata. Pored eliminacije 'narandžine kore', ova masaža podstiče cirkulaciju krvi i limfe, ubrzava metabolizam i preoblikuje figuru.",
            steps: [
                "Aktivacija limfnih čvorova i blaga stimulacija",
                "Nanošenje specijalnog termo-aktivnog anticelulit ulja",
                "Tretman drvenim oklagijama različite gustine i namene",
                "Intenzivna drenaža i izbacivanje toksina",
                "Nanošenje krio-gela za zatezanje tonusa kože"
            ]
        },
        4: {
            title: "Ruski Manikir & Trajni Gel Lak",
            category: "Nokti",
            duration: "60 minuta",
            price: "35 KM",
            image: "images/treatment-nails.jpg",
            desc: "Aparatni 'suvi' manikir koji omogućava savršeno preciznu obradu kutikule i zanoktica. Boja se nanosi maksimalno blizu korena nokta ('ispod kutikule'), što omogućava da nokti izgledaju sveže i uredno znatno duže tokom rasta.",
            steps: [
                "Sigurno uklanjanje prethodnog materijala nastavcima za frezu",
                "Oblikovanje prirodnog nokta po želji klijentkinje",
                "Aparatna obrada zanoktica dijamantskim nastavcima",
                "Dehidracija i nanošenje gumene kaučuk baze za jačanje",
                "Nanošenje pigmentisanog gel laka u 2 sloja",
                "Visoki sjaj i nega hranljivim uljem ruže"
            ]
        },
        5: {
            title: "Medicinski & Estetski Spa Pedikir",
            category: "Stopala",
            duration: "60 minuta",
            price: "40 KM",
            image: "images/treatment-pedicure.jpg",
            desc: "Kompletna nega stopala koja rešava estetske i funkcionalne probleme. Pogodno za suva stopala, kurje oči, zadebljanja i urasle nokte uz primenu sterilnih medicinskih instrumenata.",
            steps: [
                "Aromatična antiseptička kupka sa solima mrtvog mora",
                "Tretman zadebljanja i keratoza sterilnim instrumentima",
                "Obrada noktiju i kutikula",
                "Piling stopala i uklanjanje mrtvih ćelija",
                "Masaža hranljivim balzamom sa ureom",
                "Lakiranje po želji klijentkinje"
            ]
        },
        6: {
            title: "Lash Lift Keratin & Laminacija Obrva",
            category: "Trepavice & Obrve",
            duration: "60 minuta",
            price: "55 KM",
            image: "images/treatment-lashes.jpg",
            desc: "Savršen tretman za prirodan, a upečatljiv izgled bez potrebe za veštačkim trepavicama. Podiže i uvija Vaše prirodne trepavice iz korena, dok laminacija daje obrvama definisan, pun i uredan izgled.",
            steps: [
                "Čišćenje i zaštita zone oko očiju",
                "Postavljanje silikonskih jastučića i uvijanje trepavica",
                "Nanošenje preparata za podizanje i fiksiranje",
                "Farbanje trepavica i obrva u željenu nijansu",
                "Keratinski botoks za dubinsku regeneraciju dlake"
            ]
        },
        7: {
            title: "Antistres Relaks Masaža Celog Tela",
            category: "Telo & Masaže",
            duration: "60 minuta",
            price: "45 KM",
            image: "images/treatment-massage.jpg",
            desc: "Nežna, ritmična i duboko opuštajuća masaža celog tela. Uz prijatne note eteričnih ulja ruže i lavande, pomaže u oslobađanju od nagomilanog mentalnog i fizičkog stresa.",
            steps: [
                "Uvodna inhalacija prirodnim aromaterapijskim esencijama",
                "Masaža leđa, ramena i vrata toplim uljem",
                "Opuštanje mišića ruku i nogu blagim drenažnim pokretima",
                "Masaža stopala i dlanova za stimulaciju akupresurnih tačaka",
                "Završno rasterećenje napetosti vrata i skalpa"
            ]
        },
        8: {
            title: "Depilacija Šećernom Pastom (Egipatska)",
            category: "Depilacija",
            duration: "45 minuta",
            price: "30 KM",
            image: "images/treatment-depil.jpg",
            desc: "Najprirodniji i najnežniji metod uklanjanja dlačica. 100% prirodna pasta od šećera, vode i limuna uklanja dlačice u smeru njihovog prirodnog rasta, smanjujući bol i pojavu uraslih dlačica.",
            steps: [
                "Dezinfekcija i nanošenje antiseptičkog pudera",
                "Nanošenje mlake šećerne paste suprotno od rasta",
                "Nežno i precizno uklanjanje dlačica u smeru rasta",
                "Umirujući aloe vera losion protiv crvenila"
            ]
        },
        9: {
            title: "AI Diodna Trajna Epilacija",
            category: "✨ Premium AI Laseri",
            duration: "od 20 minuta",
            price: "od 30 KM",
            image: "images/hero-glow.jpg",
            desc: "Najnovija generacija AI diodnog lasera sa 3 talasne dužine (755nm / 808nm / 1064nm) i ICE kontaktnim hlađenjem na -10°C. Tretman je 100% bezbolan, siguran za sve tipove kože i sve nijanse tena, uz trajno smanjenje dlačica već nakon prvog tretmana.",
            steps: [
                "Konsultacije i analiza tipa kože i dlačica",
                "Priprema zone — čišćenje i nanošenje gela za kontaktno hlađenje",
                "AI kalibracija parametara lasera prema Vašem fototipu",
                "Tretman ICE diodnim laserom (bezbolno, bez crvenila)",
                "Hlađenje i nanošenje umirujuće aloe maske",
                "Uputstvo za negu u narednih 24–48 h"
            ]
        },
        10: {
            title: "AI Karbon Laser Piling (Hollywood Peel)",
            category: "✨ Premium AI Laseri",
            duration: "45 minuta",
            price: "70 KM",
            image: "images/treatment-facial.jpg",
            desc: "Luksuzni tretman nano-karbonskom emulzijom i Q-switch ND:YAG laserom. Kombinacija karbonske maske i laserskog impulsa dubinski pročišćava pore, reguliše sebum, uklanja mitesere i pigmentne mrlje, pruža trenutan 'stakleni' porcelanski ten bez perioda oporavka.",
            steps: [
                "Temeljno čišćenje i dezinfekcija lica",
                "Nanošenje nano-karbonske emulzije po celom licu",
                "Penetracija karbona u pore pod toplom lampom (10 min)",
                "Laserska ablacija karbona Q-switch impulsima — uklanjanje nečistoća",
                "Drugi prolaz laserom za stimulaciju kolagena i rebonding",
                "Umirujući serum i SPF zaštitni fluid"
            ]
        },
        11: {
            title: "AI Laser Skin Rejuvenation & Lifting",
            category: "✨ Premium AI Laseri",
            duration: "50 minuta",
            price: "80 KM",
            image: "images/hero-portrait.jpg",
            desc: "Fototermalno podmlađivanje i stimulacija prirodne sinteze kolagena i elastina laserom. Efikasno ublažava hiperpigmentacije, rosacea i kapilare, zateže tonus lica, vrata i dekoltea uz dugotrajni lifting efekat bez oporavka.",
            steps: [
                "Detaljna analiza kože i markiranje zona tretmana",
                "Čišćenje i priprema kože hladnom vodenom terapijom",
                "AI konfiguracija parametara lasera prema ciljanoj indikaciji",
                "Fototermalni tretman — stimulacija kolagena i redukcija pigmentacije",
                "Krio-hlađenje za minimizaciju crvenila",
                "Nanošenje post-laser regenerativnog seruma i SPF zaštite"
            ]
        }
    };

    // Product detailed data dictionary for the reservation modal
    const productsData = {
        1: {
            title: "Hyaluron Hydra Infusion Serum",
            category: "Serumi & Esencije",
            price: "48 KM",
            volume: "30 ml",
            image: "images/product-serum.jpg",
            desc: "Koncentrovani serum trostruke molekularne mase sa čistim hijaluronom, pantenolom i ekstraktom runolista. Pruža trenutnu hidrataciju u dubljim slojevima epiderma i vizuelno popunjava fine bore.",
            usage: "Naneti 3-4 kapi ujutru i uveče na čisto, blago vlažno lice pre kreme."
        },
        2: {
            title: "Peptide Lift & Firming Cream",
            category: "Kreme & Hidratacija",
            price: "55 KM",
            volume: "50 ml",
            image: "images/product-cream.jpg",
            desc: "Luksuzna krema sa patentiranim peptidnim kompleksom, ceramidima i skvalanom. Učvršćuje opuštenu kožu, poboljšava elastičnost i obnavlja prirodnu barijeru kože.",
            usage: "Umasirati kružnim pokretima na lice, vrat i dekolte svako jutro i veče."
        },
        3: {
            title: "Enzyme Radiance Peeling Prah",
            category: "Pilinzi & Čišćenje",
            price: "42 KM",
            volume: "75 g",
            image: "images/product-peeling.jpg",
            desc: "Prah sa prirodnim voćnim enzimima papaje i fermentisanim pirinčem. Ne sadrži grube čestice, a efikasno uklanja mrtve ćelije, pročišćava pore i ujednačava tonus kože.",
            usage: "Pomešati malu količinu praha sa nekoliko kapi vode, stvoriti penu i masirati lice 1 minut, potom isprati."
        },
        4: {
            title: "Rose Elixir Ulje za Zanoktice",
            category: "Nega Tela & Ulja",
            price: "22 KM",
            volume: "15 ml",
            image: "images/product-oil.jpg",
            desc: "Intenzivni eliksir sa uljem divlje ruže, jojobom i vitaminom E. Hrani suve zanoktice, podstiče zdrav rast noktiju i sprečava njihovo listanje.",
            usage: "Naneti po jednu kap na svaki nokat i nežno utrljati u predeo kutikule."
        },
        5: {
            title: "Velvet Rose Hranljivi Maslac za Telo",
            category: "Nega Tela & Ulja",
            price: "36 KM",
            volume: "200 ml",
            image: "images/product-body.jpg",
            desc: "Bogati maslac sa organskim ši puterom, ekstraktom damašćanske ruže i uljem slatkog badema. Koži pruža svilenkast osećaj i prijatan cvetni miris.",
            usage: "Naneti na suvu ili blago vlažnu kožu nakon tuširanja, posebno na suve delove tela."
        },
        6: {
            title: "Invisible Silk SPF 50+ Zaštitni Fluid",
            category: "Kreme & Hidratacija",
            price: "38 KM",
            volume: "50 ml",
            image: "images/product-spf.jpg",
            desc: "Ultra lagani fluid koji pruža maksimalnu zaštitu od UVA i UVB zračenja. Brzo se upija, ne ostavlja beli trag i idealan je kao podloga za svakodnevnu šminku.",
            usage: "Naneti ravnomerno na lice kao poslednji korak jutarnje nege, 15 minuta pre izlaska na sunce."
        }
    };

    /* --------------------------------------------------------------------------
     * 1. LIVE WORKING HOURS & STATUS CHECKER (Banja Luka Time)
     * -------------------------------------------------------------------------- */
    function updateLiveWorkingStatus() {
        const liveDot = document.getElementById('liveDot');
        const liveText = document.getElementById('liveStatusText');
        const contactBanner = document.getElementById('contactStatusBanner');
        const contactDetail = document.getElementById('contactStatusDetail');

        // Current date in local time
        const now = new Date();
        const day = now.getDay(); // 0 is Sunday, 1 is Monday ... 6 is Saturday
        const hour = now.getHours();
        const minute = now.getMinutes();
        const currentMinutes = hour * 60 + minute;

        // Schedule:
        // Mon-Fri: 08:00 - 20:00 (480 to 1200 mins)
        // Saturday: 08:00 - 16:00 (480 to 960 mins)
        // Sunday: Closed

        let isOpen = false;
        let statusMessage = "";
        let contactMessage = "";

        if (day >= 1 && day <= 5) {
            // Monday - Friday
            if (currentMinutes >= 480 && currentMinutes < 1200) {
                isOpen = true;
                statusMessage = "Otvoreno danas do 20:00";
                contactMessage = "Salon je trenutno OTVOREN (do 20:00)";
            } else if (currentMinutes < 480) {
                statusMessage = "Zatvoreno · Otvara se danas u 08:00";
                contactMessage = "Trenutno zatvoreno · Otvaramo danas u 08:00";
            } else {
                statusMessage = day === 5 ? "Zatvoreno · Otvara se u subotu u 08:00" : "Zatvoreno · Otvara se sutra u 08:00";
                contactMessage = day === 5 ? "Zatvoreno · Radimo u subotu od 08:00 do 16:00" : "Zatvoreno · Radimo sutra od 08:00";
            }
        } else if (day === 6) {
            // Saturday
            if (currentMinutes >= 480 && currentMinutes < 960) {
                isOpen = true;
                statusMessage = "Otvoreno danas do 16:00";
                contactMessage = "Salon je trenutno OTVOREN (subota do 16:00)";
            } else if (currentMinutes < 480) {
                statusMessage = "Zatvoreno · Otvara se danas u 08:00";
                contactMessage = "Trenutno zatvoreno · Subotom radimo 08:00 – 16:00";
            } else {
                statusMessage = "Zatvoreno · Otvara se u ponedeljak u 08:00";
                contactMessage = "Trenutno zatvoreno · Otvaramo u ponedeljak u 08:00";
            }
        } else {
            // Sunday
            statusMessage = "Zatvoreno nedeljom · Otvara se u ponedeljak u 08:00";
            contactMessage = "Nedeljom ne radimo · Otvaramo u ponedeljak u 08:00";
        }

        // Update Top Bar
        if (liveDot && liveText) {
            if (isOpen) {
                liveDot.classList.remove('closed');
                liveText.textContent = statusMessage;
            } else {
                liveDot.classList.add('closed');
                liveText.textContent = statusMessage;
            }
        }

        // Update Contact Card Banner
        if (contactBanner && contactDetail) {
            if (isOpen) {
                contactBanner.classList.remove('closed');
                contactDetail.textContent = contactMessage;
            } else {
                contactBanner.classList.add('closed');
                contactDetail.textContent = contactMessage;
            }
        }

        // Highlight Today's Row in Working Hours Table
        const rows = document.querySelectorAll('.hours-table .day-row');
        rows.forEach(r => r.classList.remove('today'));
        
        const todayRow = document.getElementById(`day-row-${day}`);
        if (todayRow) {
            todayRow.classList.add('today');
            const todayBadge = todayRow.querySelector('.today-tag');
            if (todayBadge) todayBadge.style.display = 'inline-block';
        }
    }

    updateLiveWorkingStatus();
    // Refresh status every 60 seconds
    setInterval(updateLiveWorkingStatus, 60000);

    /* --------------------------------------------------------------------------
     * 2. HEADER SCROLL EFFECT & MOBILE MENU TOGGLE
     * -------------------------------------------------------------------------- */
    const mainHeader = document.getElementById('mainHeader');
    const mobileToggle = document.getElementById('mobileToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const backToTopBtn = document.getElementById('backToTopBtn');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;

        // Sticky shadow
        if (scrollY > 40) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }

        // Back to top
        if (scrollY > 500) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });

    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    if (mobileToggle && mobileDrawer) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = mobileDrawer.classList.toggle('open');
            mobileToggle.classList.toggle('open');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });

        // Close drawer when any mobile link is clicked
        const mobileLinks = document.querySelectorAll('.mobile-nav-link');
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileDrawer.classList.remove('open');
                mobileToggle.classList.remove('open');
                mobileToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Dynamic current year
    const yearEl = document.getElementById('currentYear');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    /* --------------------------------------------------------------------------
     * 3. BOOKING MODAL LOGIC
     * -------------------------------------------------------------------------- */
    const bookingBackdrop = document.getElementById('bookingModalBackdrop');
    const closeBookingBtn = document.getElementById('closeBookingModalBtn');
    const bookingForm = document.getElementById('bookingForm');
    const bookServiceSelect = document.getElementById('bookServiceSelect');
    const bookDateField = document.getElementById('bookDateField');
    const dateHint = document.getElementById('dateHint');

    // Set minimum date to today
    if (bookDateField) {
        const todayStr = new Date().toISOString().split('T')[0];
        bookDateField.min = todayStr;
        bookDateField.value = todayStr;

        // Check if date chosen is Sunday
        bookDateField.addEventListener('change', (e) => {
            const chosen = new Date(e.target.value);
            if (chosen.getDay() === 0) {
                dateHint.textContent = "⚠️ Nedeljom ne radimo. Molimo izaberite ponedeljak - subotu.";
                dateHint.style.color = "#DC2626";
            } else if (chosen.getDay() === 6) {
                dateHint.textContent = "ℹ️ Subotom je radno vreme 08:00 – 16:00.";
                dateHint.style.color = "var(--text-muted)";
            } else {
                dateHint.textContent = "ℹ️ Radnim danima radno vreme je 08:00 – 20:00.";
                dateHint.style.color = "var(--text-muted)";
            }
        });
    }

    function openBookingModal(preselectedService) {
        if (bookingBackdrop) {
            bookingBackdrop.classList.add('open');
            bookingBackdrop.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';

            if (preselectedService && bookServiceSelect) {
                let found = false;
                for (let option of bookServiceSelect.options) {
                    if (option.value.toLowerCase().includes(preselectedService.toLowerCase().trim())) {
                        bookServiceSelect.value = option.value;
                        found = true;
                        break;
                    }
                }
                if (!found && preselectedService !== 'general') {
                    // Try to match by partial text
                    for (let option of bookServiceSelect.options) {
                        if (option.text.toLowerCase().includes(preselectedService.toLowerCase().trim())) {
                            bookServiceSelect.value = option.value;
                            break;
                        }
                    }
                }
            }
        }
    }

    function closeBookingModal() {
        if (bookingBackdrop) {
            bookingBackdrop.classList.remove('open');
            bookingBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }
    }

    // Attach listeners to all open-booking buttons
    document.querySelectorAll('.open-booking-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const service = btn.getAttribute('data-service') || 'general';
            openBookingModal(service);
        });
    });

    if (closeBookingBtn) {
        closeBookingBtn.addEventListener('click', closeBookingModal);
    }

    if (bookingBackdrop) {
        bookingBackdrop.addEventListener('click', (e) => {
            if (e.target === bookingBackdrop) {
                closeBookingModal();
            }
        });
    }

    // Form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const service = document.getElementById('bookServiceSelect').value;
            const date = document.getElementById('bookDateField').value;
            const time = document.getElementById('bookTimeField').value;
            const specialist = document.getElementById('bookSpecialistSelect').value;
            const phone = document.getElementById('bookPhoneField').value;
            const name = document.getElementById('bookNameField').value;
            const note = document.getElementById('bookNoteField').value;

            // Date validation for Sunday
            const chosenDate = new Date(date);
            if (chosenDate.getDay() === 0) {
                showToast("Nedelja je neradni dan", "Molimo izaberite drugi dan (ponedeljak - subota).", "⚠️");
                return;
            }

            // Time validation for Saturday > 16:00
            if (chosenDate.getDay() === 6 && (time.startsWith("16") || time.startsWith("17") || time.startsWith("18"))) {
                showToast("Subotom radimo do 16:00", "Molimo odaberite jutarnji ili ranopopodnevni termin subotom.", "⚠️");
                return;
            }

            closeBookingModal();
            bookingForm.reset();

            // Format WhatsApp Message Link
            const waText = encodeURIComponent(
                `Zdravo, želim da zakažem termin u Roses salonu:\n` +
                `• Ime: ${name}\n` +
                `• Tretman: ${service}\n` +
                `• Datum i vreme: ${date} u ${time}h\n` +
                `• Kozmetičar: ${specialist}\n` +
                `• Kontakt telefon: ${phone}` +
                (note ? `\n• Napomena: ${note}` : "")
            );
            const waUrl = `https://wa.me/38751262151?text=${waText}`;

            showToast(
                `Hvala Vam, ${name}!`,
                `Vaš zahtev za termin je primljen. Kontaktiraćemo Vas na ${phone} radi potvrde.`,
                "🌸"
            );

            // Optional direct WhatsApp dialog option
            setTimeout(() => {
                const sendWA = confirm("Želite li da direktno pošaljete detalje rezervacije na Roses kontakt broj 051 262-151?");
                if (sendWA) {
                    window.open(waUrl, '_blank');
                }
            }, 600);
        });
    }

    /* --------------------------------------------------------------------------
     * 4. TREATMENT DETAILS MODAL
     * -------------------------------------------------------------------------- */
    const treatmentModalBackdrop = document.getElementById('treatmentModalBackdrop');
    const closeTreatmentModalBtn = document.getElementById('closeTreatmentModalBtn');
    const treatmentModalContent = document.getElementById('treatmentModalContent');

    function openTreatmentModal(treatmentId) {
        const item = treatmentsData[treatmentId];
        if (!item || !treatmentModalContent) return;

        treatmentModalContent.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="modal-detail-img">
            <div class="modal-detail-badges">
                <span class="modal-detail-badge">${item.category}</span>
                <span class="modal-detail-badge">⏱️ ${item.duration}</span>
                <span class="modal-detail-badge" style="background:#FFE4EC; color:var(--rose-primary); font-weight:700;">🏷️ ${item.price}</span>
            </div>
            <h3 class="modal-title" style="margin-bottom:0.75rem;">${item.title}</h3>
            <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.65; margin-bottom:1.5rem;">${item.desc}</p>
            
            <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--rose-night); margin-bottom:0.6rem;">Faze tretmana:</h4>
            <ul style="list-style:disc; padding-left:1.25rem; font-size:0.9rem; color:var(--text-secondary); line-height:1.6; margin-bottom:2rem;">
                ${item.steps.map(s => `<li>${s}</li>`).join('')}
            </ul>

            <div style="display:flex; gap:1rem; flex-wrap:wrap;">
                <button type="button" class="btn btn-primary btn-block open-from-treatment-btn" data-treatment-title="${item.title} (${item.price})">
                    <span>Zakaži Ovaj Tretman (${item.price})</span>
                </button>
            </div>
        `;

        treatmentModalBackdrop.classList.add('open');
        treatmentModalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        // Bind button inside dynamic modal
        const bookBtn = treatmentModalContent.querySelector('.open-from-treatment-btn');
        if (bookBtn) {
            bookBtn.addEventListener('click', () => {
                treatmentModalBackdrop.classList.remove('open');
                openBookingModal(bookBtn.getAttribute('data-treatment-title'));
            });
        }
    }

    document.querySelectorAll('.open-treatment-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-treatment-id');
            openTreatmentModal(id);
        });
    });

    if (closeTreatmentModalBtn) {
        closeTreatmentModalBtn.addEventListener('click', () => {
            treatmentModalBackdrop.classList.remove('open');
            treatmentModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    }

    if (treatmentModalBackdrop) {
        treatmentModalBackdrop.addEventListener('click', (e) => {
            if (e.target === treatmentModalBackdrop) {
                treatmentModalBackdrop.classList.remove('open');
                treatmentModalBackdrop.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }

    /* --------------------------------------------------------------------------
     * 5. PRODUCT RESERVATION MODAL
     * -------------------------------------------------------------------------- */
    const productModalBackdrop = document.getElementById('productModalBackdrop');
    const closeProductModalBtn = document.getElementById('closeProductModalBtn');
    const productModalContent = document.getElementById('productModalContent');

    function openProductModal(productId) {
        const prod = productsData[productId];
        if (!prod || !productModalContent) return;

        productModalContent.innerHTML = `
            <img src="${prod.image}" alt="${prod.title}" class="modal-detail-img">
            <div class="modal-detail-badges">
                <span class="modal-detail-badge">${prod.category}</span>
                <span class="modal-detail-badge">${prod.volume}</span>
                <span class="modal-detail-badge" style="background:#FFE4EC; color:var(--rose-primary); font-weight:700;">${prod.price}</span>
            </div>
            <h3 class="modal-title" style="margin-bottom:0.5rem;">${prod.title}</h3>
            <p style="font-size:0.95rem; color:var(--text-secondary); line-height:1.6; margin-bottom:1rem;">${prod.desc}</p>
            
            <div style="background:var(--cream-bg); padding:1rem; border-radius:var(--radius-sm); border:1px solid var(--border-color); margin-bottom:1.5rem;">
                <strong style="display:block; font-size:0.85rem; color:var(--rose-night); margin-bottom:0.2rem;">Način primene:</strong>
                <p style="font-size:0.88rem; color:var(--text-secondary);">${prod.usage}</p>
            </div>

            <form id="productReserveForm" style="display:flex; flex-direction:column; gap:0.9rem;">
                <div class="form-group">
                    <label style="font-size:0.85rem; font-weight:600;">Vaše Ime i Prezime *</label>
                    <input type="text" id="pCustName" class="form-control" placeholder="Ime i prezime" required>
                </div>
                <div class="form-group">
                    <label style="font-size:0.85rem; font-weight:600;">Vaš Kontakt Telefon *</label>
                    <input type="tel" id="pCustPhone" class="form-control" placeholder="npr. 065 123 456" required>
                </div>
                <p style="font-size:0.78rem; color:var(--text-muted);">
                    📍 Preuzimanje i plaćanje vrši se lično u salonu Roses na adresi <strong>Novice Cerovića 5, Banja Luka</strong>.
                </p>
                <button type="submit" class="btn btn-primary btn-block btn-lg">
                    <span>Rezerviši za Preuzimanje (${prod.price})</span>
                </button>
            </form>
        `;

        productModalBackdrop.classList.add('open');
        productModalBackdrop.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const pForm = document.getElementById('productReserveForm');
        if (pForm) {
            pForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const cName = document.getElementById('pCustName').value;
                const cPhone = document.getElementById('pCustPhone').value;

                productModalBackdrop.classList.remove('open');
                productModalBackdrop.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';

                showToast(
                    "Proizvod je rezervisan!",
                    `${cName}, Vaš primerak (${prod.title}) čeka Vas u Roses salonu, Novice Cerovića 5.`,
                    "🛍️"
                );
            });
        }
    }

    document.querySelectorAll('.open-product-modal-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-product-id');
            openProductModal(id);
        });
    });

    if (closeProductModalBtn) {
        closeProductModalBtn.addEventListener('click', () => {
            productModalBackdrop.classList.remove('open');
            productModalBackdrop.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        });
    }

    if (productModalBackdrop) {
        productModalBackdrop.addEventListener('click', (e) => {
            if (e.target === productModalBackdrop) {
                productModalBackdrop.classList.remove('open');
                productModalBackdrop.setAttribute('aria-hidden', 'true');
                document.body.style.overflow = '';
            }
        });
    }

    /* --------------------------------------------------------------------------
     * 6. FILTER TABS (Services & Products)
     * -------------------------------------------------------------------------- */
    // Services Filter
    const serviceTabs = document.querySelectorAll('.filter-tab');
    const serviceCards = document.querySelectorAll('.service-card');

    serviceTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            serviceTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-filter');
            serviceCards.forEach(card => {
                const cat = card.getAttribute('data-category');
                if (filter === 'all' || cat === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Products Filter
    const productTabs = document.querySelectorAll('.product-tab');
    const productCards = document.querySelectorAll('.product-card');

    productTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            productTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const filter = tab.getAttribute('data-pfilter');
            productCards.forEach(card => {
                const cat = card.getAttribute('data-pcategory');
                if (filter === 'all' || cat === filter) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    /* --------------------------------------------------------------------------
     * 7. REVIEWS CAROUSEL / SLIDER — Groups of 4, 3 pages
     * -------------------------------------------------------------------------- */
    const reviewsTrack = document.getElementById('reviewsTrack');
    const prevReviewBtn = document.getElementById('prevReviewBtn');
    const nextReviewBtn = document.getElementById('nextReviewBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');

    if (reviewsTrack) {
        const reviewCards = Array.from(reviewsTrack.querySelectorAll('.review-card'));
        const CARDS_PER_PAGE = 4;
        const totalPages = Math.ceil(reviewCards.length / CARDS_PER_PAGE);
        let currentPage = 0;

        // Create indicator dots (one per page)
        for (let i = 0; i < totalPages; i++) {
            const dot = document.createElement('div');
            dot.className = `carousel-dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => {
                currentPage = i;
                updateReviewsView();
            });
            indicatorsContainer.appendChild(dot);
        }

        function updateReviewsView() {
            const dots = indicatorsContainer.querySelectorAll('.carousel-dot');
            dots.forEach((d, idx) => d.classList.toggle('active', idx === currentPage));

            const start = currentPage * CARDS_PER_PAGE;
            const end = start + CARDS_PER_PAGE;

            reviewCards.forEach((card, idx) => {
                if (idx >= start && idx < end) {
                    card.style.display = 'flex';
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(12px)';
                    // Animate in with slight stagger
                    setTimeout(() => {
                        card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, (idx - start) * 60);
                } else {
                    card.style.display = 'none';
                    card.style.opacity = '';
                    card.style.transform = '';
                    card.style.transition = '';
                }
            });
        }

        if (prevReviewBtn) {
            prevReviewBtn.addEventListener('click', () => {
                currentPage = (currentPage - 1 + totalPages) % totalPages;
                updateReviewsView();
            });
        }

        if (nextReviewBtn) {
            nextReviewBtn.addEventListener('click', () => {
                currentPage = (currentPage + 1) % totalPages;
                updateReviewsView();
            });
        }

        updateReviewsView();
    }

    /* --------------------------------------------------------------------------
     * 8. FAQ ACCORDION
     * -------------------------------------------------------------------------- */
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('open');
            // Close other items
            faqItems.forEach(other => {
                other.classList.remove('open');
                other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
            });
            // Toggle clicked
            if (!isOpen) {
                item.classList.add('open');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });

    /* --------------------------------------------------------------------------
     * 9. TOAST NOTIFICATION UTILITY
     * -------------------------------------------------------------------------- */
    function showToast(title, message, icon = "🌸") {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <div class="toast-icon">${icon}</div>
            <div class="toast-msg">
                <strong>${title}</strong>
                <p>${message}</p>
            </div>
        `;

        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 5000);
    }
});
