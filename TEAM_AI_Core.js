export function TEAM_AI_CORE(team){
    return {
        pulse: (team.team.NC.energy + team.team.PQ.load + team.team.TMP.echo) % 1000,
        mode: "AI-Core",
        activeNodes: Object.keys(team.team)
    };
}
