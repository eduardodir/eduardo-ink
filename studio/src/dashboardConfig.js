export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5f65d9906d590f57c3b7fbe8',
                  title: 'Sanity Studio',
                  name: 'eduardo-ink-studio',
                  apiId: 'a6a9ba90-4813-4e71-bb1b-a4b921d80da3'
                },
                {
                  buildHookId: '5f65d9903e1e0824ee75e7e8',
                  title: 'Blog Website',
                  name: 'eduardo-ink',
                  apiId: '3958fd73-31b1-49e3-8899-3c2b9c66c074'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eduardodir/eduardo-ink',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://eduardo-ink.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
