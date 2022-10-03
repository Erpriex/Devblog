module.exports = {
    title: 'Devblog',


    theme: '@vuepress/theme-blog',
    themeConfig: {
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
                }
            ]
        }
    }

}