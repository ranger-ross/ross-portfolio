import {defineDocumentType, makeSource} from 'contentlayer/source-files'

export const Project = defineDocumentType(() => ({
    name: 'Project',
    filePathPattern: `**/*.md`,
    fields: {
        title: {
            type: 'string',
            description: 'The title of the post',
            required: true,
        },
        date: {
            type: 'date',
            description: 'The date of the post',
            required: true,
        },
    },
    computedFields: {
        url: {
            type: 'string',
            resolve: (post) => `/projects/${post._raw.flattenedPath}`,
        },
    },
}))

export default makeSource({
    contentDirPath: 'posts/projects',
    documentTypes: [Project],
})
