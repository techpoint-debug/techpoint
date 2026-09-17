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

const serviceDetails = {

    ai: {

        title: "Artificial Intelligence",

        description:
            "We provide project development and research support in Artificial Intelligence, Computer Vision, Deep Learning and intelligent applications.",

        icon:
            '<i class="fa-solid fa-brain"></i>',

        areas: [
            "Face Recognition",
            "Chatbots",
            "Deep Learning",
            "Computer Vision",
            "Python",
            "TensorFlow",
            "OpenCV",
            "AI Academic Projects"
        ]

    },


    python: {

        title: "Python Development",

        description:
            "We develop Python-based applications for automation, desktop software, database systems and academic projects.",

        icon:
            '<i class="fa-brands fa-python"></i>',

        areas: [
            "Desktop Applications",
            "Automation",
            "Database Systems",
            "Python Programming",
            "Tkinter",
            "SQLite",
            "Data Processing",
            "Academic Projects"
        ]

    },


    iot: {

        title: "Internet of Things",

        description:
            "We develop IoT solutions using sensors, microcontrollers, cloud platforms and intelligent monitoring systems.",

        icon:
            '<i class="fa-solid fa-wifi"></i>',

        areas: [
            "Smart Home",
            "Smart Agriculture",
            "Industrial Automation",
            "ESP32",
            "Sensors and Actuators",
            "Cloud Integration",
            "IoT Monitoring",
            "IoT Academic Projects"
        ]

    },


    raspberry: {

        title: "Raspberry Pi",

        description:
            "We develop Raspberry Pi based embedded, robotics and automation projects using Python, GPIO and Linux.",

        icon:
            '<i class="fa-solid fa-microchip"></i>',

        areas: [
            "Embedded Systems",
            "Robotics",
            "Automation",
            "Python Programming",
            "GPIO Interfacing",
            "Linux",
            "Sensor Integration",
            "IoT Applications"
        ]

    }

};


/* =========================================
   OPEN MODAL
========================================= */

const serviceLinks =
    document.querySelectorAll(".view-details");

serviceLinks.forEach(function(link) {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        const serviceType =
            this.getAttribute("data-service");

        const service =
            serviceDetails[serviceType];

        if (!service) {
            return;
        }

        serviceModalTitle.textContent =
            service.title;

        serviceModalDescription.textContent =
            service.description;

        serviceModalIcon.innerHTML =
            service.icon;

        serviceModalList.innerHTML = "";

        service.areas.forEach(function(area) {

            const li =
                document.createElement("li");

            li.textContent = area;

            serviceModalList.appendChild(li);

        });

        serviceModal.classList.add("show");

        document.body.style.overflow = "hidden";

    });

});


/* =========================================
   CLOSE MODAL
========================================= */

serviceModalClose.addEventListener("click", function() {

    serviceModal.classList.remove("show");

    document.body.style.overflow = "";

});


/* =========================================
   CLOSE BY CLICKING OUTSIDE
========================================= */

serviceModal.addEventListener("click", function(event) {

    if (event.target === serviceModal) {

        serviceModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});


/* =========================================
   CLOSE USING ESCAPE
========================================= */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        serviceModal.classList.remove("show");

        document.body.style.overflow = "";

    }

});