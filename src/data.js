import {SiOpenaigym} from 'react-icons/si'



export const links = [
    {
        name: "Home",
        path: '/'
    },
    {
        name: "About",
        path: '/about'
    },
    {
        name: "Gallery",
        path: '/gallery'
    },
    {
        name: "Treatment",
        path: '/plans'
    },
    {
        name: "Crew",
        path: '/doctors'
    },
    {
        name: "Contact",
        path: '/contact'
    }
]







export const programs = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Teeth whitening",
        info: "Brightens discolored or stained teeth",
        path: "/programs/111"
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Dental implant",
        info: "Replaces a missing tooth with a natural-looking implant.",
        path: "/programs/222"
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Root canal treatment",
        info: " Treats the infected or inflamed pulp of the tooth",
        path: "/programs/333"
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Tooth extraction",
        info: "This is the day that the lord has made. We will rejoice!",
        path: "/programs/444"
    },
    {
        id: 5,
        icon: <SiOpenaigym/>,
        title: "Routine dental check-up and cleaning",
        info: "Regular preventive care to maintain oral health",
        path: "/programs/444"
    },
    {
        id: 6,
        icon: <SiOpenaigym/>,
        title: "Tooth filling",
        info: "Restores the tooth structure damaged by decay or trauma",
        path: "/programs/444"
    },
    {
        id: 6,
        icon: <SiOpenaigym/>,
        title: "Invisalign",
        info: "Clear, removable braces that gradually straighten teeth",
        path: "/programs/444"
    }
]








export const values = [
    {
        id: 1,
        icon: <SiOpenaigym/>,
        title: "Monday",
        desc: "Call us 65-00-17-569 to place an appointment. We are avaliable from 9am - 18 pm.",
    
    },
    {
        id: 2,
        icon: <SiOpenaigym/>,
        title: "Tuesday",
        desc: "Call us 65-00-17-569 to place an appointment. We are avaliable from 9am - 18 pm."
    },
    {
        id: 3,
        icon: <SiOpenaigym/>,
        title: "Wednesday",
        desc: "Call us 65-00-17-569 to place an appointment. We are avaliable from 9am - 18 pm."
    },
    {
        id: 4,
        icon: <SiOpenaigym/>,
        title: "Thursday",
        desc: "Call us 65-00-17-569 to place an appointment. We are avaliable from 9am - 18 pm.."
    },
    {
        id: 5,
        icon: <SiOpenaigym/>,
        title: "Friday",
        desc: "Call us 65-00-17-569 to place an appointment. We are avaliable from 9am - 18 pm."
    }
]









export const faqs = [
    {
        id: 1,
        question: "What services does Irrihortz Clinic offer?",
        answer: "Irrihortz Clinic offers a range of dental services, including regular check-ups and cleanings, fillings, extractions, crowns and bridges, root canals, Invisalign"
    },
    {
        id: 2,
        question: "How often should I come in for a dental check-up?",
        answer: "We recommend coming in for a dental check-up and cleaning every six months to maintain optimal dental health."
    },
    {
        id: 3,
        question: "What should I do if I have a dental emergency?",
        answer: "If you have a dental emergency, such as a broken tooth or severe pain, please call our office immediately. We will do our best to accommodate you as quickly as possible."
    },
    {
        id: 4,
        question: "What forms of payment does Irrihortz Clinic accept?",
        answer: "Irrihortz Clinic accepts cash, check, and all major credit cards. We also offer financing options through third-party providers."
    },
    {
        id: 5,
        question: "What can I expect during a dental cleaning appointment?",
        answer: "During a dental cleaning appointment, our dental hygienist will remove plaque and tartar from your teeth, floss between your teeth, and polish your teeth to remove surface stains. They will also check your gums and overall oral health."
    },
    {
        id: 6,
        question: "Does Irrihortz Clinic offer orthodontic treatments like braces?",
        answer: "Yes, we offer orthodontic treatments like braces and clear aligners to help straighten teeth and correct bite issues. Please contact us to schedule a consultation with our orthodontist."
    }
]








export const testimonials = [
    {
        id: 1,
        name: "Nathaniel Obafemi",
        quote: "I was treated by Naiara Alkorta and I had the best treatment. She made me felt so comfortable and gave me the best treatment. I would recommend letting her treat you if you go to Irrihortz clinic.",
        job: "Data Analyst",
        avatar: require("./images/IMG_2288 conv.jpeg")
    },
    
]







export const plans = [
    {
        id: 1,
        name: 'Price ',
        desc: 'This package is perfect for beginners who need constant help',
        price: 29.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: false},
            {feature: 'Sixth Feature', available: false},
            {feature: 'Seventh Feature', available: false},
            {feature: 'Seventh Feature Plus', available: false},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            
        ]
    },
    {
        id: 2,
        name: 'Gold Package',
        desc: 'This is the perfect package for beginners who know what their doing',
        price: 49.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: false},
            {feature: 'Ninth Feature', available: false},
            {feature: 'Tenth Feature', available: false},
            {feature: 'Eleventh Feature', available: false}
        ]
    },
    {
        id: 3,
        name: 'Platinum Package',
        desc: 'This package is perfect for busy people who need home service',
        price: 89.99,
        features: [
            {feature: 'First Feature', available: true},
            {feature: 'Second Feature', available: true},
            {feature: 'Third Feature', available: true},
            {feature: 'Fourth Feature', available: true},
            {feature: 'Fifth Feature', available: true},
            {feature: 'Fifth Feature Plus', available: true},
            {feature: 'Sixth Feature', available: true},
            {feature: 'Seventh Feature', available: true},
            {feature: 'Seventh Feature Plus', available: true},
            {feature: 'Eighth Feature', available: true},
            {feature: 'Ninth Feature', available: true},
            {feature: 'Tenth Feature', available: true},
            {feature: 'Eleventh Feature', available: true}
        ]
    },
]









const Doctor1 = require('./images/fotos/x.jpg')
const Doctor2 = require('./images/fotos/y.jpg')
const Doctor3 = require('./images/fotos/z.jpg')
const Doctor4 = require('./images/fotos/xx.JPG')
const Trainer6 = require('./images/trainer6.jpg')


export const doctors = [
    {
        id: 1,
        image: Doctor1,
        name: 'Nerea Irurzun',
        job: 'Higienist',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 2,
        image: Doctor2,
        name: 'Aintzane Irurzun',
        job: 'Higienist',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 3,
        image: Doctor3,
        name: 'Naiara Alkorta',
        job: 'Dentist',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/']
    },
    {
        id: 4,
        image: Doctor4,
        name: 'Amaia',
        job: 'Surgeon',
        socials: ['https://instagram.com/', 'https://twitter.com/', 'https://facebook.com/', 'https://linkedin.com/'] 
        
        
        
    
    
        
        
        
        
        
    },
    
        
        
]