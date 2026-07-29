export function TEAM_DASHBOARD(team){
    return {
        status: team.status,
        station: team.station,
        nodes: Object.keys(team.team),
        fusion: team.team.NET.quantum || 0,
        aiMode: team.team.HUB.mode || "AI-Core"
    };
}
