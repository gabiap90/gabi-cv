import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
    appConfig: {
        theme: group({
            title: 'Theme css atributes',
            description: 'CV colors',
            fields: {
                secTitleColor: field({
                    title: 'Second Title Color',
                    type: 'string',
                    description: 'color for second title in header and job company titles',
                    default: '#f05a28'
                }),
                generalFontColor: field({
                    title: 'General Font Color',
                    type: 'string',
                    description: 'Font color for everything beside main titles',
                    default: 'rgb(102, 102, 102)'
                })
            }
        }),
        contact: group({
            title: 'Contacts',
            description: 'Your contacts and social media',
            fields: {
                cvTitle: field({
                    title: 'Cv title',
                    description: 'Usually your name',
                    type: 'string',
                    default: 'Some name'
                }),
                cvRoles: field({
                    title: 'Cv roles',
                    descriptions: 'Roles defined at the top of the CV',
                    type: "array"
                    default: []
                }),
                email: field({
                    title: 'Email',
                    type: 'string',
                    description: 'your email in form of a string',
                    default: undefined
                }),
                linkedin: field({
                    title: 'Linkedin',
                    type: 'string',
                    description: 'Link to your Linkedin',
                    default: undefined
                }),
                pdf: field({
                    title: 'Cv-PDF',
                    type: 'media',
                    description: 'Link to this CV as pdf format',
                    default: undefined
                }),
                phone: field({
                    title: 'Phone',
                    type: 'string',
                    description: 'Phone',
                    default: undefined
                }),
                github: field({
                    title: 'Github',
                    type: 'string',
                    description: 'Phone',
                    default: undefined
                })
            }
        })
    }
})