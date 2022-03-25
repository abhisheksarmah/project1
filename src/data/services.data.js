import { corporates_aqcare_url, sustainability_experts_aqcare_url, individuals_aqlife_url, residential_societies_aqlife_url, schools_aqcare_url, home_aqlife_url, home_aqcare_url } from "./urls.data";

const servicesArray = [
    {
        id: 1,
        name:"At Quest Care Services",
        url: home_aqcare_url,
        items: [
            {
                id: 1,
                name:"Corporates",
                url: corporates_aqcare_url,
            },
            {
                id: 2,
                name:"Schools",
                url: schools_aqcare_url,
            },
            {
                id: 3,
                name:"Sustainability Experts",
                url: sustainability_experts_aqcare_url,
            },
        ]
    },
    {
        id: 1,
        name:"At Quest Life Services",
        url: home_aqlife_url,
        items: [
            {
                id: 1,
                name:"Residential Societies",
                url: residential_societies_aqlife_url,
            },
            {
                id: 2,
                name:"Individuals",
                url: individuals_aqlife_url,
            },
        ]
    },
];

export default servicesArray;