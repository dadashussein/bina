module.exports = {
    extends: ['@commitlint/config-angular'],
    rules: {
        'type-enum': [
            2,
            'always',
            ['feat', 'fix', 'docs', 'hot', 'style', 'refactor', 'perf', 'test', 'chore', 'revert', 'migrate']
        ],
        'scope-enum': [
            2,
            'always',
            [
                //Package Jsonla bagli degisiklikler
                'package',
                //Componentlerle ilgili degisiklikler
                'component',
            ]
        ],
        'scope-empty': [2, 'never']
    }
};