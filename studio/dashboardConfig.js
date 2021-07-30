export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '61048571c714da16ebe6f3c9',
                  title: 'Sanity Studio',
                  name: 'derek-in-the-kitchen-store-studio',
                  apiId: '56e2a225-a927-4c73-a028-acfc6627cc28'
                },
                {
                  buildHookId: '61048571422fca1999ac713d',
                  title: 'Portfolio Website',
                  name: 'derek-in-the-kitchen-store',
                  apiId: '365a7ad5-284d-4035-b4b3-6eb33cb87fac'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/esmith7196/derek-in-the-kitchen-store',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://derek-in-the-kitchen-store.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
