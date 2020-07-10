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

const createUserStats = (user) => {
    const returnData = {
        labels: [
            'Repositories',
            'Starred Repos',
            'Forked Repos',
            // 'Pull requests',
            // 'Commits',
            'Issues'
        ],
        datasets: [{
            label: 'User stats',
            backgroundColor: Colors.lightgreen,
            borderColor: Colors.limegreen,
            pointBackgroundColor: Colors.limegreen,
            data: []
        }]
    }

    const numbers = [5, 10, 15];
    const total = numbers.reduce((accumulator, item) => {
        return accumulator + item;
    }, 0)

    const starredRepo = user.repositories.nodes.filter((repo) => {
        return repo.stargazers.totalCount != 0
    })

    const forkedRepo = user.repositories.nodes.filter((repo) => {
        return repo.forkCount != 0
    })

    returnData.datasets[0].data.push(user.repositories.totalCount)
    returnData.datasets[0].data.push(starredRepo.length)
    returnData.datasets[0].data.push(forkedRepo.length)
        // returnData.datasets[0].data.push(user.pullRequests.totalCount)
        // returnData.datasets[0].data.push(user.commitComments.totalCount)
    returnData.datasets[0].data.push(user.issues.totalCount)

    return returnData
}
const createChartData = (user) => {
    const popularReposData = createPopularReposData(user.repositories.nodes)
    const languagesData = createLanguagesData(user.repositories.nodes)
    const userStats = createUserStats(user)

    return {
        popularReposData,
        languagesData,
        userStats
    }
}
export default createChartData