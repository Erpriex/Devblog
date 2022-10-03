module.exports = {
    title: 'Devblog',


    theme: '@vuepress/theme-blog',
    themeConfig: {
        searchPlaceholder: 'Rechercher',
        dateFormat: 'DD/MM/YYYY',
        nav: [
            {
                text: 'CheatSheet',
                link: 'https://cheatsheet.trempe.dev',
            },
            {
                text: 'Portfolio',
                link: 'https://ctrempe.fr',
            },
        ],
        footer: {
            contact: [
                {
                    type: 'github',
                    link: 'https://github.com/Erpriex',
                },
                {
                    type: 'linkedin',
                    link: 'https://www.linkedin.com/in/clement-trempe/',
                },
                {
                    type: 'music',
                    link: 'https://open.spotify.com/user/2sa7m4pv6prjdo1dz0lsplioj?si=b77628d724cf498d',
                }
            ],
            copyright: [
                {
                    text: 'Clément Trempé',
                }
            ]
        }
    }

}