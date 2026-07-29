export function TEAM_FUSION_SPHERE(team){
    return {
        radius: team.team.NET.quantum / 40,
        fusionLevel: team.team.NET.quantum,
        active: true
    };
}
