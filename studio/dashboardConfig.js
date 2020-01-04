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
                  buildHookId: '5e1063b58989511b9aed5047',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-dn9ovo1d',
                  apiId: 'f6dd3f2f-dd73-4ab8-873c-b7ae82b6a207'
                },
                {
                  buildHookId: '5e1063b5c61b6340dcc028c0',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-wbgece8j',
                  apiId: '706317df-7e19-4e76-9380-8ce7b7b18ebb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/emmaboardman1986/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-wbgece8j.netlify.com', category: 'apps' }
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
