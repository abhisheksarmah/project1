import { contact_us_aq_url, home_aq_url } from "../data/urls.data";
import experiences from "./experiences.data";
import profilePanel from "./profilePanel.data";
import servicesArray from "./services.data";

const navbarItems = [
    {
        name: "Profile",
        url: null,
        loggedIn: true,
        items: [
            ...profilePanel,
        ],
    },
    {
        name: "Home",
        expanded: false,
        url: home_aq_url,
        loggedIn: false,
    },
    {
        name: "Services",
        expanded: false,
        url: null,
        loggedIn: false,
        items: [   
            ...servicesArray
        ]
    },
    {
        name: "Experiences",
        expanded: false,
        url: null,
        loggedIn: false,
        items: [
            ...experiences
        ],
    },
    {
        name: "Contact Us",
        url: contact_us_aq_url,
        items: [],
        loggedIn: false,
    },
]

export default navbarItems;