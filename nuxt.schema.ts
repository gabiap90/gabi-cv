import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
    appConfig: {
        parent: group({
            title: 'Contacts',
            description: 'Your contacts and social media',
            fields: {
                email: field({
                    title: 'Email',
                    type: 'string',
                    description: 'your email in form of a string',
                    default: undefined
                }),
                linkdin: field({
                    title: 'Linkedin',
                    type: 'string',
                    description: 'Link to your Linkedin',
                    default: undefined
                })
            }
        })
    }
})


/* github: undefined,
            email: 'gabriel.projects90@proton.me',
            linkdin: undefined,
            pdf: undefined,
            phone: undefined */