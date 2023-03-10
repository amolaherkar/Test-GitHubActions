module.exports = {
    onboardingConfig: {
        extends: [
            "config:base"
            ]
    },
    recreateClosed: 'true',
    branchPrefix: 'test-renovate/',
    gitAuthor: 'Amol Aherkar <amolaherkar@gmail.com>',
    onboarding: false,
    platform: 'github',
    repositories: ['amolaherkar/Test-GitHubActions'],
};
