import { green_compass_aqlife_url } from "./urls.data";

const profilePanel = [
	{
		name: "My Dashboard",
		url: `${green_compass_aqlife_url}/console/`,
    items: [],
    loggedIn: true,
  },
	{
		name: `About Me`,
		url: `${green_compass_aqlife_url}/console/about`,
    items: [],
    loggedIn: true,
  },
	{
		name: `Sign Out`,
		url: "#",
    items: [],
    loggedIn: true,
  },
];

export default profilePanel;
