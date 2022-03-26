import { contact_us_aq_url, home_aq_url } from "./urls.data";
import {
  climastack_corporates,
  climastack_individuals,
  climastack_residents,
  climastack_schools,
  climastack_sustainable_experts,
} from "./climastack.data";
import experiences from "./experiences.data";
import { greenwall } from "./greenWall.data";
import profilePanel from "./profilePanel.data";
import servicesArray from "./services.data";

export const climastack = [
  {
    id: 1,
    name: `For Corporates`,
    url: null,
    loggedIn: false,
    items: [...climastack_corporates],
  },
  {
    id: 2,
    name: `For Schools`,
    url: null,
    loggedIn: false,
    items: [...climastack_schools],
  },
  {
    id: 3,
    name: `For Residential Societies`,
    url: null,
    loggedIn: false,
    items: [...climastack_residents],
  },
  {
    id: 4,
    name: `For Individuals`,
    url: null,
    loggedIn: false,
    items: [...climastack_individuals],
  },
  {
    id: 5,
    name: `For Sustainability Experts`,
    url: null,
    loggedIn: false,
    items: [...climastack_sustainable_experts],
  },
];

export const navbarItems = [
  {
    name: "Profile",
    url: null,
    loggedIn: true,
    items: [...profilePanel],
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
    items: [...servicesArray],
  },
  {
    name: "CLIMASTACK",
    expanded: false,
    url: null,
    loggedIn: false,
    items: [...climastack],
  },
  {
    name: "The Green Wall",
    expanded: false,
    url: null,
    loggedIn: false,
    items: [...greenwall],
  },
  {
    name: "Contact Us",
    url: contact_us_aq_url,
    items: [],
    loggedIn: false,
  },
];
