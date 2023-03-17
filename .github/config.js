module.exports = {
    branchPrefix: 'aa-renovate/',
    gitAuthor: 'Amol A <amolaherkar@gmail.com>',
    onboarding: false,
    platform: 'github',
	recreateClosed: 'true',
    repositories: ['amolaherkar/Test-GitHubActions'],
    vulnerabilityAlerts: {
	enabled: "true",
	labels: ["Vulnerability FOUND"],
	matchDepTypes: ["compile"],
	matchUpdateTypes: ["patch", "major", "minor"],
	groupName: "vulnerability-remediation",
	groupSlug: "CVE-Fixes"
    }
};
