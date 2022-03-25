const relevants = {
    corporates: {
        relevant_name: "Corporates",
        relevant_icon: '/icons/E-Corporates.png'
    },
    schools: {
        relevant_name: "Schools",
        relevant_icon: '/icons/E-Schools.png'
    },
    residential_societies: {
        relevant_name: "Residential Societies",
        relevant_icon: '/icons/E-Residential Societies.png'
    },
    individuals: {
        relevant_name: "Individuals",
        relevant_icon: '/icons/E-Individuals.png'
    },
    yourself: {
        relevant_name: "You, The Sustainability Expert.",
        relevant_icon: '/icons/E-Sustainability Experts (yourself).png'
    }
}

const experts = [
    {
        category_name: 'Partnerships to deliver value together',
        title_description: "",
        services: [
            {
                name: "Knowledge Collaboration",
                icon: '/icons/E-Knowledge Collaboration.png',
                modal: {
                    title: "Knowledge Collaboration",
                    description: "Our customers seek the right expertise and knowledge while engaging with us. We look to partner with practiotioners who will equip us better during such client engagements."
                    ,icon: '/icons/E-Knowledge Collaboration.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies
                ]
            },
            {
                name: "Training and Skill building",
                icon: '/icons/E-Training and Skill building.png',
                modal: {
                    title: "Training and Skill building",
                    description: "We impart training, skilling, capacity development programs for our client stakeholders. So, if you cater to such programs for any of our target segments, we'd be happy to partner."
                    ,icon: '/icons/E-Training and Skill building.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies
                ]
            },
            {
                name: "Events/Workshop platform",
                icon: '/icons/E-Events-Workshop platform.png',
                modal: {
                    title: "Events/Workshop platform",
                    description: "We host an online booking platform for workshops/events happening online and offline. While they can be on varying topics, the underlying theme is Sustainability. If you conduct such sessions, we would be happy to list them for booking on our platform."
                    ,icon: '/icons/E-Events-Workshop platform.png'
                },
                relevant_for: [
                    relevants.individuals
                ]
            },
            {
                name: "Exclusive Sustainability Workshops",
                icon: '/icons/E-Exclusive Sustainability Workshops.png',
                modal: {
                    title: "Exclusive Sustainability Workshops",
                    description: "Learning programs are best delivered when the audience is homegeneous. We conduct Sustainability learning workshops for specifc groups exclusively like Corporate employees, Apartment residents, School students etc. Join us in delivering these together."
                    ,icon: '/icons/E-Exclusive Sustainability Workshops.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies
                ]
            },
            {
                name: "Emissions Reduction Projects",
                icon: '/icons/E-Emissions Reduction Projects.png',
                modal: {
                    title: "Emissions Reduction Projects",
                    description: "Our business clients are constantly looking for projects to bring down their emissions in their value chain (Scope 1,2 and 3). If you have a project that could help our clients reduce their footprint, we would be happy to engage with you"
                    ,icon: '/icons/E-Emissions Reduction Projects.png'
                },
                relevant_for: [
                    relevants.corporates
                ]
            },
            {
                name: "Green Projects",
                icon: '/icons/E-Green Projects.png',
                modal: {
                    title: "Green Projects",
                    description: "These projects show the earth some love and are focused at driving Sustainable development. These need not ncessarily have a focus on Emissions reduction but may look at other facets like biodiversity, water conservation, circularity etc. If you have any such ideas, do share and we will explore their fitment for our clients."
                    ,icon: '/icons/E-Green Projects.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies
                ]
            },
            {
                name: "Experiential Learning Workshops",
                icon: '/icons/E-Experiential Learning Workshops.png',
                modal: {
                    title: "Experiential Learning Workshops",
                    description: "There is no better way to learn than to experience various aspects first-hand. This is the essence of experiential learning sessions that we conduct for students of Class5-10. Join us if you have an idea that caters to this age-group."
                    ,icon: '/icons/E-Experiential Learning Workshops.png'
                },
                relevant_for: [
                    relevants.schools
                ]
            },
            {
                name: "Co-ideation and Design",
                icon: '/icons/E-Co-ideation and Design.png',
                modal: {
                    title: "Co-ideation and Design",
                    description: "We believe that today's crises and challenges cannot be solved alone. Collaboration, Co-ideation and co-innovation are needed to outsmart the situation. Join us to achieve this."
                    ,icon: '/icons/E-Co-ideation and Design.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies
                ]
            },
            {
                name: "Emissions Removal Projects",
                icon: '/icons/E-Emissions Removal Projects.png',
                modal: {
                    title: "Emissions Removal Projects",
                    description: "If you work on projects that remove Carbon Dioxide from the air, we are super-keen to speak to you. There is desperate need to create carbon sinks to avoid the global warming threshold. Let's speak."
                    ,icon: '/icons/E-Emissions Removal Projects.png'
                },
                relevant_for: [
                    relevants.corporates
                ]
            },
            {
                name: "Sustainable Products Marketplace",
                icon: '/icons/E-Sustainable Products Marketplace.png',
                modal: {
                    title: "Sustainable Products Marketplace",
                    description: "We believe that the world must move towards eco-friendly alternatives and enable this for our audiences through a marketplace for sustainable products. If you have a relevant product, we will find the relevant customer."
                    ,icon: '/icons/E-Sustainable Products Marketplace.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies, relevants.individuals
                ]
            },
            {
                name: "Sustainable Services Marketplace",
                icon: '/icons/E-Sustainable Services Marketplace.png',
                modal: {
                    title: "Sustainable Services Marketplace",
                    description: "Our audiences need some expert-support, some help, some guidance, some conversations while adopting and practicing sustainability. If you are up for these, our sustainability services marketplace is for you."
                    ,icon: '/icons/E-Sustainable Services Marketplace.png'
                },
                relevant_for: [
                    relevants.corporates, relevants.schools, relevants.residential_societies, relevants.individuals
                ]
            },
            {
                name: "Technology Solutions",
                icon: '/icons/E-Technology Solutions.png',
                modal: {
                    title: "Technology Solutions",
                    description: "This one keeps you - the Sustainability Expert - at the centre. If you would want some help in going digital through website/mobile apps etc, we are here for you. We already understand the domain of Sustainability and that should make your life easy."
                    ,icon: '/icons/E-Technology Solutions.png'
                },
                relevant_for: [
                    relevants.yourself
                ]
            }
        ]
    }
]

export default experts