/* ========================================
   DATA EKSKUL
======================================== */

const ekskulData = [

    {
        id: 'paskibra',
        name: 'Paskibra',
        category: 'Organisasi',
        icon: 'fa-flag',
        desc: 'Kegiatan baris-berbaris dan pembentukan karakter kedisiplinan.'
    },

    {
        id: 'pramuka',
        name: 'Pramuka',
        category: 'Organisasi',
        icon: 'fa-compass',
        desc: 'Kegiatan kepanduan untuk melatih kemandirian dan kepemimpinan.'
    },

    {
        id: 'pmr',
        name: 'PMR',
        category: 'Organisasi',
        icon: 'fa-kit-medical',
        desc: 'Kegiatan kepalangmerahan dan keterampilan pertolongan pertama.'
    },

    {
        id: 'jepang',
        name: 'Jepang',
        category: 'Seni',
        icon: 'fa-masks-theater',
        desc: 'Kegiatan seni dan budaya.'
    },

    {
        id: 'silat',
        name: 'Silat',
        category: 'Olahraga',
        icon: 'fa-hand-fist',
        desc: 'Kegiatan bela diri dan pengembangan kemampuan fisik.'
    },

    {
        id: 'foster',
        name: 'Foster',
        category: 'Akademik',
        icon: 'fa-lightbulb',
        desc: 'Kegiatan pengembangan kemampuan dan kreativitas siswa.'
    },

    {
        id: 'voli',
        name: 'Voli',
        category: 'Olahraga',
        icon: 'fa-volleyball',
        desc: 'Kegiatan olahraga bola voli dan kerja sama tim.'
    },

    {
        id: 'futsal',
        name: 'Futsal',
        category: 'Olahraga',
        icon: 'fa-futbol',
        desc: 'Kegiatan olahraga futsal dan kerja sama tim.'
    },

    {
        id: 'jurnalis',
        name: 'Jurnalis',
        category: 'Akademik',
        icon: 'fa-newspaper',
        desc: 'Kegiatan jurnalistik, penulisan, dan penyampaian informasi.'
    },

    {
        id: 'mtq',
        name: 'MTQ',
        category: 'Keagamaan',
        icon: 'fa-book-quran',
        desc: 'Kegiatan pengembangan kemampuan membaca dan memahami Al-Qur’an.'
    },

    {
        id: 'rebana',
        name: 'Rebana',
        category: 'Seni',
        icon: 'fa-drum',
        desc: 'Kegiatan seni musik rebana dan pengembangan bakat seni.'
    },

    {
        id: 'rohis',
        name: 'Rohis',
        category: 'Keagamaan',
        icon: 'fa-mosque',
        desc: 'Kegiatan kerohanian dan pembinaan keagamaan siswa.'
    },

    {
        id: 'paduan suara',
        name: 'Paduan Suara',
        category: 'Seni',
        icon: 'fa-music',
        desc: 'Kegiatan paduan suara dan pengembangan kemampuan vokal.'
    },

    {
        id: 'drumband',
        name: 'Drumband',
        category: 'Seni',
        icon: 'fa-drum',
        desc: 'Kegiatan musik dan pertunjukan drumband.'
    },

    {
        id: 'tari',
        name: 'Tari',
        category: 'Seni',
        icon: 'fa-child',
        desc: 'Kegiatan seni tari dan pengembangan kreativitas gerak.'
    }

];


let selectedEkskulId = null;
let selectedEkskulName = '';
let currentFilter = 'all';


/* ========================================
   SAAT HALAMAN SELESAI DIMUAT
======================================== */

document.addEventListener('DOMContentLoaded', function () {

    loadTheme();

    setupTheme();

    setupMobileMenu();

    setupPage();

});


/* ========================================
   MENENTUKAN HALAMAN
======================================== */

function setupPage() {

    const ekskulContainer =
        document.getElementById('ekskulListContainer');

    const registrationForm =
        document.getElementById('registrationForm');


    // Jika halaman index
    if (ekskulContainer) {

        renderEkskulList('all');

    }


    // Jika halaman form
    if (registrationForm) {

        setupRegistrationForm();

        loadSelectedEkskul();

    }

}


/* ========================================
   RENDER EKSKUL
======================================== */

function renderEkskulList(categoryFilter = 'all') {

    const container =
        document.getElementById('ekskulListContainer');

    if (!container) return;

    container.innerHTML = '';


    const filteredData =
        categoryFilter === 'all'
            ? ekskulData
            : ekskulData.filter(
                item => item.category === categoryFilter
            );


    filteredData.forEach(item => {

        const wrapper =
            document.createElement('div');

        wrapper.className =
            'relative group border-b border-slate-200 dark:border-slate-700 last:border-b-0';


        const isChecked =
            selectedEkskulId === item.id;


        wrapper.innerHTML = `

            <input
                type="radio"
                name="ekskul_choice"
                id="ekskul_${item.id}"
                value="${item.id}"
                class="ekskul-radio sr-only"
                ${isChecked ? 'checked' : ''}
            >

            <label
                for="ekskul_${item.id}"
                class="ekskul-row-label flex items-center justify-between py-4 px-3 sm:px-4 cursor-pointer hover:bg-slate-900/60 border-l-4 border-l-transparent transition-all"
            >

                <div class="flex items-start gap-3.5 pr-4 min-w-0">

                    <div class="mt-0.5 w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#111827] text-slate-300 flex items-center justify-center shrink-0 border border-slate-800">

                        <i class="fa-solid ${item.icon} text-xs sm:text-sm"></i>

                    </div>

                    <div class="space-y-1 min-w-0">

                        <div class="flex flex-wrap items-center gap-2">

                            <h3 class="font-bold text-slate-900 dark:text-white text-sm sm:text-base leading-tight">
                                ${item.name}
                            </h3>

                            <span class="px-2 py-0.5 text-[10px] sm:text-[11px] font-medium rounded bg-slate-800 text-slate-400 border border-slate-700/60">
                                ${item.category}
                            </span>

                        </div>

                        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                            ${item.desc}
                        </p>

                    </div>

                </div>


                <div class="shrink-0 flex items-center justify-center pl-2">

                    <div class="radio-outer w-5 h-5 rounded-full border-2 border-slate-700 flex items-center justify-center transition-all">

                        <div class="radio-inner w-2 h-2 rounded-full bg-indigo-400 opacity-0 scale-50 transition-all">
                        </div>

                    </div>

                </div>

            </label>

        `;


        const radio =
            wrapper.querySelector('input');


        radio.addEventListener('change', function () {

            handleEkskulSelection(
                item.id,
                item.name
            );

        });


        container.appendChild(wrapper);

    });

}


/* ========================================
   FILTER EKSKUL
======================================== */

function filterEkskul(category) {

    currentFilter = category;


    document
        .querySelectorAll('.category-btn')
        .forEach(btn => {

            btn.classList.remove('active');

        });


    const activeBtn =
        document.getElementById(
            `btn-cat-${category}`
        );


    if (activeBtn) {

        activeBtn.classList.add('active');

    }


    renderEkskulList(category);

}


/* ========================================
   PILIH EKSKUL
======================================== */

function handleEkskulSelection(id, name) {

    selectedEkskulId = id;
    selectedEkskulName = name;


    const error =
        document.getElementById('page1Error');


    if (error) {

        error.classList.add('hidden');

    }


    const bottomBar =
        document.getElementById('bottomActionBar');


    const nameElement =
        document.getElementById('bottomBarEkskulName');


    if (nameElement) {

        nameElement.textContent =
            name;

    }


    if (bottomBar) {

        bottomBar.classList.remove(
            'translate-y-full',
            'opacity-0'
        );

    }

}


/* ========================================
   PINDAH KE FORM.HTML
======================================== */

function goToPage2() {

    if (!selectedEkskulId) {

        const error =
            document.getElementById('page1Error');

        if (error) {

            error.classList.remove('hidden');

        }

        return;

    }


    /*
        Simpan pilihan ekskul.
        Data ini akan dibaca oleh form.html.
    */

    sessionStorage.setItem(
        'selectedEkskulId',
        selectedEkskulId
    );

    sessionStorage.setItem(
        'selectedEkskulName',
        selectedEkskulName
    );


    // PINDAH HALAMAN
    window.location.href = 'form.html';

}


/* ========================================
   LOAD EKSKUL DI FORM.HTML
======================================== */

function loadSelectedEkskul() {

    const nameElement =
        document.getElementById('selectedEkskulName');


    if (!nameElement) return;


    const savedName =
        sessionStorage.getItem(
            'selectedEkskulName'
        );


    if (!savedName) {

        nameElement.textContent =
            'Belum memilih ekskul';

        return;

    }


    nameElement.textContent =
        savedName;


    selectedEkskulName =
        savedName;

}


/* ========================================
   KEMBALI KE HALAMAN INDEX
======================================== */

function goToPage1() {

    window.location.href = 'index.html#pendaftaran';

}


/* ========================================
   FORM VALIDATION
======================================== */

function setupRegistrationForm() {

    const form =
        document.getElementById(
            'registrationForm'
        );


    if (!form) return;


    const fields = [

        {
            id: 'fullName',
            validate: value =>
                value.trim().length >= 3
                    ? ''
                    : 'Nama lengkap minimal 3 karakter.'
        },

        {
            id: 'email',
            validate: value =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    .test(value.trim())
                    ? ''
                    : 'Format alamat email tidak valid.'
        },

        {
            id: 'password',
            validate: value =>
                value.length >= 8
                    ? ''
                    : 'Password minimal 8 karakter.'
        },

        {
            id: 'confirmPassword',
            validate: value => {

                const password =
                    document.getElementById(
                        'password'
                    );

                return password &&
                    value === password.value
                    ? ''
                    : 'Konfirmasi password tidak cocok.';

            }
        },

        {
            id: 'classOption',
            validate: value =>
                value !== ''
                    ? ''
                    : 'Silakan pilih kelas dan jurusan.'
        },

        {
            id: 'whatsapp',
            validate: value =>
                /^[0-9]{9,13}$/
                    .test(value.trim())
                    ? ''
                    : 'Nomor WhatsApp tidak valid.'
        },

        {
            id: 'reason',
            validate: value =>
                value.trim().length >= 15
                    ? ''
                    : 'Alasan bergabung minimal 15 karakter.'
        }

    ];


    fields.forEach(field => {

        const element =
            document.getElementById(field.id);


        if (!element) return;


        function validateField() {

            const error =
                field.validate(element.value);


            const errorElement =
                document.getElementById(
                    `err-${field.id}`
                );


            if (error) {

                if (errorElement) {

                    errorElement.textContent =
                        error;

                    errorElement.classList.remove(
                        'hidden'
                    );

                }


                element.classList.add(
                    'border-rose-500'
                );


                return false;

            }


            if (errorElement) {

                errorElement.classList.add(
                    'hidden'
                );

            }


            element.classList.remove(
                'border-rose-500'
            );


            return true;

        }


        element.addEventListener(
            'input',
            validateField
        );


        element.addEventListener(
            'blur',
            validateField
        );

    });


    form.addEventListener(
        'submit',
        handleFormSubmit
    );

}


/* ========================================
   SUBMIT FORM
======================================== */

function handleFormSubmit(event) {

    event.preventDefault();


    const fields = [

        {
            id: 'fullName',
            validate: value =>
                value.trim().length >= 3
                    ? ''
                    : 'Nama lengkap minimal 3 karakter.'
        },

        {
            id: 'email',
            validate: value =>
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                    .test(value.trim())
                    ? ''
                    : 'Format email tidak valid.'
        },

        {
            id: 'password',
            validate: value =>
                value.length >= 8
                    ? ''
                    : 'Password minimal 8 karakter.'
        },

        {
            id: 'confirmPassword',
            validate: value =>
                value ===
                document.getElementById(
                    'password'
                ).value
                    ? ''
                    : 'Konfirmasi password tidak cocok.'
        },

        {
            id: 'classOption',
            validate: value =>
                value !== ''
                    ? ''
                    : 'Silakan pilih kelas dan jurusan.'
        },

        {
            id: 'whatsapp',
            validate: value =>
                /^[0-9]{9,13}$/
                    .test(value.trim())
                    ? ''
                    : 'Nomor WA tidak valid.'
        },

        {
            id: 'reason',
            validate: value =>
                value.trim().length >= 15
                    ? ''
                    : 'Alasan bergabung minimal 15 karakter.'
        }

    ];


    let isValid = true;


    fields.forEach(field => {

        const element =
            document.getElementById(field.id);


        if (!element) return;


        const error =
            field.validate(element.value);


        if (error) {

            showError(
                field.id,
                error
            );

            isValid = false;

        }

    });


    if (!isValid) {

        return;

    }


    showSuccessModal();

}


/* ========================================
   SHOW ERROR
======================================== */

function showError(id, message) {

    const element =
        document.getElementById(id);


    const errorElement =
        document.getElementById(
            `err-${id}`
        );


    if (errorElement) {

        errorElement.textContent =
            message;

        errorElement.classList.remove(
            'hidden'
        );

    }


    if (element) {

        element.classList.add(
            'border-rose-500'
        );

    }

}


/* ========================================
   SUCCESS MODAL
======================================== */

function showSuccessModal() {

    const modal =
        document.getElementById(
            'successModal'
        );


    if (!modal) return;


    modal.classList.remove('hidden');

    modal.classList.add('flex');


    setTimeout(() => {

        modal.classList.add('show');

    }, 10);


    const closeButton =
        document.getElementById(
            'closeModalBtn'
        );


    if (closeButton) {

        closeButton.onclick =
            function () {

                modal.classList.remove('show');

                setTimeout(() => {

                    modal.classList.remove('flex');

                    modal.classList.add('hidden');

                    resetForm();

                }, 250);

            };

    }

}


/* ========================================
   RESET FORM
======================================== */

function resetForm() {

    const form =
        document.getElementById(
            'registrationForm'
        );


    if (form) {

        form.reset();

    }


    document
        .querySelectorAll('.form-error')
        .forEach(error => {

            error.classList.add(
                'hidden'
            );

        });


    document
        .querySelectorAll('.form-input')
        .forEach(input => {

            input.classList.remove(
                'border-rose-500'
            );

        });


    sessionStorage.removeItem(
        'selectedEkskulId'
    );

    sessionStorage.removeItem(
        'selectedEkskulName'
    );

}


/* ========================================
   DARK MODE
======================================== */

function loadTheme() {

    const savedTheme =
        localStorage.getItem('theme');


    if (
        savedTheme === 'dark' ||
        (
            !savedTheme &&
            window.matchMedia(
                '(prefers-color-scheme: dark)'
            ).matches
        )
    ) {

        document.documentElement
            .classList.add('dark');

    } else {

        document.documentElement
            .classList.remove('dark');

    }

}


/* ========================================
   THEME BUTTON
======================================== */

function setupTheme() {

    const button =
        document.getElementById(
            'themeToggleBtn'
        );


    const icon =
        document.getElementById(
            'themeIcon'
        );


    if (!button) return;


    updateThemeIcon();


    button.addEventListener(
        'click',
        function () {

            document.documentElement
                .classList.toggle('dark');


            const isDark =
                document.documentElement
                    .classList.contains('dark');


            localStorage.setItem(
                'theme',
                isDark
                    ? 'dark'
                    : 'light'
            );


            updateThemeIcon();

        }
    );

}


function updateThemeIcon() {

    const icon =
        document.getElementById(
            'themeIcon'
        );


    if (!icon) return;


    const isDark =
        document.documentElement
            .classList.contains('dark');


    icon.className =
        isDark
            ? 'fa-solid fa-sun'
            : 'fa-solid fa-moon';

}


/* ========================================
   MOBILE MENU
======================================== */

function setupMobileMenu() {

    const button =
        document.getElementById(
            'mobileMenuBtn'
        );


    const menu =
        document.getElementById(
            'mobileMenu'
        );


    if (!button || !menu) return;


    button.addEventListener(
        'click',
        function () {

            menu.classList.toggle(
                'hidden'
            );

        }
    );


    document
        .querySelectorAll('.mobile-nav-link')
        .forEach(link => {

            link.addEventListener(
                'click',
                function () {

                    menu.classList.add(
                        'hidden'
                    );

                }
            );

        });

}