// ==============================
// CALL NOW POPUP
// ==============================

const callBtn = document.getElementById("callBtn");
const callModal = document.getElementById("callModal");
const closeCallModal = document.getElementById("closeCallModal");

callBtn.addEventListener("click", function () {
    callModal.classList.add("show");
});

closeCallModal.addEventListener("click", function () {
    callModal.classList.remove("show");
});

callModal.addEventListener("click", function (event) {

    if (event.target === callModal) {
        callModal.classList.remove("show");
    }

});


/* =========================================
   PROJECT DETAILS MODAL
========================================= */

const serviceModal = document.getElementById("serviceModal");

const serviceModalClose =
    document.getElementById("serviceModalClose");

const serviceModalTitle =
    document.getElementById("serviceModalTitle");

const serviceModalDescription =
    document.getElementById("serviceModalDescription");

const serviceModalList =
    document.getElementById("serviceModalList");

const serviceModalIcon =
    document.getElementById("serviceModalIcon");

// Change "Areas Covered" to "Latest Project Titles"
const serviceModalHeading =
    document.querySelector(".service-modal-content h3");


/* =========================================
   PROJECT DETAILS
========================================= */

const serviceDetails = {

    /* =====================================
       ARTIFICIAL INTELLIGENCE
    ===================================== */

    ai: {

        title: "Artificial Intelligence",

        description:
            "Explore our latest Artificial Intelligence project ideas covering Computer Vision, Generative AI, Deep Learning, Healthcare AI and intelligent automation.",

        icon:
            '<i class="fa-solid fa-brain"></i>',

        projects: [

            "AI-Powered Medical Image Analysis",

            "Real-Time Object Detection and Tracking using YOLO",

            "Generative AI Research Assistant using RAG",

            "AI-Based Face Anti-Spoofing System",

            "Intelligent Document Analysis using AI",

            "AI-Based Sign Language Recognition",

            "Predictive Healthcare Analytics using Machine Learning",

            "AI-Based Anomaly Detection System",

            "Brain Tumor Classification using Deep Learning",

            "AI-Based Smart Surveillance System"

        ]

    },


    /* =====================================
       PYTHON DEVELOPMENT
    ===================================== */

    python: {

        title: "Python Development",

        description:
            "Explore Python-based project ideas for automation, desktop applications, data analytics, artificial intelligence, database systems and intelligent software solutions.",

        icon:
            '<i class="fa-brands fa-python"></i>',

        projects: [

            "AI-Powered Research Assistant using Python",

            "Intelligent Document Processing System",

            "Python-Based Cyber Threat Detection System",

            "Automated Data Analytics Dashboard",

            "Machine Learning Prediction System using Python",

            "OCR-Based Document Management System",

            "Python-Based Student Performance Prediction",

            "AI-Powered Workflow Automation System",

            "Python-Based Healthcare Management System",

            "Intelligent Resume Screening System"

        ]

    },


    /* =====================================
       INTERNET OF THINGS
    ===================================== */

    iot: {

        title: "Internet of Things",

        description:
            "Explore IoT project ideas combining sensors, ESP32, cloud platforms, edge intelligence and real-time monitoring for healthcare, agriculture, industry and smart environments.",

        icon:
            '<i class="fa-solid fa-wifi"></i>',

        projects: [

            "Smart Healthcare Monitoring and Alert System",

            "AI-Based Smart Agriculture Monitoring",

            "Industrial Equipment Anomaly Detection",

            "Smart Energy Consumption Monitoring System",

            "IoT-Based Elderly Fall Detection System",

            "Smart Waste Management System",

            "Edge AI-Based Security Monitoring System",

            "IoT-Based Air Quality Monitoring System",

            "Smart Water Quality Monitoring System",

            "IoT-Based Fire and Smoke Detection System"

        ]

    },


    /* =====================================
       RASPBERRY PI
    ===================================== */

    raspberry: {

        title: "Raspberry Pi",

        description:
            "Explore Raspberry Pi-based project ideas combining Edge AI, Computer Vision, sensors, robotics, automation and intelligent embedded systems.",

        icon:
            '<i class="fa-solid fa-microchip"></i>',

        projects: [

            "Edge AI Object Detection using Raspberry Pi",

            "AI-Based Elderly Fall Detection System",

            "Real-Time Fire and Smoke Detection",

            "Smart Agriculture Monitoring using Raspberry Pi",

            "AI-Based Sign Language Recognition",

            "Intelligent Security Camera using Raspberry Pi",

            "Autonomous Robot with Computer Vision",

            "Local AI Assistant using Raspberry Pi",

            "Raspberry Pi-Based Smart Healthcare Monitor",

            "IoT-Based Industrial Monitoring System"

        ]

    }

};


/* =========================================
   OPEN PROJECT DETAILS MODAL
========================================= */

const serviceLinks =
    document.querySelectorAll(".view-details");


serviceLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const serviceType =
            this.getAttribute("data-service");

        const service =
            serviceDetails[serviceType];

        if (!service) {
            return;
        }


        /* ==============================
           SET TITLE
        ============================== */

        serviceModalTitle.textContent =
            service.title;


        /* ==============================
           SET DESCRIPTION
        ============================== */

        serviceModalDescription.textContent =
            service.description;


        /* ==============================
           SET ICON
        ============================== */

        serviceModalIcon.innerHTML =
            service.icon;


        /* ==============================
           CHANGE HEADING
        ============================== */

        if (serviceModalHeading) {

            serviceModalHeading.textContent =
                "Latest Project Titles";

        }


        /* ==============================
           CLEAR OLD PROJECTS
        ============================== */

        serviceModalList.innerHTML = "";


        /* ==============================
           ADD PROJECT TITLES
        ============================== */

        service.projects.forEach(function (project) {

            const li =
                document.createElement("li");

            li.textContent = project;

            serviceModalList.appendChild(li);

        });


        /* ==============================
           SHOW MODAL
        ============================== */

        serviceModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================
   CLOSE MODAL
========================================= */

serviceModalClose.addEventListener("click", function () {

    serviceModal.classList.remove("show");

    document.body.style.overflow = "";

});


/* =========================================
   CLOSE BY CLICKING OUTSIDE
========================================= */

serviceModal.addEventListener("click", function (event) {

    if (event.target === serviceModal) {

        serviceModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* =========================================
   CLOSE USING ESCAPE KEY
========================================= */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        serviceModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});
