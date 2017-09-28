var RESET_TEMPLATE = [
    '<style>',
    'body {',
    '  counter-reset: h1 SECTION_NUM;',
    '}',
    '</style>'
].join('\n') + '\n';

module.exports = {
    website: {
        assets: './assets',
        css: [
            'numbered-headings-website.css'
        ]
    },
    ebook: {
        assets: './assets',
        css: [
            'numbered-headings.css'
        ]
    },
    hooks: {
        'page:before': function(page) {
            if (!page.progress.current) {
                return page
            }
            var sectionNum = page.progress.current.index;
            var counterReset = RESET_TEMPLATE.replace(/SECTION_NUM/, sectionNum);
            page.content = counterReset + page.content;

            return page;
        }
    }
};