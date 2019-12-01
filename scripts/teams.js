var teams = {
    teamBase = function (teamName, teamId, teamImage, city) {
        return {
            City: city,
            TeamName: teamName,
            TeamId: teamId,
            TeamImage: "images/" + teamImage
        };
    },
    sixers = function () {
        return teams.teamBase(
            "Philadelphia",
            "76ers",
            0,
            "76ers.png"
        );
    },
    bucks = function () {
        return teams.teamBase(
            "Milwaukee",
            "Bucks",
            0,
            "Bucks.png"
        );
    },
    bulls = function () {
        return teams.teamBase(
            "Chicago",
            "Bulls",
            0,
            "Bulls.png"
        );
    },
    cavaliers = function () {
        return teams.teamBase(
            "Cleveland",
            "Cavaliers",
            0,
            "Cavaliers.png"
        );
    },
    celtics = function () {
        return teams.teamBase(
            "Boston",
            "Celtics",
            0,
            "Celtics.png"
        );
    },
    clippers = function () {
        return teams.teamBase(
            "",
            "Clippers",
            0,
            "Clippers.png"
        );
    },
    grizzlies = function () {
        return teams.teamBase(
            "",
            "Grizzlies",
            0,
            "Grizzlies.png"
        );
    },
    hawks = function () {
        return teams.teamBase(
            "",
            "Hawks",
            0,
            "Hawks.png"
        );
    },
    heat = function () {
        return teams.teamBase(
            "Miami",
            "Heat",
            0,
            "Heat.png"
        );
    },
    hornets = function () {
        return teams.teamBase(
            "",
            "Hornets",
            0,
            "Hornets.png"
        );
    },
    jazz = function () {
        return teams.teamBase(
            "Utah",
            "Jazz",
            0,
            "Jazz.png"
        );
    },
    kings = function () {
        return teams.teamBase(
            "Los Angeles",
            "Kings",
            0,
            "Kings.png"
        );
    },
    knicks = function () {
        return teams.teamBase(
            "New York",
            "Knicks",
            0,
            "Knicks.png"
        );
    },
    lakers = function () {
        return teams.teamBase(
            "Los Angeles",
            "Lakers",
            0,
            "Lakers.png"
        );
    },
    magic = function () {
        return teams.teamBase(
            "Orlando",
            "Magic",
            0,
            "Magic.png"
        );
    },
    mavericks = function () {
        return teams.teamBase(
            "Dallas",
            "Mavericks",
            0,
            "Mavericks.png"
        );
    },
    nets = function () {
        return teams.teamBase(
            "New York",
            "Nets",
            0,
            "Nets.png"
        );
    },
    nuggets = function () {
        return teams.teamBase(
            "Colorado",
            "Nuggets",
            0,
            "Nuggets.png"
        );
    },
    pacers = function () {
        return teams.teamBase(
            "Indiana",
            "Pacers",
            0,
            "Pacers.png"
        );
    },
    pelicans = function () {
        return teams.teamBase(
            "New Orleans",
            "Pelicans",
            0,
            "Pelicans.png"
        );
    },
    pistons = function () {
        return teams.teamBase(
            "Detroit",
            "Pistons",
            0,
            "Pistons.png"
        );
    },
    raptors = function () {
        return teams.teamBase(
            "",
            "Raptors",
            0,
            "Raptors.png"
        );
    },
    rockets = function () {
        return teams.teamBase(
            "Houston",
            "Rockets",
            0,
            "Rockets.png"
        );
    },
    sonics = function () {
        return teams.teamBase(
            "Seattle",
            "Sonics",
            0,
            "Sonics.png"
        );
    },
    spurs = function () {
        return teams.teamBase(
            "San Antonio",
            "Spurs",
            0,
            "Spurs.png"
        );
    },
    suns = function () {
        return teams.teamBase(
            "Phoenix",
            "Suns",
            0,
            "Suns.png"
        );
    },
    thunder = function () {
        return teams.teamBase(
            "",
            "Thunder",
            0,
            "Thunder.png"
        );
    },
    timberwolves = function () {
        return teams.teamBase(
            "",
            "Timberwolves",
            0,
            "Timberwolves.png"
        );
    },
    trailblazers = function () {
        return teams.teamBase(
            "Portland",
            "Trailblazers",
            0,
            "TrailBlaizers.png"
        );
    },
    warriors = function () {
        return teams.teamBase(
            "Golden State",
            "Warriors",
            0,
            "Warriors.png"
        );
    },
    wizards = function () {
        return teams.teamBase(
            "Washington",
            "Wizards",
            0,
            "Wizards.png"
        );
    }
}