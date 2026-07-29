export function TEAM_HUB_MATRIX(team){
    return {
        matrix: {
            NC: team.team.NC.state,
            PQ: team.team.PQ.mode,
            TMP: team.team.TMP.state,
            NET: team.team.NET.dimension,
            RESPO: team.team.RESPO.mode,
            HUB: team.team.HUB.mode
        }
    };
}
