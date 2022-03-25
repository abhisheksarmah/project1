import { email_logo, facebook_logo, instagram_logo, linkedin_logo, phone_logo, twitter_logo, youtube_logo } from "./cdn.data";
import { email_aqcare_url, email_aqlife_url, facebook_aq_url, instagram_aq_url, linkedin_aq_url, phone_aqcare_url, phone_aqlife_url, twitter_aq_url, youtube_aq_url } from "./connectWithUs.urls";

export const aq_social_media = [
    {
        name:  `LinkedIn`,
        label: ``,
        logo: linkedin_logo,
        url: linkedin_aq_url,
    },
    {
        name:  `Twitter`,
        label: ``,
        logo: twitter_logo,
        url: twitter_aq_url,
    },
    {
        name:  `Youtube`,
        label: ``,
        logo: youtube_logo,
        url: youtube_aq_url,
    },
    {
        name:  `Instagram`,
        label: ``,
        logo: instagram_logo,
        url: instagram_aq_url,
    },
    {
        name:  `Facebook`,
        label: ``,
        logo: facebook_logo,
        url: facebook_aq_url,
    },
]

export const aq_contacts = [
    {
        title: "At Quest Care",
        contacts: [
            {
                name: `Email`,
                label: `letstalk@at-quest.in`,
                logo: email_logo,
                url: email_aqcare_url
            },
            {
                name: `Phone`,
                label: `+91 96110 24447`,
                logo: phone_logo,
                url: phone_aqcare_url,
            }
        ]
    },
    {
        title: "At Quest Life",
        contacts: [
            {
                name: `Email`,
                label: `support@at-quest.in`,
                logo: email_logo,
                url: email_aqlife_url
            },
            {
                name: `Phone`,
                label: `+91 96110 54447`,
                logo: phone_logo,
                url: phone_aqlife_url,
            }
        ]
    }
]