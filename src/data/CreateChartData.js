import Colors from '../shared/Colors'

const createPopularReposData = (repos) => {

    const returnData = {
        labels: [],
        datasets: [{
                label: 'Stars',
                backgroundColor: Colors.yellowgreen,
                data: []
            },
            {
                label: 'Forks',
                backgroundColor: Colors.tomato,
                data: []
            }
        ]
    }

    const maxRepoCount = 5
    repos = repos.length > maxRepoCount ? repos.slice(0, maxRepoCount) : repos

    repos.forEach((repo) => {
        returnData.datasets[0].data.push(repo.stargazers.totalCount)
        returnData.datasets[1].data.push(repo.forkCount)
        returnData.labels.push(repo.name)
    })

    return returnData
}

const createLanguagesData = (repos) => {
    const returnData = {
        labels: [],
        datasets: [{
            label: 'Languages',
            backgroundColor: Object.values(Colors),
            data: [],

        }]
    }

    const languageFrequencyCount = repos.reduce((lfc, repo) => {
        if (repo.primaryLanguage)
            lfc[repo.primaryLanguage.name] ? lfc[repo.primaryLanguage.name]++ : lfc[repo.primaryLanguage.name] = 1
        return lfc
    }, {});

    Object.keys(languageFrequencyCount).forEach((language) => {
        returnData.labels.push(language)
        returnData.datasets[0].data.push(languageFrequencyCount[language])
    })

    return returnData
}

const createChartData = (repos) => {
    const popularReposData = createPopularReposData(repos)
    const languagesData = createLanguagesData(repos)

    return {
        popularReposData,
        languagesData
    }
}
export default createChartData